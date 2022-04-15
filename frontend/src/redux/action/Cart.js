// SAVE SHIPPING ADDRESS
import { useHistory } from "react-router-dom";

export const saveShippingAddress = (data) => (dispatch) => {
  
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: data,
    });
  
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };

  export const clearLocalStorageCart = () => (dispatch) => {
    
    dispatch({
      type: 'CLEAR_CART',
    });
  
    //localStorage.removeItem('persist:root');
    };

  
    export const goToHome = () => (dispatch) => {
      const history = useHistory();

      dispatch({
        type: 'GO_HOME',
      });
    
      history.push("/")
    };
  
    