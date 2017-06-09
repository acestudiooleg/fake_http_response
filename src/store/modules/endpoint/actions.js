/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import { create, update, read, remove } from '@/services/LSDB';
import { UPDATE, RESET } from './mutation-types';


export const updateEndpointData = ({ commit }, payload) => {
  commit(UPDATE, payload);
};

export const load = ({ commit }, id) => {
  const item = read(id);
  commit(UPDATE, item);
};

export const saveEndpointData = ({ commit }, payload) => {
  if (payload.id && payload.id !== 'new') {
    update(payload.id, payload);
  } else {
    create(payload);
  }
  commit(RESET);
};

export const removeEndpoint = ({ commit }, payload) => {
  if (payload.id) {
    remove(payload.id);
    commit(RESET);
  }
};


export default {
  updateEndpointData,
  saveEndpointData,
  load,
  removeEndpoint,
};
