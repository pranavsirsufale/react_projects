import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank',
//     },
//     children:'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank"> Visit googel</a>
)

const anotherUser = 'chai aur react another user '

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click me to visit google',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // MyApp()
//    reactElement
<>
    <App />
    <Chai/>
    <MyApp/>
    
  
</>
  
)
