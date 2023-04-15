import axios from "axios";
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SHOW_CART,
  SHOW_CART_LOADING,
  SHOW_CART_FAILURE,
  SHOW_CART_SUCCESS,
} from "../actionTypes/userActionType";

// const BASE_URL = "http://localhost:4005/user";
const BASE_URL = "https://ecommerce2-q3-assignment-backend.onrender.com/user";

export const Signup = (name, email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    return await axios
      .post(
        `${BASE_URL}/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        return dispatch({
          type: SIGNUP_SUCCESS,
          payload:res.data
        });
      });
  } catch (error) {
    // console.log(error.response.data.error,"jjj")
    return dispatch({
      type: SIGNUP_ERROR,
      payload: error.response.data.error,
    });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, { email, password });

    //   console.log(res.data.user,"hh")
    const userData = res.data.user;
    const status = res.data.status
    // console.log("user_id",userData)
    localStorage.setItem("userId", JSON.stringify(userData._id));
    localStorage.setItem("isUserLogedIn",JSON.stringify(true));
    localStorage.setItem("userName", JSON.stringify(userData.name));

    return dispatch({
      type: SIGN_IN_SUCCESS,
      payload: userData,
      status:status
    });

    
  } catch (error) {
    console.log(error.response.data.message);
    return dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//add to cart data

export const addToCartData = (userId, productId) => async (dispatch) => {
  dispatch({
    type: SHOW_CART_LOADING,
  });

  try {
    const res = await axios.patch(`${BASE_URL}/cart`, { userId, productId });
    const usercartdata = res.data.data;

    // console.log(usercartdata,"nm")
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: usercartdata,
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//show cart data into cartpage

export const showCartData = (userId) => async (dispatch) => {
  // console.log("hunnybunny")
  // console.log(`${BASE_URL}/cart/${userId}`,"asa")
  
  dispatch({
    type: SHOW_CART_LOADING,
  });

  try {
    const res = await axios.get(`${BASE_URL}/cart/${userId}`);
    const cartdata = res.data.user.cart;

    console.log("cartdata", res.data.user);

    dispatch({
      type: SHOW_CART_SUCCESS,
      payload: cartdata,
    });
  } catch (error) {
    dispatch({
      type: SHOW_CART_FAILURE,
    });
  }
};
