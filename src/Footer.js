import React from "react";
import { FaGithub,  FaLinkedin} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return <footer>

    <div>
      <h4>Find me on:</h4>
    </div>

    <div className="contacts">

      <a href="mailto:luis.carv.cruz@gmail.com">

        <div className="footer-button">

          <SiGmail />

          <h3>E-mail</h3>

        </div>

      </a>

      <a href="https://github.com/lhckb" target='_blank' rel='noopener noreferrer'>

        <div className="footer-button">

          <FaGithub />

          <h3>Github</h3>

        </div>

      </a>

      <a href="https://www.linkedin.com/in/lhckb/" target='_blank' rel='noopener noreferrer'>

        <div className="footer-button">

          <FaLinkedin />

          <h3>LinkedIn</h3>

        </div>  

      </a> 

    </div>
    
  </footer>
}

export default Footer