import { useState } from "react"
const gra = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-500" 
   style={{backgroundColor: color}} >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "red"}}>Red</button>
      <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "green"}}>Green</button>
      <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "yellow"}}>Yellow</button>
      <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "white"}}>White</button>
      <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "lavender"}}>Lavender</button>
      <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "black"}}>Black</button>
      <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "gray"}}>Grey</button>
      <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "pink"}}>Pink</button>
      <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "blue"}}>Blue</button>
    </div>
    </div>
   </div>
  )
}
 
export default App 
