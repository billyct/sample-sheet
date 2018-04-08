import { createStore, combineReducers } from 'redux';
import diametersReducer from './reducers/diameters';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';

const reducers = combineReducers({
  diameters: diametersReducer,
});

const store = createStore(
  reducers,
  loadState()
);

store.subscribe(throttle(() => saveState({
  diameters: store.getState().diameters,
}), 1000));

export default store;
