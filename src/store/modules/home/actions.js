/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import { all } from '@/services/LSDB';
import { activate, deactivate } from '@/services/xhrreplace';

import { REFRESH, SET_STATUS } from './mutation-types';

export const refresh = ({ commit }) => {
  const list = all();
  commit(REFRESH, list);
};

export const activateXHR = ({ commit }, list) => {
  if (list.length) {
    activate(list);
    commit(SET_STATUS, true);
  }
};
export const deactivateXHR = ({ commit }) => {
  deactivate();
  commit(SET_STATUS, false);
};

export default {
  refresh,
  activateXHR,
  deactivateXHR,
};
