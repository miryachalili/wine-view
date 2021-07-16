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
      
       <ul id="nav">
       
         <li className="nav1">  <Link to="/home">בית</Link></li>
         <li className="nav1"><Link to="/user">הרשמה</Link> </li>
         <li className="nav1"><Link to="/recipe">מתכונים</Link> </li>
         <li className="nav1"><Link to="/product">מוצרים</Link> </li>
         <li className="nav1"><Link to="/questionnaire">שאלון היין</Link> </li>

       </ul>
    <Switch>
      <Route path="/user"> <User/> </Route>
      <Route path="/home"> <Home/>  </Route>
      <Route path="/recipe"> <Recipe/>  </Route>
      <Route path="/product"> <Product/>  </Route>
      <Route path="/questionnaire"> <Questionnaire/>  </Route>
      <Route exact path="/"> <Home/> </Route>
      <Route  path="/"> <p>not finde!!</p></Route>

   </Switch>
   <p>akuoooo</p>
   </div>
  );
}

export default App;
