import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default Loader