import { UPDATE_DIAMETERS } from '../actionTypes';

export const updateDiameters = diameters => ({
  type: UPDATE_DIAMETERS,
  payload: diameters,
});
