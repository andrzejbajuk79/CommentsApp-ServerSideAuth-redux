import React from 'react';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';

import reducers from './reducers';

export default ({children}) => {
 const composeEnhancers =
  process.env.NODE_ENV === 'development' //
   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
   : compose;
 const store = createStore(
  reducers, //
  {auth: {authenticated: localStorage.getItem('token')}}, //initial state
  composeEnhancers(applyMiddleware(reduxThunk))
 );
 return <Provider store={store}>{children}</Provider>;
};
