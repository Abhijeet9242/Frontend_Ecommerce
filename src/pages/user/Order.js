import { Box, Typography } from '@mui/material';
import React from 'react';
import {useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate()
  const goToHome = () => {
    navigate("/user/homepage")
  }
  return (

    <Box style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <Box>
            <h2 style={{fontSize:"45px",color:"green"}}>Order Success!!</h2>
         
          <Typography variant="h6" 
          style={{
            textAlign:"center",
            width:"100px",
            height:"100px",
            borderRadius:"50%",
            // border:"1px solid red",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            margin:" 40px auto",
            backgroundColor:"goldenrod",
            color:"white",
            fontWeight:"bold",
            cursor:"pointer",

            }} onClick={goToHome}>Home</Typography>
    </Box>
 </Box>
    
  )
}

export default Order