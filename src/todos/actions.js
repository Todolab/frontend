import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, GET_TODO, LOAD_TODO, FAIL_TODO, SUCCESS_TODO} from './actionTypes'

let nextTodoId = 0

export const addTodo = (text) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId++,
  text: text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
})

let nextSeqId = 0;

export const fetchTodoStarted = () => ({
  type: LOAD_TODO
});

export const fetchTodoSuccess = (result) => ({
  type: SUCCESS_TODO,
  result
})

export const fetchTodoFailure = (error) => ({
  type: FAIL_TODO,
  error
})

export const fetchTodo = () => {
  return (dispatch) => {
    const apiUrl = 'http://local.backend.todolab.io/todo'

    const seqId = ++nextSeqId;

    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action);
      }
    }

    dispatchIfValid(fetchTodoStarted())

    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      response.json().then((responseJson) => {
        dispatchIfValid(fetchTodoSuccess(responseJson));
      }).catch((error) => {
        dispatchIfValid(fetchTodoFailure(error));
      });
    }).catch((error) => {
      dispatchIfValid(fetchTodoFailure(error));
    })
  };
}


