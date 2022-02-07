import React from "react";
import takenote from './assets/takenote.png'
import citizen from './assets/citizen.png'

const Projects = () => {
  return <div className="projects-container">

    <div className="project">

      <h1>Takenote</h1>

      <div className="project-image">

        <img src={ takenote } alt="takenote screenshot" />

      </div>

      <div className="project-description">

        <p>A note-taking app built with Python, Javascript, HTML, CSS, using postgresql
          as database and <a href="https://takenote-lhckb.herokuapp.com/" target='_blank'>hosted on Heroku</a>.
          Check out the <a href="https://github.com/lhckb/takenote" target='_blank'>Github repo</a> if you want.
          This app is able to save your notes organizing by the date it was created, as well as pinning it on the screen
          so that specific note comes first.
          </p>

      </div>

    </div>

    <div className="project">

      <h1>Citizen registration API</h1>

      <div className="project-image">

        <img src={ citizen } alt="postman screenshot" />

      </div>

      <div className="project-description">

        <p>This is a REST API built with Flask, the Python Framework, that registers citizens to a database
          auto-filling the address after the CEP is provided, by communicating with the ViaCEP webservice 
          and formatting the return. You can check out the <a href="https://github.com/lhckb/citizen-register-api" target='_blank'>
          Github repo</a> too.
          </p>

      </div>

    </div>
    
  </div>
}

export default Projects