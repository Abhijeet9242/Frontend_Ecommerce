import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/adminAction";

const ProductCardAdmin = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(item._id));
  };

  return (
    <>
      <Card
        style={{
          maxWidth: "95%",
          display: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          style={{ marginLeft: "30px", maxWidth: "8%" }}
          image={item.image}
        />
        <CardContent style={{ marginLeft: "30px", maxWidth: "10%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
        </CardContent>
        <CardContent style={{ marginLeft: "30px", maxWidth: "10%" }}>
          <Typography gutterBottom variant="h6" component="div">
            ₹{item.price}
          </Typography>
        </CardContent>
        <CardContent style={{ marginLeft: "30px", maxWidth: "10%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {item.brand}
          </Typography>
        </CardContent>
        <CardContent style={{ marginLeft: "40px", maxWidth: "10%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {item.category}
          </Typography>
        </CardContent>
        <CardContent style={{ marginLeft: "70px", maxWidth: "10%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {item.rating}
          </Typography>
        </CardContent>
        <CardContent style={{ marginLeft: "50px", maxWidth: "10%" }}>
          <p>{item.description}</p>
        </CardContent>
        <CardActions style={{ marginLeft: "30px", maxWidth: "10%" }}>
          <Button>
            <EditIcon />
          </Button>
          <Button onClick={handleDeleteProduct}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCardAdmin;
