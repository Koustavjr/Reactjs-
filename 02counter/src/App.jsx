import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

function App() {

  // dont use const [counter,setCounter]
  let [counter,setCounter]=useState(15);
//let counter=15
function addValue()
{
  //console.log('Clicked',Math.random());
 // counter=counter+1;
 //setCounter(counter + 1);

 //Assignment part
 if(counter!=20)
  setCounter(counter+1)
}

function removeValue()
{
  // Assignment part
  if(counter!=0)
  setCounter(counter-1);  
  //setCounter(counter-1);
}
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>UP</button>
    <br />
    <br />
    <button onClick={removeValue}>DOWN</button>
    </>
  )
}

export default App
