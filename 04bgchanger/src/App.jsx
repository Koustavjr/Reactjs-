
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >
      <h1
      className='py-12 font-extrabold text-5xl font-serif'>Background Changer</h1>
      <div className="fixed flex flex-wrap inset-x-0 bottom-12 px-2 justify-center">
          <div className="bg-slate-50 rounded-xl px-2 py-3 shadow-lg gap-3 flex flex-wrap justify-center">
            <button className="rounded-full text-white px-3 py-1"
            style={{background:"red"}}
            onClick={()=>setColor("red")}
            >red</button>
             <button className="rounded-full text-white px-3 py-1"
            style={{background:"green"}}
            onClick={()=>setColor("green")}
            >green</button>
             <button className="rounded-full text-white px-3 py-1"
            style={{background:"blue"}}
            onClick={()=>setColor("blue")}
            >blue</button>
             <button className="rounded-full text-black px-3 py-1"
            style={{background:"lavender"}}
            onClick={()=>setColor("lavender")}
            >lavender</button>
             <button className="rounded-full text-black px-3 py-1"
            style={{background:"pink"}}
            onClick={()=>setColor("pink")}
            >pink</button>
             <button className="rounded-full text-white px-3 py-1"
            style={{background:"black"}}
            onClick={()=>setColor("black")}
            >black</button>
             <button className="rounded-full text-white px-3 py-1"
            style={{background:"aqua"}}
            onClick={()=>setColor("aqua")}
            >sky blue</button>
             <button className="rounded-full text-white px-3 py-1"
            style={{background:"orange"}}
            onClick={()=>setColor("orange")}
            >orange</button>
             <button className="rounded-full text-white px-3 py-1"
            style={{background:"grey"}}
            onClick={()=>setColor("grey")}
            >grey</button>
             <button className="rounded-full text-black px-3 py-1"
            style={{background:"yellow"}}
            onClick={()=>setColor("yellow")}
            >yellow</button>
          </div>

      </div>
      
    </div>
    
    </>
  )
}

export default App
