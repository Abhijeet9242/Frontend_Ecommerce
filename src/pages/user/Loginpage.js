import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import PersonIcon from "@mui/icons-material/Person";
import Navbar1 from "../../components/common/Navbar1";
import Footer1 from "../../components/common/Footer1";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Banner1 from "../../Images/banner1.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/userAction";
import { Alert } from "@mui/material";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${Banner1});
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #3f51b5;
  color: white;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 15px !important;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  backgroundColor:"goldernrod;
  color:"black";
  
`;

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success, isLoggedIn } = useSelector((state) => state.user);

  const gotoRegister = () => {
    navigate("/user/register");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email,password)
    dispatch(signIn(email, password))
    .then((res) => {
      console.log(res, "res");
      if (res.status == 201) {
        alert("User Login Successful");
        navigate("/user/homepage");
      } else {
        alert(`${res.payload}`);
       
        setEmail("")
        setPassword("")
      }
    });
  };

  return (
    <>
      <Navbar1 col1="goldenrod" col2="white" />
      <StyledWrapper>
        <StyledFormWrapper>
          <PersonIcon style={{ fontSize: "70px", color: "goldenrod" }} />

          <h2 style={{ marginBottom: "40px" }}>Login</h2>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              variant="outlined"
              label="Email Address"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              fullWidth
              autoFocus
            />
            <StyledTextField
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              fullWidth
            />

            <StyledButton
              type="submit"
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "goldenrod",
                color: "black",
                fontweight: "bold",
              }}
            >
              Login
            </StyledButton>
          </StyledForm>
          <h4
            onClick={gotoRegister}
            style={{ marginTop: "20px", color: "navy", cursor: "pointer" }}
          >
            Register ➤
          </h4>
        </StyledFormWrapper>
      </StyledWrapper>
      <Footer1 />
    </>
  );
}
