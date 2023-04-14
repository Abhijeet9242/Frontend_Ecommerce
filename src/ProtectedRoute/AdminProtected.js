import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, useNavigate } from "react-router-dom";


const AdminProtected = ({children}) => {
   
    const isAdminLogedIn = localStorage.getItem("isAdminLogedIn") === "true"

    const navigate  = useNavigate()




    useEffect(()=>{
      if(!isAdminLogedIn){
        return navigate("/admin/login")
      }
    },[isAdminLogedIn])

    return children

    
    
   
  };
  
  export default AdminProtected;