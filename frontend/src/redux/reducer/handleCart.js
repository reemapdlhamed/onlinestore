const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product is Already Exist
      const exist = state.find((x) => x._id === product._id);
      if (exist) {
        if(exist.quantity===exist.qty)
        return state.map((x) =>
        x._id === product._id ? { ...x, qty: x.qty } : x
      );     
        // Increase the Quantity
        return state.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x._id === product._id);
      if (exist1&&exist1.qty === 1) {
        return state.map((x) =>
        x._id === product._id ? { ...x, qty: x.qty } : x
      );     
     } else {
        return state.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;


      case "ZEROITEM":
        const exist2 = state.find((x) => x._id === product._id);
        return state.filter((x) => x._id !== exist2._id);
        
        break;
    default:
      return state;
      break;
  }
};

export default handleCart;
