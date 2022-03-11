import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
          {
            name: 'Cook',
            id: 1528817077286, 
            completed: false
          },
          {
            name: 'Study',
            id: 1528817084358,
            completed: false
          },
          {
            name: 'Work Out',
            id: 1528817084359,
            completed: false
          }
          
        ]
    }
  }
  handleAdd = (name) => {
    //1. setState
    //2. change todos
    //3. make a copy of todos
    //4. Add a new todo to the end of our todo list.

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false

    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }
    //1.setState
    //2. loop through all todos
    //3. remove all todos that have completed === true
    //4. save filtered todos to state

  handleToggle = (clickedId) => {
    //1. setState
    //2. change todos.
    //3. find the todo that we clicked on.
    //4/ flip the value of completed for that todo
    //5. keep all other todos the same.

    
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })

  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <TodoForm  handleAdd={this.handleAdd}/>
        
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
    }
  }