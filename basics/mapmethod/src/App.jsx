import { useState } from 'react'
import './App.css'
import Fooditems from './components/Fooditems'
import ErrorMessage from './components/ErrorMessage';
function App() {

  //conditional rendering 
  // let foodItems = ['dal','green vegetables ','roti', 'salad','milk','water'];

  let foodItems = ['dat','green vegetables','roti','salad','milk','ghee','water','pizza','cheeze burger','margritta pizza'
    ]

  // let foodItems = []

  // if(foodItems.length === 0 ){
  //   return <h3> I am still hungry </h3>
  // }


  return (
    <>
    <h1 className='food-heading' >Healthy food</h1>
    <ErrorMessage items={foodItems} />
    <Fooditems items={foodItems}  />

    </>
  )
}

export default App
