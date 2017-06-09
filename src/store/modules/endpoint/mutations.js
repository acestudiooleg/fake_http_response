/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { UPDATE, RESET } from './mutation-types';
import { initState } from './state';

export default {
  [UPDATE]: (state, endpoint) => endpoint,
  [RESET]: () => initState,
};
