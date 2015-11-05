import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import cars from './cars';
import auth from './auth';

const rootReducer = combineReducers({
  cars,
  auth,
  router: routerStateReducer
});

export default rootReducer;
