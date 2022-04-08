import React from "react";
import CategoryCard from "./CategoryCard";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from 'react-bootstrap';
import  "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { getCategoriesList } from "../redux/action/Products";
const Home = () => {
  const CategoriesList = useSelector((state)=>state.ProductsReducer.categories);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getCategoriesList())
  },[])
  return (
    <div className="hero ">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>NEW SEASON ARRIVALS</h3>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p> 
          <NavLink to="/products" className="btn btn-outline-dark  ms-2 px-3 py-2">
            Shop Now 
          </NavLink>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3>NEW SEASON ARRIVALS</h3>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p> 
          <NavLink to="/products" className="btn btn-outline-dark  ms-2 px-3 py-2">
            Shop Now 
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/3.jpg"
            alt="third slide"
          />
          <Carousel.Caption>
          <h3>NEW SEASON ARRIVALS</h3>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p> 
          <NavLink to="/products" className="btn btn-outline-dark  ms-2 px-3 py-2">
            Shop Now 
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/4.jpg"
            alt="four slide"
          />

          <Carousel.Caption>
          <h3>NEW SEASON ARRIVALS</h3>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p> 
          <NavLink to="/products" className="btn btn-outline-dark  ms-2 px-3 py-2">
            Shop Now 
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/5.jpg"
            alt="five slide"
          />

          <Carousel.Caption>
                       <h3>NEW SEASON ARRIVALS</h3>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p> 
          <NavLink to="/products" className="btn btn-outline-dark  ms-2 px-3 py-2">
            Shop Now 
          </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="d-flex flex-wrap justify-content-around" style={{marginTop:"70px"}}>
        {CategoriesList.map((category)=>{
          return(
            <CategoryCard category={category}></CategoryCard>
          )
        })}
      </Container>
    </div>
  );
};

export default Home;
