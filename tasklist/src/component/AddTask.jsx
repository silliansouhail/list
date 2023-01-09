import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice'

import "./AddTask.css"

const AddTask = () => {
    const [addObject, setAddObject] = useState("")
    const taskToAdd=(e)=>{
        const task= e.target.value
        setAddObject(task)
    }
    console.log(addObject);

    const dispatch= useDispatch()

    const add =()=>{
        dispatch(addTask({
            task:addObject
        }))
    }

    return (
        <div>
            <input type="text"  onChange={(e)=>taskToAdd(e)} placeholder='The Task To Add' className="task" />
            <button className="add" onClick={add} >Add</button>
        </div>
    )
}

export default AddTask