import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import App from './App';
import Signup from './auth/Signup';
import Root from './root';
import Feature from './components/Feature';

ReactDOM.render(
 <Root>
  <Router>
   <App>
    <Route path='/' component={Welcome} exact />{' '}
    <Route path='/signup' component={Signup} />{' '}
    <Route path='/feature' component={Feature} />{' '}
   </App>
  </Router>
 </Root>,
 document.getElementById('root')
);
