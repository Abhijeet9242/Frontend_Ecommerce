import {ADD_PRODUCT, ADMIN_SIGNIN_FAILURE, ADMIN_SIGNIN_SUCCESS, DELETE_PRODUCT, GET_PRODUCT} from "../actionTypes/adminActiontype"
import axios from "axios";

// const BASE_URL = "http://localhost:4005/products"
const BASE_URL = "https://ecommerce2-q3-assignment-backend.onrender.com/products"

export const addProduct = (product) => async(disptach) => {
    
    try{
        const res = await axios.post(BASE_URL,JSON.stringify(product),{
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const newproduct = res.data
        disptach({
            type:ADD_PRODUCT,
            payload:newproduct
        })
    }
    catch(error){
        console.log(error.message);
    }
}

export const getProduct = () => async(dispatch) => {
    try{
        const res = await axios.get(BASE_URL)
        const products = res.data.products
        // console.log(products.products,"ll")

        dispatch({
            type:GET_PRODUCT,
            payload:products
        })
    }
    catch(error){
        console.log(error)
    }
}

export const deleteProduct = (productId) => async(dispatch)=>{
   try{
    const res = await axios.delete(`${BASE_URL}/${productId}`)
    const products = res.data

    console.log(products,"mm")

    dispatch({
        type:DELETE_PRODUCT,
        payload:products
    })
   }
   catch(error){
    console.log(error)
   }
}



//admin signin

export const AdminsignIn = (email, password) => async (dispatch) => {
    try {
    //   const res = await axios.post("http://localhost:4005/admin/login", { email, password });
    const res = await axios.post("https://ecommerce2-q3-assignment-backend.onrender.com/admin/login", { email, password });

    //   console.log(res.data.user,"hh")
    const adminData = res.data.admin
      dispatch({ 
        type: ADMIN_SIGNIN_SUCCESS,
         payload: adminData
         });

         localStorage.setItem('adminId', JSON.stringify(adminData._id));
         localStorage.setItem("isAdminLogedIn", true);
         localStorage.setItem("adminName", JSON.stringify(adminData.name));

    } catch (error) {
    //   console.log(error.response.data.message)
      dispatch({ 
        type: ADMIN_SIGNIN_FAILURE, 
        payload: error.response.data.message
    });
    }
  };
  
