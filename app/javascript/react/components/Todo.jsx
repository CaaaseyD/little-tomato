import * as React from 'react'
import * as ReactDOM from 'react-dom'

const todobutton = document.getElementById('todobutton')
const tomatobutton = document.getElementById('tomatobutton')

const Todo = () => {
  return(
    <>
      <div className="d-flex p-5 m-auto container justify-content-around">
      <ul>
        <li>task 1</li>
        <li>task 2</li>
        <li>task 3</li>
      </ul>
      </div>
    </>
  )
}

todobutton.addEventListener('click',()=>{
  todobutton.classList.add('active');
  tomatobutton.classList.remove('active');
  ReactDOM.render(<Todo />, document.getElementById('todo'))
})

export default Todo
