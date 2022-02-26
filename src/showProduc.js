import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import './Product.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 240,
    width: 257
  },
  name: {
    fontSize: '20px',
    textAlign: 'center',
    height: '45px'
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  description:{
    height: '210px',
    padding: '0px 5px',
  },
  btn1: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: '5px'
  },
  btn: {
    padding: '0px',
    margin: '0px',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 0
  }
})
export default function ShowProduct(props)  {
  
  const classes = useStyles();

         
       return   <div className="card"> 
     <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <CardMedia
          component="img"
          height="100%"
          width="20"
          image={`data:image/jpeg;base64,${props.product.img}`}
          className={classes.media}
        />
        {/* <CardContent> */}
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            {props.product.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
          {props.product.Price}<p>₪</p>         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {props.product.Description}
          </Typography>
        {/* </CardContent> */}
      </CardActionArea>
      <CardActions>
         {!props.product.qentity?<Button size="small" color="primary" onClick={()=>{props.addToOrder(props.product.Id,1)}}>
         הוסף לסל
        </Button>:(
          <div className={classes.btn1}>
        <><Button size="small" color="primary" className={classes.btn} onClick={() => { props.addToOrder(props.product.Id, -1); } }>
                        - </Button>
          {props.product.qentity}<Button size="small" color="primary" className={classes.btn} onClick={() => { props.addToOrder(props.product.Id, 1); } }>
                          + </Button></> </div> )}
      </CardActions>
      </Card> 
   </div>
}
     
     
    



 