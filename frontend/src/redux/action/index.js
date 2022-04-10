// For Add Item to Cart
import axios from "axios";

export const addCart = (product) => {


    return{
        type : "ADDITEM",
        payload : product
    }

}


export const addCartFromDB = (productArr) => {
    return{
        type : "ADDITEMS",
        payload : productArr
    }

}

// For Delete Item From Cart
export const delCart = (product) => {
    
    
    return{
        type : "DELITEM",
        payload : product
    }
}

// For Delete Item From Cart
export const zeroCart = (product) => {
    return{
        type : "ZEROITEM",
        payload : product
    }
}