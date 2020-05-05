export default ({dispatch}) => (next) => (action) => {
 // check to see if the action
 //has a promise its payload property
 // ig yes wait for resolve
 //if no, send the action  to the next middleware

 if (!action.payload || !action.payload.then) {
  return next(action);
 } //
 //if we have promise , wait to resolve, get the data
 // and then create new action with data and dispatch
 action.payload.then(function (response) {
  const newAction = {...action, payload: response};
  dispatch(newAction);
 });
};
