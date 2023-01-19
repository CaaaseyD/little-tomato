import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Timer from './Timer.jsx'

const todobutton = document.getElementById('todobutton')
const tomatobutton = document.getElementById('tomatobutton')

const Tomatoclock = () => {
  return(
    <>
      <div className="d-flex p-5 m-auto container justify-content-around">
      <ul>
        <li>task 3</li>
        <li>task 4</li>
        <li>task 5</li>
      </ul>
      </div>
    </>
  )
}

tomatobutton.addEventListener('click',()=>{
  todobutton.classList.remove('active');
  tomatobutton.classList.add('active');
  ReactDOM.render(<Timer />, document.getElementById('todo'))
})

export default Tomatoclock
