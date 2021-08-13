import User from './User';
import Home from './Home';
import Recipe from './Recipe';
import Product from './Product';
import Questionnaire from './Questionnaire';


import "./App.css"
import {Link,Route,Switch} from "react-router-dom";
function App() { 
  const style={
       textDecoration:"none",
       color:'black'
    }
  return (
    <div id="app">
     <div className="headerMainContainer">
       <div className="logo">
       </div>
       <div className="search">
              <input id="searchInput" type="text" placeholder="חיפוש…" />
              <i id="searchIcon" >icon</i>
      </div>
     </div>
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
