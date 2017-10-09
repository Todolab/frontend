import 'whatwg-fetch'
import axios from 'axios'
import {
  TOGGLE_TODO,
  REMOVE_TODO,
  LOAD_TODO,
  FAIL_TODO,
  GET_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL
} from './actionTypes'


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

export const getTodoSuccess = (result) => ({
  type: GET_TODO_SUCCESS,
  result
})

export const getTodoFailure = (error) => ({
  type: FAIL_TODO,
  error
})

export const getTodo = () => {
  return (dispatch) => {
    const apiUrl = 'http://local.todolab.io/todo'

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
        dispatchIfValid(getTodoSuccess(responseJson));
      }).catch((error) => {
        dispatchIfValid(getTodoFailure(error));
      });
    }).catch((error) => {
      dispatchIfValid(getTodoFailure(error));
    })
  };
}

export const addTodoSuccess = (result) => ({
  type: ADD_TODO_SUCCESS,
  result
})

export const addTodoFailure = (error) => ({
  type: ADD_TODO_FAIL,
  error
})


export const addTodo = (text) => {
  return (dispatch) => {
    const apiUrl = 'http://local.todolab.io/todo'

    const seqId = ++nextSeqId;

    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action);
      }
    }

    axios.post(apiUrl, {
      text: text,
    })
      .then(function (response) {
        dispatchIfValid(addTodoSuccess(response.data));
      })
      .catch(function (error) {
        dispatchIfValid(addTodoFailure(error));
      });
  };
}


