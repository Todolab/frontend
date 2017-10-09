import {TOGGLE_TODO, REMOVE_TODO, GET_TODO_SUCCESS, ADD_TODO_SUCCESS} from './actionTypes'

export default (state = [], action) => {
  switch(action.type) {
    case GET_TODO_SUCCESS: {
      return action.result
    }
    case ADD_TODO_SUCCESS: {
      console.log([action.result, ...state])
      return [
        action.result,
        ...state
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
           return {...todoItem, completed: !todoItem.completed};
        } else {
          return todoItem;
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      })
    }
    default: {
      return state;
    }
  }
}
