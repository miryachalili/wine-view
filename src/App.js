import User from './User';
import Home from './Home';
import Recipe from './Recipe';
import Product from './Product';
import Questionnaire from './Questionnaire';
import logo from "./images/logo.jpg";
import { GoSearch } from "react-icons/go";

import "./App.css"
import {Link,Route,Switch} from "react-router-dom";

function App() { 
  const style={
       textDecoration:"none",
       color:'black'
    }

  //  const arr=[{id:"8",name:"בני ברק"}];
  return (
    <div id="app">
      <div id="header">
         <img src={logo} ></img>
          <div className="search">
              <input id="searchInput" type="text" placeholder="חיפוש…" />
              <i onClick={()=>alert('fff')} id="searchIcon" ><GoSearch/></i>
              
      </div>
      </div>
     
     {/* <select>
     {arr.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}
     </select> */}
     <ul id="nav">
       <li className="nav1"><Link style={style} to="/home">בית</Link></li>
       <li className="nav1"><Link style={style} to="/user">הרשמה</Link> </li>
       <li className="nav1"><Link style={style} to="/recipe">מתכונים</Link> </li>
       <li className="nav1"><Link style={style} to="/product">מוצרים</Link> </li>
       <li className="nav1"><Link style={style} to="/questionnaire">שאלון היין</Link> </li>
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
     <div id="endPage">
          <span> אזהרה :מכיל אלכוהול יש להמנע משתייה מופרזת</span>
     </div>
    
   </div>
  );
}

export default App;
