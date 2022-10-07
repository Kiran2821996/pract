import React from 'react'
import { useParams } from 'react-router-dom'

function Content() {
  const {id} = useParams()
  return (
    <>
     <h1>Content {id}</h1>
     <p>This is the page for Content {id}</p>
    </>
   
  )
}

export default Content