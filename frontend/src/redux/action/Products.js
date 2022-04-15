import axios from "axios";
export const getProductsList = (id) => (dispatch) => {
  return axios.get(`http://localhost:8080/products/${id}`)
    .then((res) =>
      dispatch({
        type: "GET_PRODUCTS_LIST",
        payload: res.data.data,
      })
    )
    .catch((err) => console.log(err));
};
export const getCategoriesList = () => (dispatch) => {
  return axios.get(`http://localhost:8080/categories`)
    .then((res) =>
      dispatch({
        type: "GET_CATEGORIES_LIST",
        payload: res.data.data,
      })
    )
    .catch((err) => console.log(err));
};
export const searchProduct = (word,category_id) => (dispatch) => {
  return axios.post(`http://localhost:8080/search`,{category_id,word})
    .then((res) =>{
      dispatch({
        type: "SEARCH_PRODUCT",
        payload: res.data.data,
      })
    }
    )
    .catch((err) => console.log(err));
};
export const getProduct = (product_id) => {
  return{
      type : "GET_PRODUCT",
      payload : product_id
  }
}
export const selectGategory = (id) => {
  return{
      type : "SELECT_CATEGORY",
      payload : id
  }
}
export const sortAscend = (list) => {
  return{
      type : "SORT_ASCEND",
      payload : list
  }
}
export const sortDescend = (list) => {
  return{
      type : "SORT_DESCEND",
      payload : list
  }
}
export const sortRating = (list) => {
  return{
      type : "SORT_RATING",
      payload : list
  }
}