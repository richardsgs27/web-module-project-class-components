import React from 'react'



export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
handleSubmit = evt => {
  evt.preventDefault()
  this.props.handleAdd(this.state.input);  
}

handleChange = evt => {
  this.setState({
    ...this.state,
    input: evt.target.value
  })
}
  render(){
    return ( 
      <form onClick={this.handleSubmit}>
          <input onChange = {this.handleChange}/>
          <button>Add</button>
        </form>
    )
    }
  }