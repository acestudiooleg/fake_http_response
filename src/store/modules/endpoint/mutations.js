/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { UPDATE } from './mutation-types';

export default {
  [UPDATE](state, endpoint) {
    console.log(endpoint);
    state.status = endpoint.status;
    state.endpoint = endpoint.endpoint;
    state.response = endpoint.response;
  },
};
