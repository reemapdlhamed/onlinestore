import { Grid } from "@mui/material";
import Products_Card from "../../components/Products_Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsList } from "../../redux/actions/Products";
import { Col, Container, Row } from 'react-bootstrap';
import  "bootstrap/dist/css/bootstrap.min.css";
function Products() {
  const ProductsList = useSelector((state)=>state.list);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductsList())
      
  },[])

  return (
    <Container className="d-flex flex-wrap justify-content-around">
        {ProductsList.map((product)=>{
              return (        
                  <Products_Card product={product} ></Products_Card>
              )
            })}
    </Container>
  )
}

export default Products;

