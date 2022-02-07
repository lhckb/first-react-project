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
      <Link to='/'>
        <h2>React Fixation Project</h2>
      </Link>
    </div>
    <div className="options">
      <Link to='/courses'>
        Courses and certificates
      </Link>
      <Link to='/projects'>
        Personal projects
      </Link>
      <Link to='/experience'>
        Work experience
      </Link>
    </div>
  </nav>
}

export default Header