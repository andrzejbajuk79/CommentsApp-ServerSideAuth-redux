import React from 'react';
import {mount} from 'enzyme';
import CommentBox from '../components/CommentBox';
import Root from '../root';

let wrapped;
beforeEach(() => {
 wrapped = mount(
  <Root>
   <CommentBox />
  </Root>
 );
});
afterEach(() => {
 wrapped.unmount();
});

it('has a text area a 2 button', () => {
 expect(wrapped.find('textarea').length).toEqual(1);
 expect(wrapped.find('button').length).toEqual(2);
});
describe('the textearea', () => {
 beforeEach(() => {
  wrapped.find('textarea').simulate('change', {
   target: {value: 'new comment'},
  });
  wrapped.update();
 });

 it('has a text area to write in', () => {
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
 });

 it('clear text area to write in', () => {
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
 });
});
