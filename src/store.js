import { createStore, combineReducers } from 'redux';
import diametersReducer from './reducers/diameters';
import gridReducer from './reducers/grid';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';
import isEmpty from 'lodash/isEmpty';

const reducers = combineReducers({
  diameters: diametersReducer,
  grid: gridReducer,
});

const localState = loadState();

const store = createStore(
  reducers,
  localState
);

if (isEmpty(localState)) {
  saveState({
    diameters: store.getState().diameters,
  });
}

store.subscribe(throttle(() => saveState({
  diameters: store.getState().diameters,
  grid: store.getState().grid,
}), 1000));

export default store;
