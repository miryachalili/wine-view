import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Product.css'
export default function ShowProduct(props)  {

         
       return  <div className="card"> 
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width="20px"
          image={`data:image/jpeg;base64,${props.product.img}`}
        />
        {/* <CardContent> */}
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.product.Price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.product.Description}
          </Typography>
        {/* </CardContent> */}
      </CardActionArea>
      <CardActions>
         {!props.product.qentity?<Button size="small" color="primary" onClick={()=>{props.addToOrder(props.product.Id,1)}}>
         הוסף לסל
        </Button>:(
        <><Button size="small" color="primary" onClick={() => { props.addToOrder(props.product.Id, -1); } }>
                        הורד </Button>{props.product.qentity}<Button size="small" color="primary" onClick={() => { props.addToOrder(props.product.Id, 1); } }>
                          הוסף </Button></>  )}
      </CardActions>
      </Card> 
   </div>
}
     
     
    



 