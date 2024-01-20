import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App(props) {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "pranav",
    age:21
  }
  let newArray = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="pranav" btnText="visit me" />
    <Card username = " this is delba"  />
    </>
  )
}

export default App
