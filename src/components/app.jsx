import React, { Component } from 'react';
import Todo from './todo.jsx';

export default class App extends Component {
  state = {
    todos: []
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoInput" type="text"/>
        </form>
        {
          this.state.todos.map((todo, i) => (
            <Todo
              key={i}
              todo={todo}
              onChange={this.handleTodoChange.bind(null, i)}
              onDelete={this.handleTodoDelete.bind(null, i)}
            />
          ))
        }
      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    const todoInput = this.refs.todoInput;
    const text = todoInput.value;
    todoInput.value = '';

    this.setState({
      todos: [
        ...this.state.todos,
        {
          text
        }
      ]
    });
  };
  handleTodoChange = (index, newTodo) => {
    const todos = this.state.todos;
    todos[index] = newTodo;

    this.setState({
      todos
    });
  }
  handleTodoDelete = indexToDelete => {
    this.setState({
      todos: this.state.todos.filter((_, index) => index !== indexToDelete)
    });
  }
}
