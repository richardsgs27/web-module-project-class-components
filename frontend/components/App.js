import React from 'react'

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
  errorMessage: '',
  todos,
  form: {
    name: '',
    completed: false
  }
}

export default class App extends React.Component {
  state = initialState

  render() {
    console.log('props are', this.props)
    console.log('state is', this.state)

    const {todos} = this.state
   
    return (
      <div>
       <h2>Todo App</h2>
       <ul>
         {
           todos.map((todo) => {
             return <li className='td' key={todo.id}>{todo.name}</li>
           })
         }
       </ul>
      </div>
    )
  }
}