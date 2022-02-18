import User from './User';
import Home from './Home';
import Recipe from './Recipe';
import Product from './Product';
import Questionnaire from './Questionnaire';
import {Route,Switch} from "react-router-dom";
function Routers(props)
{
    return (
<Switch>
<Route path="/user"> <User setUser={props.setUser}/> </Route>
<Route path="/home"> <Home/>  </Route>
<Route path="/recipe/:id"> <Recipe/>  </Route>
<Route path="/product/:id"> <Product addToOrder={props.addToOrder} 
productsShow={props.productsShow}
setProductsShow={props.setProductsShow}
/>  </Route>
<Route path="/questionnaire"> <Questionnaire  addToOrder={props.addToOrder}
                 setProductsShow={props.setProductsShow} />  </Route>

<Route exact path="/"> <Home/> </Route>
<Route  path="/"> <p>not finde!!</p></Route>
</Switch>
    );
}
export default Routers;
