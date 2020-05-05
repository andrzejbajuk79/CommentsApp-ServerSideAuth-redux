import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';
class Header extends Component {
 render() {
  return (
   <div>
    <Link to='/'>Redux Auth</Link>
    <Link to='/signup'>-signup-</Link>
    <Link to='/signin'>-signin-</Link>
    <Link to='/signin'>-signout-</Link>
    <Link to='/feature'>-feature-</Link>
   </div>
  );
 }
}
export default Header;
