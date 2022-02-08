import React, { useContext } from "react";
import Header from "./Header";
import Home from "./Home"
import Projects from "./Projects"
import Courses from "./Courses"
import WorkXp from "./WorkXp"
import Footer from "./Footer";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { AppContext } from "./contexts";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'


const App = () => {

  return <>
  <Header />
  <Home />
  <WorkXp />
  <Projects />
  <Courses />
  <Modal />
  <Sidebar />
  <Footer />
  </>
}

export default App