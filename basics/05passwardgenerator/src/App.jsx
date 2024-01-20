import { useState,useCallback, useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowd, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  
  
  const passGenerator = useCallback(useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowd) str += "0123456789"
    if(charAllowed) str += "`!@#$%^&*()_+-=[]{}'"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPass(pass)

    
  },[length,numberAllowd,charAllowed,setPass]))

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    alert('this is showing just 3 character selected but there is whole character has been selectd')
    window.navigator.clipboard.writeText(pass)
  },
  [pass])


  useEffect(() => {
    passGenerator()
  },[length,numberAllowd,
    charAllowed,passGenerator
  ])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-4'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Passowrd'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrhink-0'>
          Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1' >
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={() => {setLength(event.target.value)}}
          />
          <label > Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowd}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) =>
            !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() =>{
            setCharAllowed((prev) =>
            !prev);
          }}
          />
          <label htmlFor="characterInput">
            Characters
          </label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
