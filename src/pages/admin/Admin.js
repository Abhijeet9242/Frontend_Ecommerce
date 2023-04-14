import React, { useEffect } from "react";
import Navbar from "../../components/admin/Navbar";

import "./Admin.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Mymodal from "../../components/admin/Mymodal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useDispatch} from "react-redux";
import { getProduct } from "../../redux/actions/adminAction";
import { useNavigate } from "react-router-dom";
import Footer1 from "../../components/common/Footer1";
import Banner1 from "../../Images/banner1.jpg"

const Admin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const gotoAdminProduct = () => {
    navigate("/admin/product");
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(getProduct());
  };

  // const data = useSelector((store) => store.product.products);
  // console.log("all",data)

  return (
    <>
      <Navbar />

      <Box
        sx={{
          width: "100%",
          background:`url(${Banner1})`,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card
                style={{ height: "280px", width: "100%" }}
                onClick={handleOpen}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://www.identixweb.com/wp-content/uploads/2022/01/Add-Customization-for-Custom-Products.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      ADD PRODUCT
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Admin Can Add products to the database .
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card
                style={{ height: "280px", width: "100%" }}
                onClick={gotoAdminProduct}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://img.freepik.com/free-vector/catalogue-concept-illustration_114360-2032.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      VIEW PRODUCTS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Admin Can Update and Delete Product.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Mymodal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      </Box>

      <Footer1/>
    </>
  );
};

export default Admin;
