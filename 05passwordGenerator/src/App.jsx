import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`";
    
    for(let i=1;i<=length;i++)
      {
        let ind=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(ind);
      }
      setPassword(pass)
  },[length,numberAllowed,charAllowed])

  const saveToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      placeholder='Password'
      className="outline-none w-full py-1 px-3"
      readOnly
      value={password}
      ref={passwordRef}
      />
      <button
      className='outline-none bg-orange-700 text-white px-3 py-0.5 shrink-0'
      onClick={()=>{
        saveToClipBoard()
      }}
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
        <input type="range" 
        value={length}
        min={6}
        max={100}
        onChange={(e)=> setLength(e.target.value)}
        className='cursor-pointer'
        />
        <label>Length:{length}</label>
    </div>
    <div className='flex text-sm gap-x-2'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="number"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        />
        <label>number</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox"
        defaultChecked={charAllowed}
        id='char'
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
      />
      <label >Character</label>
    </div>
    </div>
    
   </div>
    </>
  )
}

export default App
