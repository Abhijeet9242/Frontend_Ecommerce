import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import  TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Navbar1 from '../../components/common/Navbar1';
import Footer1 from '../../components/common/Footer1';
import Banner1 from "../../Images/banner1.jpg";import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { AdminsignIn } from '../../redux/actions/adminAction';




const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background:url(${Banner1});
  
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
  background-Color:#FFFFFF;
 
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
  margin-bottom: 15px  !important;
 
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  backgroundColor:"goldernrod;
  color:"black";
  
`;

export default function LoginpageAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {error,success,isAdminLoggedIn} = useSelector((state)=>state.admin)


  useEffect(()=>{
      if(success){
        navigate("/admin/homepage")
      }
      else if(error !== ""){
        navigate("/admin/login")
      }
  },[error,success,navigate])
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AdminsignIn(email,password))
    setEmail("")
    setPassword("")
};

  return (
    <>
    <Navbar1 col1="white" col2="goldenrod"/>
    <StyledWrapper>
      <StyledFormWrapper>
        
          <AdminPanelSettingsIcon style={{fontSize:"70px",color:"goldenrod"}} />
       
        <h2 style={{marginBottom:"40px"}}>Login</h2>
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
         
          <StyledButton type="submit" variant="contained" fullWidth style={{backgroundColor:"goldenrod",color:"black", fontweight:"bold"}}>
            Login
          </StyledButton>
        </StyledForm>
        
      </StyledFormWrapper>

      
    </StyledWrapper>
    <Footer1/>
    </>
  );
}