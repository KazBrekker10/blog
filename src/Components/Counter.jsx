import {useState} from 'react';
import '../StyleSheet/Counter.css';
export function Counter(){
   const [count,setCount] = useState(0)
    return(
        <section className='counter'>
          <h1>FreeCodeCamp (<span class="material-symbols-outlined">
local_fire_department
</span>)</h1>
          <div className={`contador ${count>90?"cien":count>10?"diez":""}`}>{count}</div>
          {count<100&&(<button className="agregar" onClick={()=>setCount(count+1)}>Clic</button>)}
          <button className="reiniciar" onClick={()=>setCount(0)}>Reiniciar</button>     
        </section>
    )
}