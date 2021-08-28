import User from './User';
import Home from './Home';
import Recipe from './Recipe';
import Product from './Product';
import Questionnaire from './Questionnaire';

import {Route,Switch} from "react-router-dom";
function Routers()
{
    return (
<Switch>
<Route path="/user"> <User/> </Route>
<Route path="/home"> <Home/>  </Route>
<Route path="/recipe/:id"> <Recipe/>  </Route>
<Route path="/product/:id"> <Product/>  </Route>
<Route path="/questionnaire"> <Questionnaire/>  </Route>
<Route exact path="/"> <Home/> </Route>
<Route  path="/"> <p>not finde!!</p></Route>
</Switch>
    );
}
export default Routers;
