import React, {Component} from 'react'
import {connect} from 'react-redux';

import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';
import {fetchTodo} from "../actions";


class TodoList extends Component {
  constructor(props, context) {
    super(props, context)

  }

  componentDidMount() {
    this.props.onFetchTodo();
  }


  render() {
    return (
      <ul className="todo-list">
        {
          this.props.todos.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              onToggle={() => this.props.onToggleTodo(item.id)}
              onRemove={() => this.props.onRemoveTodo(item.id)}
            />
          ))
        }
      </ul>
    )
  }
}

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
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

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    },
    onFetchTodo: () => {
      dispatch(fetchTodo())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
