import React, { useContext, useEffect } from "react";
import { AppContext } from "./contexts";
import Modal from './Modal'
import Sidebar from "./Sidebar";

const Home = () => {
  const { openModal } = useContext(AppContext)
  useEffect(() => {
    document.title = 'React project'
  }, [])

  return (
    <div className="container">

      <section className="presentation">

        <div className="welcome">

          <h1>Welcome to my curriculum!</h1>

          <h1>My name is Luís Cruz, let me show you what i can bring to your company!</h1>

        </div>

        <img src="https://avatars.githubusercontent.com/u/81770224?v=4" alt="luis cruz's github pic" className="profile-picture"/>

      </section>

      <section className="showcase">

        <h1>This, for instance, is a React project made all by myself. Don't belive me? Then check out this really cool modal:</h1>
        
        <button className="btn" onClick={openModal}>Show modal</button>

        <Modal/>

      </section>

    </div>
  )
}

export default Home