/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import { create, update, read } from '@/services/LSDB';
import { UPDATE } from './mutation-types';


export const updateEndpointData = ({ commit }, payload) => {
  commit(UPDATE, payload);
};

export const load = ({ commit }, id) => {
  const item = read(id);
  commit(UPDATE, item);
};

export const saveEndpointData = ({ commit }, payload) => {
  if (payload.id) {
    update(payload.id, payload);
  } else {
    create(payload);
  }
};

export default {
  updateEndpointData,
  saveEndpointData,
  load,
};
