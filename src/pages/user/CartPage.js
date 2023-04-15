import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Typography,
  Box
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
// import { Navbar } from 'react-bootstrap';
import Navbar from "../../components/user/Navbar"
import Footer1 from '../../components/common/Footer1';
import { useDispatch, useSelector } from 'react-redux';
import { showCartData } from '../../redux/actions/userAction';
// import Loader from '../../components/common/Loader';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
import axios from "axios";


const CartTable = () => {

  const navigate = useNavigate()

  
  const dispatch = useDispatch()

  const userId = JSON.parse(localStorage.getItem("userId"))
  

  useEffect(()=>{
    if (userId) {
      dispatch(showCartData(userId));
    }
   },[dispatch, userId])

   const cartdata = useSelector((state) => state.user.cart);

   console.log(cartdata,"bbb")

   
  //  const loading = useSelector((state) => state.user.loading)

  //  console.log(loading,"kkkk")
  
  const totalPrice = Array.isArray(cartdata) ? cartdata.reduce((total, item) => {
    return total + item.price;
}, 0) : 0;

   const goToCheckout = () => {
      navigate("/user/payment")
   }
  
   //delete cart item for specfic user
   const deleteCartItem = async (productId) => {
    try {
      // const userId = JSON.parse(localStorage.getItem("userId"));
      if (userId) {
        // const deleteditem = await axios.patch(`http://localhost:4005/user/cart/delete/${userId}`, { productId });
        const deleteditem = await axios.patch(`https://ecommerce2-q3-assignment-backend.onrender.com/user/cart/delete/${userId}`, { productId });
        console.log(deleteditem)
        dispatch(showCartData(userId));
      }
     
    } catch (error) {
      console.error('Error deleting product from cart:', error);
    }
  };

  //delete whole cart of specific user
const deleteCart = async() => {
  try{
    if (userId) {
      // const deletedcart = await axios.patch(`http://localhost:4005/user/cart/deletecart/${userId}`);
      const deletedcart = await axios.patch(`https://ecommerce2-q3-assignment-backend.onrender.com/user/cart/deletecart/${userId}`);
      console.log(deletedcart,"vv")
      dispatch(showCartData(userId));
    }
  }
  catch(error){
    console.error('Error deleting on user  cart:', error);
  }
}


  return (

    <>
    <Navbar/>

    <Typography variant="h4" style={{textAlign:"center",marginTop:"5%",marginBottom:"5%",width:"60%",marginLeft:"6%",fontSize:"30px",fontWeight:"bold"}}>Cart</Typography>
    
    <Box style={{display:"flex",justifyContent:"center"}}>
      
      
    <TableContainer component={Paper} style={{marginBottom:"100px",width:"60%",marginRight:"100px"}}>
    <Button onClick={deleteCart} style={{marginBottom:"10px",backgroundColor:"goldenrod"}} size="small" variant="contained">Delete Cart</Button>
      <Table>
        <TableHead>
          <TableRow style={{backgroundColor:"grey"}}>
            <TableCell  style={{color:"white",fontSize:"16px"}}>Image</TableCell>
            <TableCell  style={{color:"white",fontSize:"16px"}}>Product Name</TableCell>
            <TableCell align="right"  style={{color:"white",fontSize:"16px"}}>Price</TableCell>
            <TableCell align="right"  style={{color:"white",fontSize:"16px"}}>Action</TableCell>
          </TableRow>
        </TableHead>

    {
      cartdata.length == 0 &&<Typography variant="h4"  style={{width:"100%"}}>Cart is Empty !!</Typography>
    }
        
        <TableBody>
      
          {Array.isArray(cartdata) && cartdata.map((item,i) => (
            <TableRow key={i}>
              <TableCell>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' ,objectFit:"contain"}} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">₹{item.price}</TableCell>
              <TableCell align="right">
                <IconButton 
                // onClick={() => handleDecrement(item.id)}
                >
                 < DeleteIcon onClick={()=>deleteCartItem(item._id)} style={{color:'orangered'}}/>
                </IconButton>
               
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

    <TableContainer component={Paper} style={{width:"20%",height:"150px"}}>
      <Table>
        <TableHead>
          <TableRow style={{backgroundColor:"grey"}}>
            
            <TableCell align="center" style={{color:"white",fontSize:"16px"}}>SubTotal</TableCell>
          </TableRow>
        </TableHead>

        
        <TableBody>

        <Typography style={{marginTop:"10px",marginBottom:"10px",paddingLeft:'10px'}} >
        Total : ₹{totalPrice}
        </Typography>
      
      <Button disabled={cartdata.length == 0} onClick={goToCheckout} style={{width:"100%",backgroundColor:"goldenrod"}} variant="contained">CHECKOUT</Button>
          
        </TableBody>
      </Table>
    </TableContainer>
    
</Box>

    <Footer1/>
    </>
  );
};

export default CartTable;
