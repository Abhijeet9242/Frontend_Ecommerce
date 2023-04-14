import React from 'react';
import { Container , Box ,Grid, Typography} from '@mui/material';

const h5styles={
  margin:"10px",
  color:"white",
 
}

const h6styles={
  margin:"10px",
  color:"grey",
  cursor:"pointer",
}


const Footer = (props) => {
  return (
   <Box sx={{
    width:"100%",
    bgcolor: 'black',
    
    }}>
      <Container  sx={{width:"80%"}}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h5" sx={h5styles}>Products</Typography>
            <Typography variant="h6" sx={h6styles}>Kids</Typography>
            <Typography variant="h6" sx={h6styles}>Mens</Typography>
            <Typography variant="h6" sx={h6styles}>Women</Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h5" sx={h5styles}>Services</Typography>
            <Typography variant="h6" sx={h6styles}>Free Delivery</Typography>
            <Typography variant="h6" sx={h6styles}>C.O.D</Typography>
            <Typography variant="h6" sx={h6styles}>Pay Later</Typography>
            <Typography variant="h6" sx={h6styles}>New Arrival</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h5" sx={h5styles}>Contact Us</Typography>
            <Typography variant="h6" sx={h6styles}>Gurgaon</Typography>
            <Typography variant="h6" sx={h6styles}>Mumbai</Typography>
            <Typography variant="h6" sx={h6styles}>Jaipur</Typography>
            <Typography variant="h6" sx={h6styles}>Patna</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Typography variant="h5" sx={h5styles}>Social Media</Typography>
            <Typography variant="h6" sx={h6styles}>Facebook</Typography>
            <Typography variant="h6" sx={h6styles}>Instagram</Typography>
            <Typography variant="h6" sx={h6styles}>Twitter</Typography>
            <Typography variant="h6" sx={h6styles}>Youtube</Typography>
          </Grid>
        </Grid>
      </Container>

<Typography align="center" sx={{color:"white",p:3}}>Created by ❤️ Abhijeet kumar</Typography>
   </Box>
  )
}

export default Footer

