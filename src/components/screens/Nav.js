import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import "./Nav.css"
import { auth } from '../../firebase';


function Nav() {

  const [show,handleShow]= useState(false);
  const history = createBrowserHistory();
 
  const transitionNavBar = () =>{
    if (window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  } 
  
  useEffect(() =>{
    window.addEventListener("scroll",transitionNavBar);
    return () =>window.removeEventListener("scroll",transitionNavBar);

  },[]) 

  return (
    <>
      <div className={`nav ${show && 'nav-color'}`}>
        <div className="nav-content">
          <div  className="logo">
              <h1><img src={require("./assets/images/logo.png")} alt="Logo" onClick={()=>history.push("/")} /></h1>
          </div>
          <div  className="nav_img">
             <button className="nav_button" onClick={()=>auth.signOut()} >sign out</button>
          </div>
          </div>
      </div>
    </>
  );
}

export default Nav;
