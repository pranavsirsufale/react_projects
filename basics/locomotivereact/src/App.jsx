import React from "react";
import Page1 from "./components/Page1";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () =>{
  return(
    <>
    <Page1 />
    <Page1 />
    <Page1 />
    </>
  )
}

export default App