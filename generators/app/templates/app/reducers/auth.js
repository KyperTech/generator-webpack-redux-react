import {
  LOGIN_ATTEMPT,
  LOGIN_RESPONSE,
  SIGNUP_ATTEMPT,
  SIGNUP_RESPONSE,
  LOGOUT_ATTEMPT,
  LOGOUT_RESPONSE,
  AUTH_ERR
} from '../actions/auth';
import merge from 'lodash/object/merge';
import Matter from 'kyper-matter';
let matter = new Matter('exampleApp');

export default function auth(state = {
  isFetching: false,
  account: null
}, action) {
  switch (action.type) {
  case LOGIN_ATTEMPT:
    console.log('Attempt login reducer with', action);
    return merge({}, state, {isFetching: true});
  case LOGIN_RESPONSE:
    console.log('Login response reducer with', action);
    return merge({}, state, {isFetching: false, account: action.account});
  case SIGNUP_ATTEMPT:
    console.log('Signup attempt reducer called', action);
    return merge({}, state, {isFetching: true});
  case SIGNUP_RESPONSE:
    console.log('Signup response reducer with', action);
    return merge({}, state, {isFetching: false, account: action.account});
  case LOGOUT_ATTEMPT:
    console.log('Logout reducer called', action.payload);
    return merge({}, state, {isFetching: true});
  case LOGOUT_RESPONSE:
    console.log('Logout response reducer with', action);
    return merge({}, state, {isFetching: false, account: null});
  case AUTH_ERR:
    return merge({}, state, {isFetching: false});
  default:
    return state;
  }
}
