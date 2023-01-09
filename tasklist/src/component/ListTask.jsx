import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import Task from './Task'

import "./ListTask.css"
import CompletedTask from './CompletedTask'

const ListTask = () => {
    const list= useSelector(state=>state.task)
    console.log(list)
    const [on, setOn] = useState(false)

    const toggleOn= ()=>{
      setOn(!on)
    }

    const cont = ()=>{
      let s =0
      for (let i = 0; i < list.length; i++) {
        console.log(i);
        if (list[i].status===true) {
          s=s+1
        }
      }
      return s
    }
    console.log(cont());
    let s = cont();
  return (
    <div className='list'>
        {list.map(({...list})=>{
                return(<Task key={list.id} id={list.id} task={list.task} status={list.status}/>)})}
        <AddTask/>
        <label>{`Completed Task ${s}`} </label>
        <button onClick={toggleOn}>See the Task</button>
        {on&&list.map(({...list})=>{
                return(<CompletedTask key={list.id} id={list.id} task={list.task} status={list.status}/>)})}
    </div>
  )
}

export default ListTask