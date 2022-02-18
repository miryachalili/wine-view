import Button from '@material-ui/core/Button';
import "./App.css";
import React from "react";
import { GoSearch, AiOutlineShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import axios from "axios";
import NameContainer from './NameContainer'
export default class Header extends React.Component {
  state = {
    showOrder: false,
    searchTerm: '',
  }
  
  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  dynamiSearch = () => {
    return this.props.products.filter(name => name.Name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
pay=()=>{
  
}
   
  render() {
    const style = {
      textDecoration: "none",
      color: 'black'
    }
    return (
      <div id="app">
        <div id="header">
          <div id="logo"> <img src={logo} ></img></div>
          <div className="search">
            <input value={this.state.searchTerm} onChange={this.editSearchTerm} id="searchInput" type="text" placeholder="חיפוש…" />
            <i id="searchIcon" ><GoSearch /></i>
          </div>
          <AiOutlineShoppingCart onClick={() => this.setState({ showOrder: !this.state.showOrder })} />

          {this.props.user ? <p>{this.props.user.FirstName}</p> : <p>הרשמה/התחברות</p>}
        </div>
        {this.state.searchTerm ? <NameContainer names={this.dynamiSearch()} /> : null}

        <ul id="nav" >
          <li className="nav1"><Link className="linkall" to="/home">בית</Link></li>
          {!this.props.user ? <li className="nav1"><Link style={style} to="/user">הרשמה/התחברות</Link> </li> : null}
          <li className="nav1">יינות<ul>
            <li> <Link style={style} to="/product/-1">כל הינות</Link>   </li>
            <li> <Link style={style} to="/product/1">יין אדום</Link>   </li>
            <li> <Link style={style} to="/product/2">יין לבן</Link>   </li>
            <li> <Link style={style} to="/product/3">רוזה</Link>   </li>
            <li> <Link style={style} to="/product/4">מחוזק</Link>   </li>

          </ul> </li>


          <li className="nav1">אביזרים
            <ul>
              <li> <Link style={style} to="/product/-2">כל האביזרים</Link>   </li>
              <li> <Link style={style} to="/product/5">כוסות יין </Link>   </li>
              <li> <Link style={style} to="/product/6">פותחן יין</Link>   </li>
              <li> <Link style={style} to="/product/7"> מעמד יין</Link>  </li>
              <li> <Link style={style} to="/product/8">מקרר יין</Link>   </li>
            </ul>
          </li>
          <li className="nav1"><Link style={style} to="/product/9">מתנות</Link> </li>
          <li className="nav1"><Link style={style} to="/recipe/0">מתכונים</Link> </li>
          <li className="nav1"><Link style={style} to="/questionnaire">שאלון היין</Link> </li>
        </ul>
        {this.state.showOrder ?
        <div>
         { this.props.ordersShow.map(x => <div key={x.ptoId}> {x.qentity}|{x.Name} ({x.Price}) סה"כ: {x.qentity*x.Price}
           {/* {!x.qentity?<Button size="small" color="primary" onClick={()=>{this.props.addToOrder(x.Id,1)}}>
         הוסף לסל
        </Button>:(
        <><Button size="small" color="primary" onClick={() => { this.props.addToOrder(x.Id, -1); } }>
                        הורד </Button><Button size="small" color="primary" onClick={() => { this.props.addToOrder(x.Id, 1); } }>
                          הוסף </Button></>  )} */}
          
          </div>)}
          נקודות זיכוי :{this.props.user?.points}
        <button onClick={this.pay}>לתשלום</button>  {this.props.ordersShow.reduce((partialSum, a) =>partialSum+ a.qentity*a.Price , 0)}

          </div> : null}
      </div>
    );
  }

}

