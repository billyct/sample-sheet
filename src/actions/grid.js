import { RESET_GRID, UPDATE_GRID } from '../actionTypes';

export const updateGrid = grid => ({
  type: UPDATE_GRID,
  payload: grid,
});

export const resetGrid = () => ({
  type: RESET_GRID,
});
