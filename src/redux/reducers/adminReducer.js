import { ADD_PRODUCT, ADMIN_SIGNIN_FAILURE, ADMIN_SIGNIN_SUCCESS, DELETE_PRODUCT, GET_PRODUCT } from "../actionTypes/adminActiontype"

const initialState = {
    products:[],
   
}

export const productReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_PRODUCT : {
            return {...state, products: action.payload}
        }

        case GET_PRODUCT : {
            return {...state, products: action.payload}
        }
        case DELETE_PRODUCT: {
            return{
                ...state, products : action.payload
               }
        }
        default : {
            return state
        }
    }
}



const admininitialstate = {
    error:'',
    success: false,
    admin:[],
    isAdminLoggedIn:false
}

export const adminReducer = (state=admininitialstate,action) => {
        switch(action.type){
            case ADMIN_SIGNIN_SUCCESS:{
                return {...state, 
                    admin:action.payload,
                    isAdminLoggedIn:true,
                    success:true
                }
            }
            case ADMIN_SIGNIN_FAILURE:{
                return {...state,error: action.payload}
            }
            default :{
                return state
            }
        }
}

