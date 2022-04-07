const cart = [];

const handleCart = (state = cart, action)=>{
    const product = action.payload;
    switch(action.type) {
        case "ADDITEM":
            //check if product is Already Exist
            const exist = state.find((x)=> x.id === product.id)
            if(exist){
                //increase the Quantity
                return state.map((x)=>
            x.id === product.id ? {...x, qty: x.qty +1}:x
            );
            }else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1, 
                    }
                ]
            }
            break;

            case "DELITEM":
                const exsit1 = state.find((x)=> x.id === product.id);
                if(exsit1.qty ===1){
                    return state.filter((x)=> x.id !== exsit1.id)
                }else{
                    return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty-1} : x
                    )
                }
             break; 

        default:
           return state;
            break;    
    }

}

export default handleCart;