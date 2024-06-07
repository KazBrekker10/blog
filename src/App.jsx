import './App.css';
import { useState,useEffect } from 'react';
import {ProfileList} from './Components/ProfileList'
import { TaskDesk } from './Components/TaskDesk';
import {Counter} from './Components/Counter';
import { Calculator } from './Components/Calculator';

function App() {
  const [isShow, setShow] = useState("profiles");

  return (
    <>
    <header className="App-header">
      <aside>
        <button className={isShow=="profiles"?"select":""} onClick={()=>setShow("profiles")}>Perfiles</button>
        <button className={isShow == "counter"?"select":""}
        onClick={()=>{
          setShow("counter")
        }}
        >Contador</button>
        <button className={isShow == "calculator"?"select":""} onClick={()=>setShow("calculator")}>Calculadora</button>
        <button className={isShow=="tasks"?"select":""}  onClick={()=>setShow("tasks")}>Tareas</button>
        <button className={isShow == "variados"?"select":""} onClick={()=>setShow("variados")}>Variados</button>
      </aside>
    </header>
    <main className="container">
    {isShow=="profiles"&&(
      <ProfileList/>
    )}
    {isShow == "counter"&&(
      <Counter/>
    )}
    {isShow=="calculator"&&(
      <Calculator/>
    )}
   {isShow=="tasks"&&( <TaskDesk/> )}
   {isShow=="variados"&&(
    <div>
      <h1>Variados</h1>
    </div>
   )}
    </main>
    </>  
  )
}

export default App
