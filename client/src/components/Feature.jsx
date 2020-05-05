import React, {Component} from 'react';
import requireAuth from '../HOC/requireAuth';

class Feature extends Component {
 render() {
  return <div>feature</div>;
 }
}

export default requireAuth(Feature);
