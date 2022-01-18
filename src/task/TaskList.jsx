import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {

    const toggleItem = (id) =>{
        props.onToggleItem(id);
    }

    return (
        <>
        <div style={{width:'50%',marginLeft:'auto',marginRight:'auto',textAlign:'center',backgroundColor:'#c6c5d4',borderRadius:'5px',
                    marginTop:'2rem',height:'30px',fontSize:'18px',fontWeight:'bold',padding:'5px',color:'#37367b'}}>{props.title}</div>
        <div>
            {props.tasks.map((task,key)=>{
                return <TaskItem onToggleTask={toggleItem} id={task.id} key={key} completed={task.zavrsen} task={task.tekst}/>
            })}
        </div>
        </>
    )
}

export default TaskList
