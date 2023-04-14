import React, { useEffect, useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer1 from "../../components/common/Footer1";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/adminAction";
import { Box, Grid } from "@mui/material";
import { Container } from "react-bootstrap";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import {Button} from '@mui/material/Button';
import { addToCartData } from "../../redux/actions/userAction";

const ProductPage = () => {
  const datas = useSelector((state) => state.product.products);
  const [products, setProducts] = useState(null);
  const [ratingFilter, setRatingFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  //pagination
  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(products?.length / productsPerPage);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    if (datas.length) {
      setProducts(datas);
    }
  }, [datas]);

  const userId = JSON.parse(localStorage.getItem("userId"));

  // console.log("dat",datas)
  const dispatch = useDispatch();

  const addToCart = (productId) => {
    // console.log(productId,"proid")
    // console.log(userId,"usu")
    dispatch(addToCartData(userId, productId));
    dispatch(getProduct());
  };

  console.log(products, "hghg");

  //sorting
  const handleSort = (order) => {
    let sortedProducts = [...datas];
    if (order === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  //filter by  specific rating
  // const handleFilter = (rating) =>{
  //   setRatingFilter(rating);
  //   if (rating !== "") {
  //     const filteredProducts = datas.filter((p) => p.rating === rating);
  //     setProducts(filteredProducts);
  //   } else {
  //     setProducts(datas);
  //   }
  // }

  //filter by specific category

  // const handleCategoryFilter = (category) => {
  //   setCategoryFilter(category);
  //   if (category !== "") {
  //     const filteredProducts = datas.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  //     setProducts(filteredProducts);
  //   } else {
  //     setProducts(datas);
  //   }
  // };

  //combining rating and category filter
  const handleFilter = (rating) => {
    setRatingFilter(rating);
    const filteredProducts = datas.filter(
      (p) =>
        (p.rating === rating || rating === "") &&
        (p.category.toLowerCase() === categoryFilter.toLowerCase() ||
          categoryFilter === "")
    );
    setProducts(filteredProducts);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    const filteredProducts = datas.filter(
      (p) =>
        (p.category.toLowerCase() === category.toLowerCase() ||
          category === "") &&
        (p.rating === ratingFilter || ratingFilter === "")
    );
    setProducts(filteredProducts);
  };

  const handleResetFilter = () => {
    setRatingFilter("");
    setCategoryFilter("");
    setProducts(datas);
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

  const productsToShow = products?.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <>
      <Navbar col1="white" col2="goldenrod" />

      <Box
        style={{
          width: "100%",
          display: "flex",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Box style={{ width: "20%", backgroundColor: "whitesmoke" }}>
          <Typography
            variant="h5"
            align="center"
            style={{
              backgroundColor: "lightgrey",
              padding: "20px 0px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Filter
          </Typography>

          <Typography align="center" style={{ marginTop: "20px" }}>
            Sorting
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => handleSort("desc")}
              variant="outlined"
              size="small"
              style={{ marginRight: "10px" }}
            >
              High to Low
            </Button>
            <Button
              onClick={() => handleSort("asc")}
              variant="outlined"
              size="small"
            >
              Low to High
            </Button>
          </Box>

          <Typography align="center" style={{ marginTop: "20px" }}>
            Rating
          </Typography>
          <Box
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "3px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleFilter(5)}
            >
              5★
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "3px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleFilter(4)}
            >
              4★
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "3px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleFilter(3)}
            >
              3★
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "3px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleFilter(2)}
            >
              2★
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "3px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleFilter(1)}
            >
              1★
            </button>
          </Box>

          <Typography align="center" style={{ marginTop: "20px" }}>
            Category
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <select
              value={categoryFilter}
              onChange={(e) => handleCategoryFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={handleResetFilter}
              variant="contained"
              size="small"
              style={{ backgroundColor: "goldenrod" }}
            >
              Reset
            </Button>
          </Box>
        </Box>

        <Box style={{ width: "80%" }}>
          <Container maxWidth="sm">
            <Grid container spacing={6}>
              {productsToShow?.map((data, i) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
                    <Card sx={{ maxWidth: 345, height: "380px" }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="220"
                        image={data.image}
                        style={{objectFit:"contain"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {data.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          style={{ color: "black", fontSize: "20px" }}
                        >
                          ₹{data.price}
                        </Button>
                        <Button
                          size="small"
                          style={{ color: "green", fontSize: "14px" }}
                        >
                          ★{data.rating}
                        </Button>
                        <Button
                          onClick={() => addToCart(data._id)}
                          variant="contained"
                          style={{ backgroundColor: "orangered" }}
                        >
                          Add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box style={{display:"flex",justifyContent:"center",marginBottom:"30px",marginTop:"20px"}}>
      <Button  variant="outlined" size="small" onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <span style={{margin:"0px 10px",color:"teal"}}>{`Page ${page} of ${totalPages}`}</span>
        <Button variant="outlined" size="small" onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </Button>
      </Box>

      <Footer1 />
    </>
  );
};

export default ProductPage;
