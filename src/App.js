import { useState } from "react";


function App() {
  const [calc,setcalc] = useState("");
  const [result,setresult] = useState("");
  const ops = ["+","-","*","/","."];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setcalc(calc + value);
    if(!ops.includes(value)){
      setresult(eval(calc + value).toString());
    }
  }


  const createDigit = () => {
      const digit = [];
      for(let i=1;i<=9;i++){
        digit.push(
          <button 
            onClick={() => updateCalc(i.toString())} 
            key={i}>{i}
          </button>
        )
      }
      return digit;
  }

  const calculate = () => {
    setcalc(eval(calc).toString());
  }

  const deleteLast = () => {
    let x = calc.slice(0,-1);
    setcalc(x);
    let y = calc;
    if(y === ""){
    setresult("0");
    }
    else{
      setresult(eval(x).toString());
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calc || "0"}
        </div>
        <div className="operator">
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digit">
          {createDigit()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>

    
  );
}

export default App;
