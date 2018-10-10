import React from "react";
import PropTypes from "prop-types";

export class Todo extends React.Component {
  render() {
    const {todo: { title, done }} = this.props;
    return (
      <div className={`todo${done ? "checked": ""}`}>
        <span className="checkbox">
          <input type="checkbox" checked={done} onChange={this.onToggleDone}/>
          <label htmlFor="checkbox" />
        </span>
        <span className="todo-title">{title}</span>
        <button onClick={this.onDeleteTodo}>{`\u2716`}</button>
      </div>
    )
  }

  onToggleDone() {
    this.props.toggleDone(this.props.todo.id)
  }

  onDeleteTodo() {
    this.props.deleteTodo(this.props.todo.id)
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
