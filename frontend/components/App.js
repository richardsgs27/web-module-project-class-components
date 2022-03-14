import React from 'react'
import TodoList from './TodoList'

const todos = [
  {
    name: 'Organize Garage 🏚 ', 
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies 🍪 ', 
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Bake Chicken 🐔 ', 
    id: 1528817084359,
    completed: false
  }
]

const initialState = {
  todos,
  form: {
    name: '',
    completed: false
  }
}





export default class App extends React.Component {
  state = initialState

  destroy = id => {
    this.setState({ ...this.state, todos: this.state.todos.filter(todo => {
      return (todo.completed === false);
    })})
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state, todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
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
    console.log('props are', this.props)
    console.log('state is', this.state)

    const {todos} = this.state
   
    return (
      <div>
       <h2>Todos:</h2>
       <TodoList handleToggle={this.handleToggle} todos={todos}/>
       <form>
         <input type="text" id="todo" placeholder="Add Todo"/>
         <button >Add</button>
       </form>
       <button onClick={this.destroy}>Hide Completed</button>
      </div>
    )
  }
}