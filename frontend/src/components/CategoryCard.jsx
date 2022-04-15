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
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductsList, selectGategory } from '../redux/action/Products';
import "../pages/Products/Products.css";
function CategoryCard(props) {
    const dispatch = useDispatch();
    const history = useHistory();
  function changeCategory(id){
      console.log(id)
    dispatch(selectGategory(id))
        history.push('/products')
  }
  return (
    <div className="category-card" onClick={()=>changeCategory(props.category._id)}>
        <img src={props.category.bannerImage} alt="name"></img>
        <div><h1>{props.category.name}</h1></div>
    </div>
  );
}

export default CategoryCard;