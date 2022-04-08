import React from "react";
import CategoryCard from "./CategoryCard";
import Products from "./Products";
import { Col, Container, Row } from 'react-bootstrap';
import  "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoriesList } from "../redux/action/Products";
const Home = () => {
  const CategoriesList = useSelector((state)=>state.ProductsReducer.categories);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getCategoriesList())
  },[])
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div
          className="card-img-overlay d-flex flex-column
  justify-content-center"
        >
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Container className="d-flex flex-wrap justify-content-around" style={{marginTop:"70px"}}>
        {CategoriesList.map((category)=>{
          return(
            <CategoryCard category={category}></CategoryCard>
          )
        })}
      </Container>
      <Products />
    </div>
  );
};

export default Home;
