import * as actions from '../actions/types';
const INITIAL_STATE = {authenticated: '', errorMessage: ''};

export default function (state = INITIAL_STATE, action) {
 const {type, payload} = action;
 switch (type) {
  case actions.AUTH_USER:
   return {...state, authenticated: payload};
  case actions.AUTH_ERROR:
   return {...state, errorMessage: payload};
  default:
   return state;
 }
}
