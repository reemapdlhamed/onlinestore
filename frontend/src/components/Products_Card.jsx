import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import "../pages/Products/Products.css";
import { Rating } from "@mui/material";
import { useHistory } from "react-router-dom";

function Products_Card(props) {
  const history = useHistory();

  const navigateTo = (e) => {
    console.log(e.target.value);
    history.push(`/products/${e.target.value}`);
  };

  return (
    <Card
      className="Card1"
      style={{ width: "300px", height: "400px", marginBottom: "50px" }}
    >
      <CardMedia
        style={{ objectFit: "contain" }}
        component="img"
        height="60%"
        image={props.product.images[0]}
        alt="green iguana"
      />
      <CardContent
        style={{
          border: "1px solid #eee",
          height: "40%",
          backgroundColor: "#F4F9F9",
        }}
      >
        <Typography gutterBottom variant="h7" component="div">
          {props.product.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {props.product.price} $
        </Typography>
        <Rating name="read-only" value={props.product.rating} readOnly />
        <Button
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
