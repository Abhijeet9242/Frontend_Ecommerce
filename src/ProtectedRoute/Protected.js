import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, useNavigate } from "react-router-dom";


const Protected = ({children}) => {
    const isUserLogedIn = localStorage.getItem("isUserLogedIn") == "true";

    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    // console.log(isLoggedIn,"kkkkk")

    const navigate  = useNavigate()


    useEffect(()=>{

      if(!isUserLogedIn){
        return navigate("/user/login")
      }
      else{
        return navigate("/user/homepage")
      }

    },[isUserLogedIn])
    

    return children

    // return(
    //     <Route
    //   {...rest}
    //   element={
    //     isUserLogedIn ? (
    //       <Element />
    //     ) : (
    //       <Navigate to="/login" replace={true} />
    //     )
    //   }
    // />
    // );
    
   
  };
  
  export default Protected;