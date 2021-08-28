import "./App.css";
import React from "react";
import { GoSearch } from "react-icons/go";
import {Link} from "react-router-dom";
import logo from "./images/logo.jpg";

 export default class Header extends React.Component {
   
 render() { 
     
   const style={
      textDecoration:"none",
      color:'black'
   }
  return (
    <div id="app">
       <div id="header">
         <div id="logo"> <img src={logo} ></img></div>
          
           <div className="search">
              <input id="searchInput" type="text" placeholder="חיפוש…" />
              <i onClick={()=>alert('fff')} id="searchIcon" ><GoSearch/></i>
           </div>
       </div>
     
 <ul id="nav" >
 <li className="nav1"><Link className="linkall" to="/home">בית</Link></li>
 <li className="nav1"><Link style={style} to="/user">הרשמה</Link> </li>
 <li className="nav1"><Link style={style} to="/recipe/0">מתכונים</Link> </li>
 <li className="nav1" ><Link style={style} to="/product/0">מוצרים</Link></li>
 {/* <div className="bloced" ><Link  style={style} to="/product/1">רוזן</Link> 
 <Link style={style} to="/product/2">מתוק</Link></div> </li> */}
 <li className="nav1"><Link style={style} to="/questionnaire">שאלון היין</Link> </li>
</ul>
    
  </div>
    );
 }

}

