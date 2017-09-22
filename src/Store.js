import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk'

const win = window;


import {reducer as todoReduce} from './todos'
import {reducer as filterReduce} from './filter'

const reducer = combineReducers({
  todos: todoReduce,
  filter: filterReduce
})

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);

