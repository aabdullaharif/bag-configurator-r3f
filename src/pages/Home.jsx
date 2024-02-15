import React from 'react'
import { Accordions, Experience } from '../components'


export const Home = () => {

  return (
    <>
    
      <div id="main">
        <div className="canvas-wrapper">
          <Experience />
        </div>
        <div className="accordions-wrapper">
          <Accordions/>
        </div>
      </div>
    </>
  )
}
