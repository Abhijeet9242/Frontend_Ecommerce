import React, { useEffect, useState } from "react";
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link, useNavigate} from "react-router-dom";
// import styled from "@emotion/styled";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import Footer1 from "../../components/common/Footer1";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { showCartData } from "../../redux/actions/userAction";

const Navbar = (props) => {


  const color1 = props.col1
  const color2 = props.col2

  const [cartlength, setCartlength] = useState(0);
  const[mobileopen,setMobileOpen] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(showCartData())
  },[])

  // //cart item quantity
  const cartData = useSelector((state) => state.user.cart);

  useEffect(() => {
    if (cartData.length > 0) {
      setCartlength(cartData.length);
    }
  }, [cartData]);

  const userName = JSON.parse(localStorage.getItem('userName'))
  // console.log(userName)

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileopen)
  }


  ////navigate to cart page

  const goToCartPage = () => {
    navigate("/user/cart")

    }

    const goToLogout = () => {
      localStorage.removeItem("isUserLogedIn");
      navigate("/")
    }

  //menu drawer
  const drawer = (
    <Box onClick = {handleDrawerToggle}  sx={{textAlign:"center"}}>
           <Typography 
            variant="h6"
            color={"goldenrod"}
            component={"div"}
            sx={{flexGrow:1,my:2}}
           
            >
              <ShoppingBasketIcon />
              Ecommerce
            </Typography>
            <Divider/>

            <ul className="mobile-navigation">
                    <li><Link to="/user/homepage">Home</Link></li>
                    <li><Link to="/user/products">Products</Link></li>
                    <li>Logout</li>
                    
                </ul>

           
        </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar style={{display:"flex",justifyContent:"space-between",width:"100%"}}>

           <Box style={{width:"33%"}}>
            <IconButton 
            color="inherit"
             aria-label="open drawer" 
             edge="start"
              sx={{display:{sm:"none"}}}
              onClick={handleDrawerToggle}
              >
              <MenuIcon/>
            </IconButton>
            <Typography 
            variant="h6"
            color={"goldenrod"}
            component={"div"}
            sx={{fontSize:"32px"}}
            style={{display:"flex",alignItems:"center"}}
            >
              <ShoppingBasketIcon style={{fontSize:"32px"}} />
              Ecommerce
            </Typography>

            </Box>


           

            <Box sx={{display:{xs:"none" , sm:"block"}}} style={{width:"33%",marginTop:"15px"}} >
                <ul className="navigation-menu">
                    <li style={{backgroundColor:color1}}><Link to="/user/homepage">Home</Link></li>
                    <li  style={{backgroundColor:color2}}><Link to="/user/product">Products</Link></li>
                  </ul>
            </Box>
            

            <Box style={{width:"33%",display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>
              <p style={{marginRight:"20px"}}>{userName}</p>
              <p  onClick={goToLogout} style={{marginRight:"20px",cursor:"pointer",fontSize:"16px",fontWeight:"bold"}}>Logout</p>
              <div>
                <ShoppingCartIcon onClick={goToCartPage} style={{position:"relative",marginRight:"8px",cursor:"pointer",color:"orangered"}}/>
                <p style={{position:"absolute",top:"8px",left:"97%"}}>
                 
                  {cartlength}
                  </p>
                </div>
            </Box>
        </Toolbar>
        </AppBar>
        <Box component={"nav"}>
            <Drawer 
            variant="temporary"
             open={mobileopen} 
             onClose={handleDrawerToggle}
             sx={{display:{xs:"block",sm:"none"},
            "& .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"220px"
            }
            }}
             >
              {drawer}
            </Drawer>
        </Box>
        <Toolbar/>
      </Box>

     
    </>
  );
};

export default Navbar;
