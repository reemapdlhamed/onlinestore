const INITIAL_STATE = {
    list: [],
    categories:[],
    product:{}
  };
  
  export function ProductsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_PRODUCTS_LIST":
        return {
          ...state,
          list: action.payload,
        };
      case "GET_CATEGORIES_LIST":
        return {
          ...state,
          categories: action.payload,
        };
      case "GET_PRODUCT":
        return {
          ...state,
          product: action.payload,
        };
      case "SEARCH_PRODUCT":
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
  }