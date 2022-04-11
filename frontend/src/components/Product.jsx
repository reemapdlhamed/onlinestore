import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart,addCartFirst } from "../redux/action";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { addItem } from "../redux/action/index";
import { Rating,Card,CardContent,Typography,TextField,Alert,AlertTitle } from "@mui/material";
import axios from "axios";
import { border } from "@mui/system";
import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const[reviews ,setReviews] = useState([]);
  const [popup,setPopup] = useState("");
  const [reviewForm,setReviewForm] = useState("d-none")
  


  let newReview = {
    title:"",
    description:"",
    userID:"",
    rating:"",
    user:""
  };

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCartFirst(product));
  };
  //changes
  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`).then((res) => {
      setProduct(res.data.data[0]);
      setReviews(res.data.data[0].reviews);
    });
  }, []);
  function sendReview(){
    if(localStorage.getItem('accessToken') === null){
      setPopup(<>
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        opps! , Review Failed — <strong>You should login to add review</strong>
        </Alert>
        <NavLink style={{width:"25%"}} to="/login" className="btn btn-dark ms-2 px-3 py-2">
            Login now
          </NavLink>
        </>)
    }
    else{
      newReview.userID = localStorage.getItem('_id');
      newReview.user = localStorage.getItem('name');
      axios({
        method: "put",
        url: "http://localhost:8080/review",

        data: {
          id: product._id,
          new_review:newReview
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setPopup(<>
          <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Thank You For your Review — <strong>Have a Good Day</strong>
          </Alert></>)
      })
      .catch((error) => {
        setPopup(<>
          <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          opps! , Review Failed — <strong>One of the required fields is empty or wrong</strong>
          </Alert></>)
      });  
    }
    
  }
  function showAddReview(){
    setReviewForm("d-flex flex-column flex-wrap justify-content-between")
  }
  function closeAddReview(){
    setReviewForm("d-none")
  }
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  // let Saving = () => {
  //   console.log("Clicked");
  //   setReview({
  //     ...review,
  //     review:3,
  //     comment:"test"
  //   })
    
  //   };
  //   useEffect(()=>{
  //     console.log("UPDATED");
  //   },[review])

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img
            src={product.images}
            alt={product.name}
            height="400px"
            width="400px"
            // style={{border :" 1px solid black"}}
            className="py-3 px-3"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black fw-bold display-6">
            {product.name}
          </h4>
          <h3 className="lead fw-normal">
            {" "}
            <p className="fw-bold ">DESC :</p> {product.description}
          </h3>
          <h3 className=" fw-bold my-4 text-danger ">
            Price : {product.price} E£{" "}
          </h3>
          <Rating name="read-only" value={product.rating} readOnly /> <hr />
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
          <button
            style={{marginLeft:"10px"}}
            className="btn btn-outline-primary px-4 py-2"
            onClick={showAddReview}
          >
            Add Review
          </button>
        </div>
        <div  style={{height:"400px",width:"550px",border:"2px solid #eee",padding:"10px"}} className={reviewForm}>
          <TextField className="title"   style={{width:"60%"}} onChange={(event) => {newReview.title=event.target.value}} id="demo-helper-text-misaligned-no-helper" label="Review Title" />
          <TextField className="comment"  style={{width:"60%"}} onChange={(event) => { newReview.description=event.target.value}} id="demo-helper-text-misaligned-no-helper" label="Comment" />
          <Rating name="simple-controlled" onChange={(event) => { newReview.rating = +event.target.value}}/>
          {popup}
          <Button style={{width:"20%",margin:"10px"}} onClick={sendReview} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <Button style={{width:"20%",margin:"10px"}} onClick={closeAddReview} variant="contained" color="error" endIcon={<CloseIcon />}>Close</Button>
          </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
          {reviews.map((review)=>{
              return(
                <Card sx={{ minWidth: 275 }} style={{marginBottom:"30px",border:"2px solid lightblue"}}>
                  <CardContent>
                    <Typography style={{color:"#999",fontWeight:"bolder"}} variant="h4" component="div">
                      {review.title}
                    </Typography>
                    <Typography style={{color:"7A0BC0",fontWeight:'bold'}}  sx={{ mb: 1.5 }} color="text.secondary">
                      {review.user}
                    </Typography>
                    <hr style={{color:"blue"}}></hr>
                    <Typography variant="body2">
                      {review.description}
                      <br />

                    </Typography>
                    <Rating name="read-only" value={review.rating} readOnly />
                  </CardContent>
                </Card>
              )
            })}
            
          </div>
          
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
