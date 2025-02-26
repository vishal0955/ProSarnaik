import React from 'react'
import ProjectTable from './ProjectTable'
import TableHeader from './TableHeader'

const ProjectOwner = () => {
  return (
    <div>
   <TableHeader title="All Projects" buttonText="Add Project" />
      <ProjectTable />
    </div>
  )
}

export default ProjectOwner