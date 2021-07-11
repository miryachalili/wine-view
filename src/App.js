import User from './User';
import Home from './Home';
import Recipe from './Recipe';
import Product from './Product';
import Questionnaire from './Questionnaire';

import "./App.css"
import {Link,Route,Switch} from "react-router-dom";
function App() {
  return (
    <div id="app">
       <nav id="nav">
         <p className="nav1">  <Link to="/home">בית</Link></p>
         <p className="nav1"><Link to="/user">הרשמה</Link> </p>
         <p className="nav1"><Link to="/recipe">מתכונים</Link> </p>
         <p className="nav1"><Link to="/product">מוצרים</Link> </p>
         <p className="nav1"><Link to="/questionnaire">שאלון היין</Link> </p>

       </nav>
    <Switch>
      <Route path="/user"> <User/> </Route>
      <Route path="/home"> <Home/>  </Route>
      <Route path="/recipe"> <Recipe/>  </Route>
      <Route path="/product"> <Product/>  </Route>
      <Route path="/questionnaire"> <Questionnaire/>  </Route>
      <Route exact path="/"> <Home/> </Route>
      <Route  path="/"> <p>not finde!!</p></Route>
   </Switch>
   </div>
  );
}

export default App;
