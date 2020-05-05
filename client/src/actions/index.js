import axios from 'axios';
import * as actions from './types';

// export const signup = ({email, password}) => {
//  return (dispatch) => {
//  };
// };

export const signup = (formProps, callback) => async (dispatch) => {
 try {
  const response = await axios.post('http://localhost:3090/signup', formProps);
  dispatch({type: actions.AUTH_USER, payload: response.data.token});
  localStorage.setItem('token', response.data.token);
  callback();
 } catch (err) {
  dispatch({type: actions.AUTH_ERROR, payload: 'email in use'});
 }
};
