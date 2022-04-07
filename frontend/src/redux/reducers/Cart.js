import * as types from "../actions/types";
import CartData from "../../pages/Cart/data";
const INITIAL_STATE = {
  totalQuantity: 0,
  totalCount: 0,
  cart: CartData,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TOTALS:
      let { totalQuantity, totalCount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalQuantity += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalCount: 0,
        }
      );
      totalQuantity = parseFloat(totalQuantity.toFixed(2));
      return { ...state, totalQuantity, totalCount };
    case types.INC:
      let tmpCartInc = state.cart.map((cartItem) => {
        if (cartItem.productId === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      return { ...state, cart: tmpCartInc };

    case types.DEC:
      let tmpCartDec = state.cart.map((cartItem) => {
        if (cartItem.productId === action.payload && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tmpCartDec };


      case types.DEL:
        let tmpCartDel = state.cart.map((cartItem) => {
          if (cartItem.productId === action.payload ) {
            return { ...cartItem, quantity: cartItem.quantity=0   };
          }
          return cartItem;
        }).filter((cartItem)=>cartItem.quantity!==0 )
        return { ...state, cart: tmpCartDel };

        case types.CLEAR_ITEMS:
          return {...state,cart:[],}
    default:
      return state;
  }
};
export default cartReducer;
