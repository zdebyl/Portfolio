import React from 'react'
import '../styles/SingleProject.css'
import '../App.css'

function SingleProject({src}) {
  return (
    <div>
        <img className="project-image" src={src} alt="project" />
    </div>
  )
}

export default SingleProject