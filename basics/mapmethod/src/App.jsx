import { useState } from 'react'
import './App.css'
import Fooditems from './components/Fooditems'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
function App() {

   let [foodItems , setFoodItems] = useState(['Dal','green vegetables','roti','salad','milk','ghee','water','pizza','cheeze burger','margritta pizza'
  ])

    let [textState, setTextState] = useState("food items entered by user") 

  


    const handleOnChange = (event ) => {
      // this method called by the child to parent 
      setTextState(event.target.value)
     
      
  }


  return (
    <>
    <Container>
    <h1 className='food-heading' >Healthy food</h1>
    <ErrorMessage items={foodItems} />
    <FoodInput handleOnChange={handleOnChange} ></FoodInput>
    <p>{textState}</p>
    <Fooditems items={foodItems}  />
    </Container>
  
    </>
  )
}

export default App
