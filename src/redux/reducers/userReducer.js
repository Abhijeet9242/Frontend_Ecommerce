import { SHOW_CART, SHOW_CART_LOADING, SHOW_CART_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from "../actionTypes/userActionType";

const initialState = {
    error: '',
    success: false,
    user:[],
    isLoggedIn:false,
    cart:[],
    errorRegister:"",
    successRegister:false,
    loading:false,
    quantity:0,
    totalprice:0,
  };

  export const userReducer = (state=initialState,action) => {
        switch(action.type){
            case SIGNUP_SUCCESS:{
                return {...state,successRegister:true,}
            }
            case SIGNUP_ERROR:{
                return {...state,successRegister:false, errorRegister:action.payload}
            }

            

            case SIGN_IN_SUCCESS:{
                return {
                    ...state,
                    user:action.payload,
                    isLoggedIn:true,
                    success:true,
                    cart:action.payload,
                    loading:false
                }
            }
            case SIGN_IN_FAILURE:{
                return {...state , error:action.payload}
            }

            case SHOW_CART_LOADING:{
                return {...state, loading:true}
            }
            case SHOW_CART_SUCCESS:{
                return {...state, loading:false, cart:action.payload}
            }
            default :{
                return state
            }
        }
  }
  