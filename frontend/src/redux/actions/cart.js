import * as types from "./types"
export const getCartTotal = ()=>({
    type:types.GET_TOTALS
})

export const INC = (id)=>({
    
    type:types.INC,
    payload:id,
})

export const DEC = (id)=>({
    
    type:types.DEC,
    payload:id,
})

export const DEL = (id)=>({
    
    type:types.DEL,
    payload:id,
})

export const CLEAR_ITEMS = ()=>({
    
    type:types.CLEAR_ITEMS,
})

