//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  /*let myObj = {
    name:"abcd",
    details:"SDsd"
  }
*/
  return (
    <>
     <h1 className='bg-green-400 text-white rounded-2xl p-6 mb-4'>Tailwind Test</h1>
    <Card framework="react" btn="Docs"/>
    <Card  framework="Delba" btn="Visit"/>
    </>
  )
}

export default App
