/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { REFRESH } from './mutation-types';

export default {
  [REFRESH](state, list) {
    state.list = list;
  },
};
