import {combineReducers} from 'redux';
import commentsReducer from './CommentsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
 comments: commentsReducer,
 auth: AuthReducer,
});
