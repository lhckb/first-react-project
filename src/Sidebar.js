import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './contexts'
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import SingleSidebarButton from './SingleSidebarButton';

const data = [
  {name: 'Facebook', icon: <FaFacebook/>},
  {name: 'Behance', icon: <FaBehance/>},
  {name: 'Linkedin', icon: <FaLinkedin/>},
  {name: 'Twitter', icon: <FaTwitter/>}
]

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext)

  const checkSidebar = () => {
    if (isSidebarOpen) {
      return 'show-sidebar'
    }
    return ''
  }

  return <aside className={`sidebar ${checkSidebar()}`}>
    <div className="sidebar-header">

      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>

    </div>

    <div className="sidebar-body">
      <h1>oh my good God in heaven this sidebar is so good</h1>
      <h1>look i even added these fake buttons:</h1>

      {
        data.map(button => {
          return <SingleSidebarButton name={ button.name } icon={ button.icon } />
        })
      }

    </div>
  </aside>
}

export default Sidebar