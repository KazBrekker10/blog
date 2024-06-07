import {useState} from 'react';
import {Task} from './Task'

export function TaskDesk(){
    const [tasks,setTasks] = useState([]);
    const [input,setInput] = useState('Aprender React')
    function handleButton(){
      if(input.length>3){  
      const newTasks = [...tasks];
        newTasks.push(input);
        setTasks(newTasks);
        setInput("")}
      return;  
    }
    function deleteTask(id){
      const newTaskList = [...tasks];
      newTaskList.splice(id,1);
      setTasks(newTaskList);
      
    }   
    return(
     
    <section className="task-list">
      <h1>Mis Tareas</h1>
      <form action="" onSubmit={e=>{
        e.preventDefault();
        handleButton();
        console.log(tasks)
      }}>
        <input type="text" value={input} placeholder={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={()=>{
          
        }}>Agregar</button>
      </form>
      {tasks.length>0 &&(<ul>
        {tasks.map((task,index)=>{
          return <Task task={task} key={index} deleteTask={deleteTask}/>
        })}
      </ul>)}
    </section>
    )
}