import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Banner1 from "../../Images/banner1.jpg"

//modal
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import { addProduct, getProduct } from "../../redux/actions/adminAction";

//modal styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
 
};

//modal internal styling
const StyledWrapper = styled.div``;
const StyledText = styled.h3`
  text-align: center;
  color: goldenrod;
  background-color: black;
  padding: 7px 0px;
  margin-bottom: 20px;
`;
const StyledTextField = styled(TextField)`
  margin-top: 12px;
  
  
`;
const StyledButton = styled.button`
  display: flex;
  padding: 8px 40px;
  border-radius: 10px;
  background-color: #146c94;
  cursor: pointer;
  margin: auto;
  color: #ffffff;
  margin-top: 20px;
`;

const Mymodal = (props) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState({
    name: "",
    price: "",
    image: "",
    rating: "",
    brand: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(item));
    dispatch(getProduct());
    {
      props.handleClose();
    }
  };

  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        // onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{
          background:`url(${Banner1})`,
          
          }}>
          <CloseIcon
            onClick={props.handleClose}
            style={{ cursor: "pointer" }}
          />
          <StyledWrapper>
            <StyledText>ADD PRODUCT</StyledText>
            <StyledTextField
              variant="outlined"
              label="Enter Product name"
              type="text"
              required
              fullWidth
              size="small"
              autoFocus
              name="name"
              onChange={handleChange}
            />
            <StyledTextField
              variant="outlined"
              label="Enter Product Price"
              type="number"
              required
              fullWidth
              size="small"
              autoFocus
              name="price"
              onChange={handleChange}
            />
            <StyledTextField
              variant="outlined"
              label="Enter Product Image URL"
              type="text"
              required
              fullWidth
              size="small"
              autoFocus
              name="image"
              onChange={handleChange}
            />
            <StyledTextField
              variant="outlined"
              label="Enter Product Rating"
              type="number"
              required
              fullWidth
              size="small"
              autoFocus
              name="rating"
              onChange={handleChange}
            />
            <StyledTextField
              variant="outlined"
              label="Enter Product Brand"
              type="text"
              required
              fullWidth
              size="small"
              autoFocus
              name="brand"
              onChange={handleChange}
            />

            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="kids">Kids</MenuItem>
            </Select>

            <StyledTextField
              variant="outlined"
              label="Enter Product Description"
              type="text"
              required
              fullWidth
              size="small"
              autoFocus
              name="description"
              onChange={handleChange}
            />

            <StyledButton style={{backgroundColor:"goldenrod"}} onClick={handleAddProduct}>ADD</StyledButton>
          </StyledWrapper>
        </Box>
      </Modal>
    </div>
  );
};

export default Mymodal;
