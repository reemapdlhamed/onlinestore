import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../pages/Products/Products.css";
import { Rating } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action/Products";

function Products_Card(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const navigateTo = (e) => {
    // dispatch(getProduct(e.target.value))
    history.push(`/product/${e.target.value}`);
  };

  return (
    <Card
      key={props.product._id}
      className="Card1"
      style={{ width: "230px", height: "300px", marginBottom: "50px" }}
    >
      <CardMedia
        style={{ objectFit: "contain" }}
        component="img"
        height="100%"
        image={props.product.images[0]}
        alt="green iguana"
      />
      <CardContent className="Card1-content"
      >
        <Typography style={{fontWeight:"bold"}} gutterBottom variant="h7" component="div">
          {props.product.name}
        </Typography>
        <Typography className="product-info" style={{color:"white",textOverflow:"ellipsis"}} gutterBottom variant="h7" component="div">
          {props.product.price} E£
        </Typography>
        <Rating className="product-info" name="read-only" value={props.product.rating} readOnly />
        <Button
          className="product-info"
          style={{ width: "95%" }}
          variant="outlined"
          value={props.product._id}
          onClick={(e) => navigateTo(e)}
        >
          More Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default Products_Card;
