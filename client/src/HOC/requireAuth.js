import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
 class ComposedComponent extends Component {
  shouldNavig() {
   if (!this.props.auth) {
    this.props.history.push('/');
   }
  }

  //just render
  componentDidMount() {
   this.shouldNavig();
  }

  //receive props
  componentDidUpdate() {
   this.shouldNavig();
  }

  render() {
   return <ChildComponent {...this.props} />;
  }
 }

 function mapStateToProps(state) {
  return {auth: state.auth};
 }
 return connect(mapStateToProps)(ComposedComponent);
};
