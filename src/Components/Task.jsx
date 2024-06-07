import {useState} from 'react'

export function Task({task, deleteTask}){
    const [completed,setCompleted] = useState(false);
    return ( 
        <li className={`task-element ${completed?"completed":""}`} onClick={()=>{
            setCompleted(!completed)
        }}>
            <p>{task}</p>
            <button onClick={
                ()=>{
                    deleteTask(task)
                }
            }>❌</button>
        </li>)
        
    
}