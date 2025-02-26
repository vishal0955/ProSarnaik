import React from 'react'
import { TaskTable } from '../components/Tables/TaskTable'
import TableHeader from './TableHeader';

const Tasks = () => {
  return (
    <div className='container-fluid h-100'>
        <TableHeader />
        <TaskTable />
    </div>
  )
}

export default Tasks;