import React from 'react';
import {connect} from 'react-redux';

import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
    <ul className="todo-list">
      {
        todos.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={ () => onToggleTodo(item.id)}
            onRemove={ () => onRemoveTodo(item.id)}
          />
        ))
      }
    </ul>
  )
}

const selectVisibleTodos = (todos, filter) => {
  switch(filter) {
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = {
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
