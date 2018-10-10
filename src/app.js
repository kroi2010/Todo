import React from 'react';

import {NewTodo} from "./new-todo";
import {Todo} from "./todo";

import './app.css';

class App extends React.Component {
  state = {
    todos: []
  }

  render() {
    const {todos} = this.state;

    return (
      <div className="app">
        <section className="top-section">
          <NewTodo addTodo={this.addTodo}/>
        </section>
        <section className="bottom-section">
          {todos
            ? todos.map((todo) => (<Todo
              key={todo.title}
              todo={todo}
              toggleDone={this.toggleDone}
              deleteTodo={this.deleteTodo}/>))
            : <span className="no-todos">No todos yet!</span>}
        </section>
      </div>
    );
  }

  addTodo = (title) => {
    const id = Math
      .random()
      .toString(36)
      .substring(2);
    this.setState(({todos}) => ({
      todos: todos.concat({title, id, done: false})
    }));
    alert(`There are now ${this.state.todos.length} todos.`);
  }

  toggleDone = (todoId) => {
    this.setState(({todos}) => {
      const index = todos.findIndex(({id}) => id === todoId);
      if (index > -1) {
        const thisTodo = todos[index];
        return {
          todos: todos.splice(index, 1, {
            ...thisTodo,
            done: !thisTodo.done
          })
        }
      }
      return {todos}
    })
  }

  deleteTodo = (todoId) => {
    this.setState(({todos}) => {
      const index = todos.findIndex(({id}) => id === todoId);
      if (index > -1) {
        return {
          todos: todos.splice(index, 1)
        }
      }
      return {todos}
    });
    alert(`There are now ${this.state.todos.length} todos.`);
  }
}

export default App;
