/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import { all } from '@/services/LSDB';

import { REFRESH } from './mutation-types';

export const refresh = ({ commit }) => {
  const list = all();
  commit(REFRESH, list);
};

export default {
  refresh,
};
