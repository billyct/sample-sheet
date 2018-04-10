import { UPDATE_GRID, RESET_GRID } from '../actionTypes';
import { rowHeaderDefault, rowsAddDefault } from '../utils/sheet';

const initState = {
  data: [
    rowHeaderDefault,
    ...rowsAddDefault(),
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_GRID:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_GRID:
      return initState;
    default:
      return state;
  }
};
