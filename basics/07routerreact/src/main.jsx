import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import { Link } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
// {
//   path:'/',
//   element : <Layout />,
//   children : [
//     {path : '',
//     element : <Home /> ,
//   },
//   {
//     path: 'about',
//     element : <About />
//   },
//   {
//     path:'contact',
//     element : <Contact />
//   }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element={<Home /> } />
      <Route path='about' element={<About /> } /> 
      <Route path='contact' element={<Contact /> }/>
      <Route path='user/:userid' element={<User/>} />
      <Route loader={ githubInfoLoader } path='github' element={<Github />}/> 


    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
