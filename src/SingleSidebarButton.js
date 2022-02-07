import React from "react";

const SingleSidebarButton = (props) => {
  const { name, icon } = props

  return <div className="sidebar-button">
    { icon }
    <h4>{ name }</h4>
  </div>
}

export default SingleSidebarButton