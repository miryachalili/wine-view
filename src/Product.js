import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'

import ShowProduct from './showProduc'

import './Product.css'
class Product extends React.Component {

  state = {
    urlNumber: 4,
    file: null,
    imageSow: [],
    productMinPrice: 0,
    productMaxPrice: 0,
    Text: "",
    IsSale: false
  }
  componentDidUpdate() {
    if (this.state.urlNumber !== this.props.match.params.id) {
      this.setState({ urlNumber: this.props.match.params.id })
      this.getProudct(this.props.match.params.id)
    }
  }
  getProudct = (urlNumber) => {
    axios.get(`http://localhost:62979/api/Products?number=${urlNumber}`).then(x => {
      var list = JSON.parse(localStorage.getItem("order")) //קבלת המוצרים בצורת מחרוזת וממיר לאובייקט
      list?.forEach(element => {
        if (x.data.find(x => x.Id == element.ptoId))
          x.data.find(x => x.Id == element.ptoId).qentity = element.qentity;
      });
      this.props.setProductsShow(x.data)
      /// לעדכן את כל הרשימה של המוצרים עם הם קיימים בסל
    }).catch(x => { console.log(x) }).finally(() => { });
  }
  componentDidMount() {
    this.setState({ urlNumber: this.props.match.params.id })
    this.getProudct(this.props.match.params.id)
  }
  setFile = (e) => {
    this.setState({ file: e.target.files[0] });
  }
  sendFile = () => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    let data = new FormData();
    data.append('image', this.state.file);
    axios.post("http://localhost:62979/api/Image?id=7", data, config).then(x => {
      console.log(x);
      this.setState({ imageSow: x.data })
    })
      .catch(x => console.log(x))
  }
  render() {

    return (<div>
      {/* <input type="file" onChange={e =>this.setFile(e)}/>
            <img src={`data:image/jpeg;base64,${this.state.imageSow}`} /> 
            <button onClick={this.sendFile} />  */}
      <h3>product</h3>
      <div className="warpper">
        {this.props.productsShow.map(x => {
          if ((!this.state.productMaxPrice || x.Price < this.state.productMaxPrice) &&
            (!this.state.productMinPrice || x.Price > this.state.productMinPrice) &&
            (!this.state.Text || x.Name.toLowerCase().includes(this.state.Text.toLowerCase())
              // (!this.state.IsSale)
            )) {
            return <div key={x.Id} className="card">
              <ShowProduct addToOrder={this.props.addToOrder} product={x} />
            </div>
          }
        })}
      </div>
    </div>
    );
  }

}
export default withRouter(Product)