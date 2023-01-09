import React from 'react'

const CompletedTask = ({id,task,status}) => {
  return (
    <div className='completed__task'>
        {status&&<div className="completed">
            <span>{task}</span>
        </div>}
    </div>
  )
}

export default CompletedTask