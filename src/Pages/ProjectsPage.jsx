import React from 'react'
import Projects from '../component/Projects/Projects'

const ProjectsPage = ({projectData}) => {
  return (
    <div className='my-14 mt-16 animation-style'>
    <Projects data={projectData} />
    </div>
  )
}

export default ProjectsPage