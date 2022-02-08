import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { AppContext } from "./contexts";

const Header = () => {
  const { openSidebar } = useContext(AppContext)

  return <nav className="header">

    <div className="title">

      <button className="sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      
      <a href="#">
        <h2>React Fixation Project</h2>
      </a>
      
    </div>

    <div className="options">
      
      <a href="#courses">
        Courses and certificates
      </a>
      
      <a href="#projects">
        Personal projects
      </a>
 
      <a href="#workxp">
        Work experience
      </a>
  
    </div>

  </nav>
}

export default Header