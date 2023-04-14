import React, { useEffect, useState} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
  Button
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/adminAction";
import { deleteProduct } from "../../redux/actions/adminAction";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../../components/admin/Navbar"
import Footer1 from '../../components/common/Footer1';
import Banner1 from "../../Images/banner1.jpg"

const AdminProduct = () => {

  const data = useSelector((state) => state.product.products);

   //pagination
   const [page, setPage] = useState(1)
   const productsPerPage = 5;
   const totalPages = Math.ceil(data?.length / productsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [data]);

  const handleDeleteProduct = (item) => {
    
    dispatch(deleteProduct(item._id));
    dispatch(getProduct())
    
    
  };

  //pagination
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const productsToShow = Array.isArray(data) && data?.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );



  

  

  return (

    <>
   
   <Navbar/>
   
<div style={{
  background:`url(${Banner1})`,
}}>
    <h3 variant="h4" style={{paddingTop:"50px",textAlign:"center",marginBottom:"20px",color:"black",fontWeight:"bold"}}>Products</h3>
   
   
    <TableContainer  >
      <Table style={{width:"80%",margin:"auto",backgroundColor:"whitesmoke"}}>
        <TableHead>
          <TableRow style={{backgroundColor:"black"}}>
            <TableCell style={{color:"white",fontSize:"16px"}}>Image</TableCell>
            <TableCell  style={{color:"white",fontSize:"16px"}}>Product Name</TableCell>
            <TableCell  style={{color:"white",fontSize:"16px"}} align="left">Price</TableCell>
            <TableCell align="right"  style={{color:"white",fontSize:"16px"}}>Brand</TableCell>
            <TableCell align="right"  style={{color:"white",fontSize:"16px"}}>Category</TableCell>
            <TableCell align="right"  style={{color:"white",fontSize:"16px"}}>Rating</TableCell>
            <TableCell align="right"  style={{color:"white",fontSize:"16px"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(productsToShow) && productsToShow.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell >₹{item.price}</TableCell>
              <TableCell align="right">{item.brand}</TableCell>
              <TableCell align="right">{item.category}</TableCell>
              <TableCell align="right">★{item.rating}</TableCell>
              <TableCell align="right">
                <IconButton >
                  < EditIcon style={{color:"blue"}}/>
                </IconButton>
                {item.quantity}
                <IconButton onClick={()=>handleDeleteProduct(item)}>
                  <DeleteIcon style={{color:"red"}}/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Box style={{display:"flex",justifyContent:"center",paddingTop:"50px",paddingBottom:"50px"}}>
      <Button style={{backgroundColor:"goldenrod",color:"black"}}  variant="outlined" size="small" onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <span style={{margin:"0px 10px",color:"black"}}>{`Page ${page} of ${totalPages}`}</span>
        <Button style={{backgroundColor:"goldenrod",color:"black"}} variant="outlined" size="small" onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </Button>
      </Box>

  </div>  

<Footer1/>

   
    </>
  );
};

export default AdminProduct;

