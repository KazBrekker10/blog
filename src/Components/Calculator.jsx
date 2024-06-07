import { useState } from "react";
import '../StyleSheet/Calculator.css';
const buttons = [1,2,3,"+",4,5,6,"-",7,8,9,"*","=",0,".","/","clear"]
export function Calculator(){
    const [result,setResult] = useState(null);
    const [screen, setScreen] = useState(0);

    function addNumber(num){
        setScreen(screen);
        if (String(screen).includes(".") && num ==="."){ return;}
        if (screen == "0" && num !== ".") {
            setScreen(num)
            return;
        }
        return setScreen(`${screen}${num}`)
    }
    
    return(
        <section className="calculator-container">
            <div className="calculator">
                <div className="screen">{screen}</div>
                <div className="button-display">
                   {buttons.map((button,id)=>{
                    return /[0-9]/.test(button) || button ==="." ? (
                        <button className="calculator-button number" 
                        key={id}
                        onClick={()=>{
                          addNumber(button)  
                        }}>{button}
                        </button>
                    ): button === "clear" ? (
                        <button className="calculator-button clear" 
                        key={id}
                        onClick={()=>{
                          setScreen(0);
                          setResult(null)
                        }}>{button}
                        </button>
                    ): (
                        <button className="calculator-button operator" key={id}>
                          {button}  
                        </button>
                    )
                   })}
                </div>
            </div>
        </section>
    )
}