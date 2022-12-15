import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import HomePage from "./Pages/Homepage";
import './App.css';
import Navbar from "./Elements/Navbar";

function App() {
  return (
    
     <>
        <Navbar />
        <HomePage />
        {/* <Carousel /> */}
        {/* <CarouselFadeExample /> */}
     </>    
  )
}

export default App
