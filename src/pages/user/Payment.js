import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Payment = () => {
  const navigate = useNavigate();
  let mygif =
    "https://1.bp.blogspot.com/-TUnIV6lCpUI/Ug5AjWt-L5I/AAAAAAAABRY/X5083DNXw28/s1600/LoadingWait.gif";

  useEffect(() => {
    setTimeout(() => {
      navigate("/user/order");
    }, 3000);
  }, []);

  return (
    <>

   
     <Box style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <Box>
        <img src={mygif} alt="" />
        </Box>
     </Box>
     
    </>
  );
};

export default Payment;