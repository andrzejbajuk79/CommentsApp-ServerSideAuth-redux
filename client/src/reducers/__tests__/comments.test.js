import commentsReducer from '../../reducers/CommentsReducer';
import {SAVE_COMMENT} from '../../actions/types';

it('handle actions of type  SAVE_COMMENT', () => {
 const action = {type: SAVE_COMMENT, payload: 'comment'};
 const newState = commentsReducer([], action);
 expect(newState).toEqual(['comment']);
});

it('handle actions of unknowntype', () => {
 const newState = commentsReducer([], {type: 'FSFSFSFSF'});
 expect(newState).toEqual([]);
});
