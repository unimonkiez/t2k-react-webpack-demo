import React, { Component } from 'react';

export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      timer: 0
    };
    this._interval = setInterval(() => {
      this.setState({
        timer: ++this.state.timer
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleCheck}>
          { this.props.todo.done ? 'V' : 'X' }
        </button>
        {
          this.props.todo.editing ?
          <input ref="inputText" defaultValue={this.props.todo.text}/> :
          this.props.todo.text
        }
        <button onClick={this.handleEdit}>
          { this.props.todo.editing ? 'Done' : 'Edit' }
        </button>
        <button onClick={this.props.onDelete}>
          X
        </button>
        {this.state.timer}
      </div>
    );
  }
  handleCheck = () => {
    const todo = this.props.todo;
    this.props.onChange({
      ...todo, // text, done
      done: !todo.done
    });
  }
  handleEdit = () => {
    let text = this.props.todo.text;
    const todo = this.props.todo;
    if (todo.editing) {
      text = this.refs.inputText.value;
    }

    this.props.onChange({
      ...todo, // text, done
      editing: !todo.editing,
      text
    });
  }
  handleTextChange = e => {
    const todo = this.props.todo;
    this.props.onChange({
      ...todo, // text, done
      text: e.target.value
    });
  }
}
