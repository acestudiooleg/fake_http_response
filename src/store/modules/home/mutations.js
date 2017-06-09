/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { REFRESH, SET_STATUS } from './mutation-types';

export default {
  [REFRESH]: (state, list) => ({ list }),
  [SET_STATUS]: (state, status) => ({ status }),

};
