import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faGithub, faLinkedin)

const Footer = () => {
  return(
    <>
      <div className="footer">
        <div className="footer-links">
          <a href="#"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
          <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
        </div>
        <div className="footer-copyright">
          Copyright: inspired by xxx xxx and xxx
        </div>
      </div></>
  )
}

document.addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render(<Footer />, document.getElementById('footer'))
})

export default Footer
