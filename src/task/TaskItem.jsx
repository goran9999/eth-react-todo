import React from 'react'
import {FaCheckCircle,FaTimesCircle} from 'react-icons/fa';
import '../css/TaskItem.css'
const TaskItem = (props) => {

    const toggleTask = (id) => {
        props.onToggleTask(id);
    }

    return (
        
        <div className='item'>
            <div className='title-light'><h3>{props.task}</h3></div>
            <button className='toggle' onClick={()=>toggleTask(props.id)}>
            {!props.completed?<FaCheckCircle style={{height:'25px',width:'50px'}}/>:<FaTimesCircle style={{height:'25px',width:'50px'}}/>}
            </button>
        </div>
        
    )
}

export default TaskItem
