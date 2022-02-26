import Button from '@material-ui/core/Button';
import "./App.css";
import React from "react";
import { GoSearch, AiOutlineShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import NameContainer from './NameContainer'
import { FaWineGlassAlt, FiChevronDown } from "react-icons/all";
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "./Home.css";
import SignIn from './SignIn';
import Cart from './Cart';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react';

export default class Header extends React.Component {
  txt = React.createRef();

  constructor(props) {
    super(props);

    this.closeOrder = this.closeOrder.bind(this);
  }
  state = {

    showOrder: false,
    searchTerm: '',
    minPrice: null,
    maxPrice: null,
    Kosher: null,
    isSale: null,
    first: true,
    value: [0, 2000],
    Koshers: ['ללא הכשר', 'שארית', 'ירושלים', 'הרב לנדא', 'מחפוד'],
    typeProduct: "הכשר",
    openLoginWindow: false,
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  dynamiSearch = () => {
    return this.props.products.filter(x =>
      (!this.state.searchTerm || x.Name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) &&
      (!this.state.maxPrice || this.state.maxPrice <= 0 || ((x.SalePrice && x.SalePrice <= this.state.maxPrice) || (!x.SalePrice && x.Price <= this.state.maxPrice))) &&
      (!this.state.minPrice || this.state.minPrice <= 0 || ((x.SalePrice && x.SalePrice >= this.state.minPrice) || (!x.SalePrice && x.Price >= this.state.minPrice))) &&
      (!this.state.Kosher || x.kosherId) &&
      (!this.state.isSale || this.state.SalePrice)


    )
  }
  handleChange = (event, newValue) => {

    this.setState({ value: newValue, maxPrice: newValue[1], minPrice: newValue[0] });
    this.searc();
  };
  searc = () => {
    if (this.state.first) {
      this.dynamiSearch();
      this.setState({ first: false })
    }
  }
  pay = () => {

  }
  openLogin = () => {
    this.setState({ openLoginWindow: true })
  }
  closeOrder = () => {
    this.setState({ showOrder: false })
  }
  closeSignIn = () => {
    this.setState({ openLoginWindow: false })
  }
  logOut = () => {
    //צריך לאפס את המשתמש והעגלה
    // this.props.user
  }

  render() {
    // const style = {
    //   textDecoration: "none",
    //   color: 'black'
    // }
    return (
      <div id="app">
        <div id="header">

          <div id="logo"> <img src={logo} ></img></div>
          <div className="recomendedFilter">
            <div className="recContent first">
              <form className="wine wineFilter">
                <div className="column">
                  <div className="wineTypes">
                    <div className="current" onClick={() => { this.txt.current.style.display === "none" ? this.txt.current.style.display = "block" : this.txt.current.style.display = "none" }}>
                      <div className='type-prod'>{this.state.typeProduct}</div>
                      <FiChevronDown />
                    </div>
                    <div className='drop-down'><ul className="dropDown" ref={this.txt}>
                      {this.state.Koshers.map(x => <li onClick={() => { this.setState({ typeProduct: x }) }}>{x}</li>


                      )}

                    </ul>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <p >טווח מחירים</p>
                  <p className="amountTotal">
                    <input type="text" value={this.state.maxPrice} />
                    <i className="shekel sign icon"></i>
                    <input type="text" value={this.state.minPrice} />
                  </p>
                  <Slider
                    value={this.state.value}
                    onChange={this.handleChange}
                    min={0}
                    max={2000}
                    style={{ color: '#891826', width: '70%', padding: '5px 0px' }}

                    valueLabelDisplay="auto"
                  />
                </div>
                <div className="column">
                  <div className="checkboxFilter">
                    <FormControlLabel
                      style={{ margin: '0px' }}
                      control={<Checkbox
                        checked={this.state.isSale}
                        onChange={() => { this.setState({ isSale: !this.state.isSale }); this.searc() }} name="sale" />}
                      label="במבצע" />
                    <br />
                    {/* <FormControlLabel
                control={<Checkbox 
                  checked={this.state.Kosher}
                  onChange={()=>{this.setState({Kosher:!this.state.Kosher});this.searc()}} name="kasher" />}
                label="כשר" /> */}
                  </div>
                </div>
                {/* <div className="column">
            <button type="submit" className="searchButton"> חיפוש</button>
          </div> */}
              </form>

            </div>
          </div>




          <div className="search">
            <input value={this.state.searchTerm} onChange={this.editSearchTerm} id="searchInput" type="text" placeholder="חיפוש…" />
            <i id="searchIcon" ><GoSearch /></i>
          </div>
          <div className='card-icon'>
            <AiOutlineShoppingCart onClick={() => this.setState({ showOrder: !this.state.showOrder })} />
          </div>
          <div className='login-btn'>
            {this.props.user ? <button className='out' onClick={this.logOut}>{this.props.user.FirstName} / יציאה</button> : <button className='login-btn' onClick={this.openLogin}>הרשמה / התחברות</button>}
            {/* // <Link className='link' to="/user">הרשמה</Link>} */}
          </div>
        </div>
        {!this.state.first ? <NameContainer names={this.dynamiSearch()} /> : null}
        {this.state.openLoginWindow ? <SignIn closeSignIn={this.closeSignIn.bind(this)}></SignIn> : null}
        {this.state.searchTerm ? <NameContainer names={this.dynamiSearch()} /> : null}

        <ul id="nav" >
          {/* <li className="nav1"><Link className="linkall" to="/home">בית</Link></li> */}
          {/* {!this.props.user ? <li className="nav1"><Link className='link' to="/user">הרשמה</Link> </li> : null} */}
          <li className="nav1">יינות<ul>
            <li> <Link className='link' to="/product/-1">כל הינות</Link>   </li>
            <li> <Link className='link' to="/product/1">יין אדום</Link>   </li>
            <li> <Link className='link' to="/product/2">יין לבן</Link>   </li>
            <li> <Link className='link' to="/product/3">רוזה</Link>   </li>
            <li> <Link className='link' to="/product/4">מחוזק</Link>   </li>
          </ul> </li>


          <li className="nav1">אביזרים
            <div className='nav2'>

              <ul>
                <li> <Link className='link' to="/product/-2">כל האביזרים</Link>   </li>
                <li> <Link className='link' to="/product/5">כוסות יין </Link>   </li>
                <li> <Link className='link' to="/product/6">פותחן יין</Link>   </li>
                <li> <Link className='link' to="/product/7"> מעמד יין</Link>  </li>
                <li> <Link className='link' to="/product/8">מקרר יין</Link>   </li>
              </ul>
            </div>

          </li>
          <li className="nav1"><Link className='link' to="/product/9">מתנות</Link> </li>
          <li className="nav1"><Link className='link' to="/recipe/0">מתכונים</Link> </li>
          <li className="nav1"><Link className='link' to="/questionnaire">שאלון היין</Link> </li>
        </ul>
        {this.state.showOrder ?
          <div className='order-show'>
            <Cart ordersShow={this.props.ordersShow} closeOrder={this.closeOrder.bind(this)}></Cart>
          </div> : null}

      </div>
    );
  }

}

