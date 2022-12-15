import React,{useState} from 'react';
// import immg from '../img/tess.png'
import '../assets/css/Navbar.css';
// import { Link } from "react-router-dom";
function Navbar(){ 
   const hamburgerr = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    } else {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  }
   return (
   <div className='navbar-main'>
    
     <div className='logo' >Logo</div>
         <div className='links'>
             <ul className='nav-menu'>
               <li className='nav-item'>Home</li>
               <li className='nav-item'>EDM</li>
               <li className='nav-item'>Gallery</li>
               <li className='nav-item'>Events</li>
               <li className='nav-item'>About </li>
               <li className='nav-item'>Schedule</li>
            
              </ul>
        </div>
      <div className="hamburger" onClick={ToggleSwitch}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    
     </div> 
   );
}
export default Navbar;