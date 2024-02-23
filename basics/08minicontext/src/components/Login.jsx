 import React,{ useContext, useState } from "react";
 import UserContext from "../context/UserContext";

 function Login(){
   const [usernaem , setUsername ] = useState('')
   const [password , setPassword ] = useState('')

   const {setUser} = useContext(UserContext)


    const handleSubmit = (e) =>{
      e.preventDefault(usernaem , password)
      setUser({usernaem, password})

    }
    return (
         <div> 
            <h2> Login </h2>
            <input value={usernaem} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
            
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" />
            <button onClick={handleSubmit} > Submit </button>
         </div>
    )
 }


 export default Login 