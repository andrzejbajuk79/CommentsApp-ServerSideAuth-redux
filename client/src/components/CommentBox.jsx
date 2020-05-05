import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import requireAuth from '../HOC/requireAuth';

class CommentBox extends Component {
 state = {
  comment: '',
 };

 handleChange = (e) => {
  this.setState({comment: e.target.value});
 };
 handleSubmit = (e) => {
  e.preventDefault();

  this.props.saveComment(this.state.comment);
  this.setState({comment: ''});
 };
 render() {
  const {comment} = this.state;
  return (
   <div>
    <form onSubmit={this.handleSubmit}>
     <h4>Dodaj komentarz</h4>
     <textarea onChange={this.handleChange} value={comment} />
     <div>
      <button type='submit'>Submit</button>
     </div>
    </form>{' '}
    <button className='fetch-comments' onClick={this.props.fetchComments}>
     Fetch comments
    </button>
   </div>
  );
 }
}

export default connect(null, actions)(requireAuth(CommentBox));
