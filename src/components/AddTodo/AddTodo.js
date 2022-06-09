import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
const AddTodo = (props) => {
  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        let input = event.target.userInput.value
        props.dispatch(addTodo(input))
        console.log(input)
        event.target.userInput.value="";
    } }>
      <input type="text" name="userInput" placeholder='Name' className='input' />
      <button className='submit'>submit</button>
    </form>
  )
}

export default  connect()(AddTodo)

