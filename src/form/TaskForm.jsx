import React, { useRef } from 'react'
import '../css/TaskForm.css'
const TaskForm = (props) => {

    const taskRef=useRef();

    const saveTask = (event) =>{
        event.preventDefault();
        const task=taskRef.current.value;
        props.onSaveTask(task);
    }

    return (
       <form onSubmit={saveTask} className='form'>
           <label className='label' htmlFor="task">Enter your task:</label>
           <input ref={taskRef} className='task' type="text" id="task" placeholder='Enter task'/>
           <button className='save' type='submit'>Save task</button>
       </form>
    )
}

export default TaskForm
