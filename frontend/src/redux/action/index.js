// For Add Item to cart
export const addItem = (product) =>{
    return {
        type : "ADDITEM" ,
        payload : product
    }
}

// For Delete Item to cart
export const delItem = (product) =>{
    return {
        type : "DELITEM" ,
        payload : product
    }
}