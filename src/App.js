import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [res, setRes] = useState('')
  const arr = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/','.','%']

  function clicked(e){
    setRes(res.concat(e.target.value))
  }

  function clear(){
    setRes('')
  }

  function evaluate(){
    setRes(eval(res).toString())
  }
  return (
    <div className="main">
      <input value={res} className='inpBox'/>
      {arr.map((x)=>{
       return <button onClick={clicked} className='btn' value={x}>{x}</button>
      })}
      <button onClick={clear} className='btn btn2'>C</button>
      <button onClick={evaluate} className='btn btn2'>=</button>
    </div>
  );
}
