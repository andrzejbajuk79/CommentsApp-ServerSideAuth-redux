import React from 'react';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
// import reduxPromise from 'redux-promise';
import stateValidator from './midlewares/stateValidator';
import async from './midlewares/async';

import reducers from './reducers';

export default ({children, initialState = {}}) => {
 const composeEnhancers =
  process.env.NODE_ENV === 'development' //
   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
   : compose;
 const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(async, stateValidator))
 );
 return <Provider store={store}>{children}</Provider>;
};
