import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'


/*const TestElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
*/

/*function myApp()
{
  return (
    <a href="https://google.com" target='_blank'>visit google</a>
  )
}*/

// variable is rendered at the end and it is evaluated expression

const chai='chai aur code'

// createElement method operations are done by babel
const customElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'visit google',
  chai
);

ReactDOM.createRoot(document.getElementById('root')).render(

  //TestElement               // another way to render
  // <App/>
  //myApp()                // it can run functions
  customElement  
)
