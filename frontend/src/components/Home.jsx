import React from "react";
import CategoryCard from "./CategoryCard";
import Products from "./Products";
import Carousel from "react-bootstrap/Carousel";
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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/3.jpg"
            alt="third slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/4.jpg"
            alt="four slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/5.jpg"
            alt="five slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
