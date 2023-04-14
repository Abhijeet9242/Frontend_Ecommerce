import axios from "axios";
import { GET_PRODUCT } from "../actionTypes/productActiontype";

const BASE_URL = "http://localhost:4005/products"


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


