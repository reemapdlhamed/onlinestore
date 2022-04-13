import { Chip, Grid, TextField } from "@mui/material";
import Products_Card from "../../components/Products_Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCategoriesList,
  getProductsList,
  searchProduct,
  selectGategory,
} from "../../redux/action/Products";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { height } from "@mui/system";
function Products() {
  const ProductsList = useSelector((state) => state.ProductsReducer.list);
  const CategoriesList = useSelector(
    (state) => state.ProductsReducer.categories
  );
  const dispatch = useDispatch();
  const selected_category = useSelector(
    (state) => state.ProductsReducer.category
  );
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    console.log(selected_category);
    if (searchWord === "") {
      dispatch(getProductsList(selected_category));
      dispatch(getCategoriesList());
    } else {
      dispatch(searchProduct(searchWord, selected_category));
    }
  }, [selected_category, searchWord]);

  function categoryClick(cat) {
    dispatch(selectGategory(cat._id));
  }
  function searchHandel(e) {
    setSearchWord(e.target.value);
  }

  return (
    <Container
      style={{ padding: "0", position: "relative" }}
      fluid="true"
      className="d-flex flex-wrap justify-content-end min-vh-100"
    >
      <div className="products-sidebar">
        <div
          className="d-flex flex-column flex-wrap justify-content-around align-content-center"
          style={{
            width: "80%",
            height: "20%",
            border: "solid 2px #eee",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          <h5 style={{ color: "gold" }}>Filter By Name</h5>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            label="Product Name"
            value={searchWord}
            variant="outlined"
            onChange={(e) => searchHandel(e)}
          />
        </div>

        <div
          className="d-flex flex-column flex-wrap justify-content-around align-content-center"
          style={{
            width: "80%",
            height: "70%",
            border: "solid 2px #eee",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <h5 style={{ color: "gold" }}>Filter By Category</h5>
          <Chip
            style={{ color: "white" }}
            label="All"
            onClick={() => categoryClick({ _id: "" })}
          />
          {CategoriesList.map((cat) => {
            return (
              <Chip
                style={{ color: "white" }}
                label={cat.name}
                onClick={() => categoryClick(cat)}
              />
            );
          })}
        </div>
      </div>
      <div style={{ width: "25%" }}></div>
      <Container
        className="d-flex flex-wrap justify-content-around min-vh-100"
        style={{ width: "70%", marginTop: "50px" }}
      >
        {ProductsList.map((product) => {
          return <Products_Card product={product}></Products_Card>;
        })}
      </Container>
    </Container>
  );
}

export default Products;
