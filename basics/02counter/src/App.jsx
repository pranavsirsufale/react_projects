import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(15)

  // let counter = 15

  const addValue = ()=>{
    if(counter > 24 ){
      alert('counter should not be grater than 25');
      return
    }
    counter += 1;
    setcounter(counter)
    console.log("clicked ", counter);
  }
  
  const removeValue = () =>{
    if(counter < 1 ){
      alert('counter cannot be Negetive 😜 ')
      return
    }
    else {setcounter(counter -= 1)}
    
  }

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Conter value {counter} </h2>
      <button onClick={addValue}
      >Add value </button>
      <br />
      <button onClick={removeValue}>Remove value  </button>
    </>
  )
}

export default App
