import { combineReducers } from 'redux';
import carReducer from './carReducer';
import storeReducer from './storeReducer';

export default combineReducers({
  carSale: carReducer, store: storeReducer
})
