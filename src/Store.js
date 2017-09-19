import {createStore, combineReducers} from 'redux'

import {reducer as todoReduce} from './todos'
import {reducer as filterReduce} from './filter'

const reducer = combineReducers({
  todos: todoReduce,
  filter: filterReduce
})

export default createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

