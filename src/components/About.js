import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div><h1> About</h1>
    <p>
      <Link to="/content/1">Content 1</Link>
      <Link to="/content/2">Content 2</Link>
    </p></div>
  )
}

export default About