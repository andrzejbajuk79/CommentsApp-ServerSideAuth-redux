import * as actions from '../actions/types';
import {createReducer} from './ReducerGen';

const INITIAL_STATE = [];
const saveComment = (state = INITIAL_STATE, payload) => {
 return [...state, payload];
};
const fetchComments = (state = INITIAL_STATE, payload) => {
 const comments = payload.data.map((comment) => comment.name);
 return [...state, ...comments];
};

export default createReducer(INITIAL_STATE, {
 [actions.SAVE_COMMENT]: saveComment,
 [actions.FETCH_COMMENTS]: fetchComments,
});

// export default function (state = [], action) {
//  const {type, payload} = action;

// switch (type) {
//  case actions.SAVE_COMMENT:
//   return [...state, payload];
//  case actions.FETCH_COMMENTS:
//   const comments = payload.data.map((comment) => comment.name);
//   console.log(comments);

//   return [...state, ...comments];
//  default:
//   return state;
// }
// }
