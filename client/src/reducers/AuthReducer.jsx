import * as actions from '../actions/types';
import {createReducer} from './ReducerGen';

const INITIAL_STATE = true;
const changeAuth = (state = INITIAL_STATE, payload) => {
 return payload;
};

export default createReducer(INITIAL_STATE, {
 [actions.CHANGE_AUTH]: changeAuth,
});
