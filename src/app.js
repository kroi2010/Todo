import React from 'react';

import {NewTodo} from "./new-todo";
import {Todo} from "./todo";

import './app.css';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  render() {
    // it needs to be specified which parameter to use from state
    const todos = this.state.todos
    // length is needed to make sure that array is not empty
    return (
      <div className="app">
        <section className="top-section">
          <NewTodo addTodo={this.addTodo}/>
        </section>

        <section className="bottom-section">
          {todos.length
            ? todos.map((todo, i) => (
              <Todo
                key={i}
                todo={todo}
                toggleDone={this.toggleDone}
                deleteTodo={this.deleteTodo}
              />))
              : <span className="no-todos">No todos yet!</span>
            }
          </section>
      </div>
    );
  }

  addTodo = (title) => {
    const id = Math
      .random()
      .toString(36)
      .substring(2)
      // treating state as immutable 
      this.setState({
        todos: [...this.state.todos, { id, title, done: false }]
      }, () => {
        alert(`There are now ${this.state.todos.length} todos.`);
      });
  }

  toggleDone = (todoId) => {
    // shorter way of handling toggle switch
    // if id of todo equals to id of todo that triggered action -> switch done state
    const toggledDone = this.state.todos.map(item =>
      (todoId === item.id) ? {...item, done: !item.done} : item
    )

    this.setState({
      todos: [...toggledDone]
    })
  }

  deleteTodo = (todoId) => {
    // create a temporary array with all active elements
    const someNewArray = this.state.todos.filter(item =>
      todoId !== item.id
    )

    this.setState({
      todos: [...someNewArray]
    }, () => {
      alert(`There are now ${this.state.todos.length} todos.`);
    })
  }
}

export default App;
