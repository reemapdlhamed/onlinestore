import { Chip, Grid, TextField } from "@mui/material";
import Products_Card from "../../components/Products_Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoriesList, getProductsList, searchProduct } from "../../redux/action/Products";
import { Col, Container, Row } from 'react-bootstrap';
import  "bootstrap/dist/css/bootstrap.min.css";
function Products() {
  const ProductsList = useSelector((state)=>state.ProductsReducer.list);
  const CategoriesList = useSelector((state)=>state.ProductsReducer.categories);
  const dispatch = useDispatch();
  const [selected_category,setSelected_category] = useState("")
  const [searchWord,setSearchWord] = useState("")
  useEffect(()=>{
    if(searchWord === ""){
      dispatch(getProductsList(selected_category))
      dispatch(getCategoriesList())
    }
    else{
      dispatch(searchProduct(searchWord,selected_category))
    }
      
  },[selected_category,searchWord])

  function categoryClick(cat){
    setSelected_category(cat._id)
  }
  function searchHandel(e){
    setSearchWord(e.target.value)
  }


  return (
    <Container className="d-flex flex-wrap justify-content-around">
      <div className="d-flex flex-wrap justify-content-around align-content-center" style={{width:"70%",height:"60px",border:"solid 2px #eee",borderRadius:"10px",marginBottom:"50px",marginTop:"50px"}}>
        <Chip label="All" onClick={()=>categoryClick({_id:""})} />
        {CategoriesList.map((cat)=>{
         return(
           <Chip label={cat.name} onClick={()=>categoryClick(cat)} />
         )
        })}
      </div>
      <TextField style={{width:"20%",marginTop:"60px"}} id="outlined-basic" label="Search" value={searchWord} variant="outlined" onChange={(e)=>searchHandel(e)} />
        {ProductsList.map((product)=>{
              return (        
                  <Products_Card product={product} ></Products_Card>
              )
            })}
    </Container>
  )
}

export default Products;

