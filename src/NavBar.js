import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { useNavigate } from "react-router-dom";

function Nav() { 
  const [show, handleShow] = useState(false);
  const history = useNavigate()
  const tansitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", tansitionNavBar)
    return () => window.removeEventListener("scroll", tansitionNavBar)
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}> 
        <div className="nav_content">
        <img
          onClick={() => history("/home")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="" />
        
        <img
          onClick={()=>history("./profile")}
          className="nav_avatar"
          src="https://loodibee.com/wp-content/uploads/Netflix-avatar-3.png"
          alt="" />  
        
      </div>

    </div>

  )
}

export default Nav