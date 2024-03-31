import React from 'react'
import Projects from '../component/Projects/Projects'

const Homepage = ({data}) => {
  return (
    <div>
        <Projects data={data}/>
    </div>
  )
}

export default Homepage