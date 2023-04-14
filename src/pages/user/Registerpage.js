import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Footer1 from "../../components/common/Footer1";
import Navbar1 from "../../components/common/Navbar1";
import Banner1 from "../../Images/banner1.jpg";
import { useNavigate } from "react-router-dom";
import { Signup } from "../../redux/actions/userAction";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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

export default function Registerpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  const { errorRegister, successRegister } = useSelector((state) => state.user);
  // const [successAlert, setSuccessAlert] = useState(false);
  // const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();

  console.log(errorRegister, successRegister);

  const gotoLogin = () => {
    navigate("/user/login");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(Signup(name, email, password)).then((res) => {
      console.log(res, "res");
      if (res.payload.status == 200) {
        // alert(`${res.payload.message}`);

        setSuccessMessage(`${res.payload.message}`)

         setTimeout(() => {
          setSuccessMessage("")
        }, 2000);
        
        setTimeout(()=>{
          navigate("/user/login");
        },2100)
      } else {
        // alert(`${res.payload}`);
        setErrorMessage(`${res.payload}`)
        setName("")
        setEmail("")
        setPassword("")

        setTimeout(() => {
          setErrorMessage("")
        }, 2000);
      }
    });
  };

  return (
    <>
      <Navbar1 col1="goldenrod" col2="white" />


     
      <StyledWrapper>
        <StyledFormWrapper>
        {errorMessage && (
  <Stack sx={{ width: "100%" }} spacing={2}>
    <Alert severity="error">{errorMessage}</Alert>
  </Stack>
)}
{successMessage && (
  <Stack sx={{ width: "100%" }} spacing={2}>
    <Alert severity="success">{successMessage}</Alert>
  </Stack>
)}

          <PersonIcon style={{ fontSize: "70px", color: "goldenrod" }} />

          <h2 style={{ marginBottom: "40px" }}>Register</h2>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              variant="outlined"
              label="Name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              fullWidth
              autoFocus
            />
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
              Register
            </StyledButton>
          </StyledForm>
          <h4
            onClick={gotoLogin}
            style={{ marginTop: "20px", color: "navy", cursor: "pointer" }}
          >
            Login ➤
          </h4>
        </StyledFormWrapper>
      </StyledWrapper>
      <Footer1 />
    </>
  );
}
