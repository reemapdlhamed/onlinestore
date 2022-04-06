import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
function Products_Card(props) {



  return (
    <Card style={{width:"300px",height:"350px",marginBottom:"50px",backgroundColor:"#F4F9F9"}}>
      <CardMedia
        style={{objectFit:"fill"}}
        component="img"
        height="70%"
        image={props.product.image}
        alt="green iguana"
      />
      <CardContent
        style={{border:"1px solid #eee",height:"30%"}}
      >
        <Typography gutterBottom variant="h7" component="div">
          {props.product.title}
        </Typography>
      </CardContent>
      
    </Card>
  )
}

export default Products_Card;