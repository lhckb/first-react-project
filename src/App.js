import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import WorkXp from './WorkXp';
import Projects from './Projects'
import Courses from './Courses';

const App = () => {
  return <Router>
    <Header/>
    <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/experience' exact element={<WorkXp/>}/> 
        <Route path='/projects' exact element={<Projects/>}/>
        <Route path='/courses' exact element={<Courses/>}/>
      </Routes>
    <Footer />
    </Router>
}

export default App