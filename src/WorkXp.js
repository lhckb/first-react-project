import React from "react";

const data = [
  {name: 'react', logo: "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"},
  {name: 'nodejs', logo: "https://cdn.iconscout.com/icon/free/png-256/nodejs-2749313-2284703.png"},
  {name: 'typescript', logo: "https://gblobscdn.gitbook.com/spaces%2F-Lf4a7JZE8Gwa4Y0EaRf%2Favatar.png?alt=media"},
  {name: 'jest', logo: "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"},
  {name: 'postgresql', logo: "https://seeklogo.com/images/P/postgre-sql-logo-600AD1A66B-seeklogo.com.png"}
]

const WorkXp = () => {

  return <div id="workxp" className="workxp">

    <h1>Work Experience</h1>

    <div className="logo-stepps">

      <img src="https://static.wixstatic.com/media/baf928_cab736bd8da541b6b08bc7b4a282d169~mv2.png/v1/fill/w_303,h_123,al_c,q_85,usm_0.66_1.00_0.01/logo%20stepps.webp" alt="stepps logo" />

    </div>

    <div className="job-description">

      <h2>Currently working at <a href="https://www.stepps.com.br/" target='_blank' rel="noopener noreferrer">Stepps</a> as a web development intern</h2>

      <p>Planned to act as a full-stack intern, developing my skills in every field of web development such as
        front end with React, back end with Nodejs and Express, unit testing with Jest, and many other tasks. 
      </p>

    </div>

    <div className="tech-stack">
      {data.map(tech => {
        return <img src={tech.logo} alt={`${tech.name} logo`} />
      })}
    </div>
    
  </div>
}

export default WorkXp