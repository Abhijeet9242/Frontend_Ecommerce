import React from 'react'
import Navbar1 from '../../components/common/Navbar1'
import Footer1 from '../../components/common/Footer1';
import { Link, useNavigate } from 'react-router-dom';
import Banner from "../../Images/banner.jpeg";
import "./Landingpage.css"



const LandingPage = () => {

  const navigate = useNavigate()

  const userId = localStorage.getItem("userId")

  const gotToLogin = () => {
      if(userId){
        navigate("/user/homepage")
      }

      else{
        navigate("/user/login")
      }
  }
 
  return (
    <>
        <Navbar1/>

        <div className='landingpage' style={{backgroundImage:`url(${Banner})`}}>
            <div className='header-container'>
                <h1>Ecommerce Shop</h1>
                <p>Best Clotes in India</p>
               
                <button onClick={gotToLogin}>SHOP NOW</button>
               
                
            </div>
        </div>
    
        <Footer1/>
    </>
  )
}

export default LandingPage