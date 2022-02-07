import React from "react";

const certificates = [
  {name: 'Desenvolvimento para Internet e Banco de Dados com Python e Django', image: 'https://hermes.digitalinnovation.one/certificates/cover/4022F262.jpg', date: '08/12/2021'},
  {name: 'Desenvolvimento avançado Python com Flask e REST API', image: 'https://hermes.digitalinnovation.one/certificates/cover/6667C33A.jpg', date: '03/11/2021'},
  {name: 'Introdução ao Git e ao GitHub', image: 'https://hermes.digitalinnovation.one/certificates/cover/5FAD3F16.jpg', date: '06/10/2021'},
  {name: 'Linux: A introdução ao sistema operacional', image: 'https://hermes.digitalinnovation.one/certificates/cover/FF3E5C26.jpg', date: '30/09/2021'},
]

const Courses = () => {

  return <div className="container">

    {certificates.map(course => {
      return <div className="course">
        <h1>{ course.name }</h1>
        <h3>{ course.date }</h3>
        <img src={course.image} alt="" />
      </div>
    })}
    
  </div>
}

export default Courses