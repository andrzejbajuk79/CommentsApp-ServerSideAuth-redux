import axios from 'axios';
import * as actions from './types';
export function saveComment(comment) {
 return {
  type: actions.SAVE_COMMENT,
  payload: comment,
 };
}
export function fetchComments() {
 const response = axios.get('http://jsonplaceholder.typicode.com/comments');
 return {type: actions.FETCH_COMMENTS, payload: response};
}

export function changeAuth(isLoggedIn) {
 return {type: actions.CHANGE_AUTH, payload: isLoggedIn};
}
