import React from 'react'
import PropTypes from 'prop-types'

export class Todo extends React.Component {
  render () {
    // added id to props
    // changed htmlFor name according to working example
    // added id to props, that are being passed to a child
    // made className selection more readable
    const {todo: { id, title, done }} = this.props

    return (
      <li
        className={done ? 'todo checked' : 'todo'}
      >
        <span className='checkbox'>
          <input
            id={`${id}-checkbox`}
            type='checkbox'
            checked={done}
            onChange={this.onToggleDone}
          />
          <label htmlFor={`${id}-checkbox`} />
        </span>
        <span className='todo-title'>{title}</span>
        <button onClick={this.onDeleteTodo}>{`\u2716`}</button>
      </li>
    )
  }

  // added arrow function to be able to access props
  onToggleDone = () => {
    this.props.toggleDone(this.props.todo.id)
  }

  // added arrow function to be able to access props
  onDeleteTodo = () => {
    this.props.deleteTodo(this.props.todo.id)
  }
}

// done had extra comma
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
