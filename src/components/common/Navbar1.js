import React, { useState } from "react";
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link} from "react-router-dom";
// import styled from "@emotion/styled";
import "./Navbar1.css";
import MenuIcon from '@mui/icons-material/Menu';
// import Footer1 from "./Footer1";

const Navbar1 = (props) => {
  const color1 = props.col1
  const color2 = props.col2

  const[mobileopen,setMobileOpen] = useState(false)

  

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileopen)
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
                    <li><Link to="/user/login">User</Link></li>
                    <li><Link to="/admin/login">Admin</Link></li>
                    
                </ul>
        </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton 
            color="inherit"
             aria-label="open drawer" 
             edge="start"
              sx={{mr:2, display:{sm:"none"}}}
              onClick={handleDrawerToggle}
              >
              <MenuIcon/>
            </IconButton>
            <Typography 
            variant="h6"
            color={"goldenrod"}
            component={"div"}
            sx={{flexGrow:1,fontSize:"31px"}}
            style={{display:"flex",alignItems:"center"}}
            
            >
              <ShoppingBasketIcon style={{fontSize:"30px"}} />
              Ecommerce
            </Typography>

            

            <Box sx={{display:{xs:"none" , sm:"block"}}} style={{paddingTop:"12px"}} >
                <ul className="navigation-menu">
                    <li style={{backgroundColor:color1}}><Link to="/user/login">User</Link></li>
                    <li  style={{backgroundColor:color2}}><Link to="/admin/login">Admin</Link></li>
                  </ul>
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

export default Navbar1;
