/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules
import endpoint from './modules/endpoint';
import home from './modules/home';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const each = iterator => (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = iterator(obj[key], key);
  });
  return newObj;
};

const pureMutation = each((module) => {
  module.mutations = each(mutation => ((state, payload) => {
    const result = mutation(state, payload);
    if (result) {
      if (state instanceof Array) {
        state.splice(0, state.length);
      }
      each((x, key) => (state[key] = x))(result);
    }
  }))(module.mutations);
  return module;
});


export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: pureMutation({
    endpoint,
    home,
  }),

  /**
   * If strict mode should be enabled
   */
  strict: debug,

  /**
   * Plugins used in the store
   */
  plugins: debug ? [createLogger()] : [],
});
