import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, filterTask } from '../redux/taskSlice'

import "./Task.css"

const Task = (props) => {
  const [input, setInput] = useState("")
  const taskToEdit =(e)=>{
    const edit= e.target.value
    setInput(edit)
  }
    const dispatch= useDispatch();
    const handleFilter=()=>{
        dispatch(filterTask({id:props.id,status:!props.status}))
    }
    const handleDelete=()=>{
      dispatch(deleteTask({id:props.id}))
    }
    const handleEdit=()=>{
      dispatch(editTask({id:props.id,task:input}))
    }
    const tobe= props.status
  return (
    <div>
        {!tobe&&
        <div className='task__container' >
            <button className="don" onClick={handleFilter}>complete</button>
            <input className="task" onChange={(e)=>taskToEdit(e)} placeholder={props.task}/>
            <button className="edit" onClick={handleEdit}>Edit Task</button>
            <button className="delete" onClick={handleDelete}>Delete Task</button>
        </div>}
    </div>
  )
}

export default Task