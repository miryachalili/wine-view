import React, { useState } from "react";
import "./Recipe.css";
import { withRouter } from 'react-router-dom'
import {Link} from "react-router-dom";

import axios from "axios";
//להכניס לsql;
import img1 from './images/בשרי.jpg';
import img2 from './images/חלבי.jpg';
import img3 from './images/פרווה.jpg';
import img4 from './images/קינוח.jpg';

import SimpleImageSlider from "react-simple-image-slider";

 class Recipe extends React.Component {
  state = {
    recipes: [],
    urlNumber: 1
  }
  componentDidUpdate() {
    if (this.state.urlNumber !== this.props.match.params.id) {
      this.setState({ urlNumber: this.props.match.params.id })
      this.getRecipes()
    }
  }
  getRecipes= () => {
    axios.get(`http://localhost:62979/api/Recipes?number=${this.state.urlNumber}`).then(x => {
      alert(x.data.length);
      this.setState({ recipes: x.data })

    }).catch(x => { console.log(x) }).finally(() => { });
  }

  componentDidMount() {
    const number = this.props.match.params.id;
    this.setState({ urlNumber: this.props.match.params.id })
    this.getRecipes()
   
  }
  render() {
    const images = [
      { url: "http://localhost:3000/static/media/%D7%91%D7%A9%D7%A8%D7%99.bf2b288e.jpg" },
      { url: "http://localhost:3000/static/media/%D7%97%D7%9C%D7%91%D7%99.da0929f3.jpg" },
      { url: "http://localhost:3000/static/media/%D7%A4%D7%A8%D7%95%D7%95%D7%94.651a5036.jpg" },
      { url: "http://localhost:3000/static/media/%D7%A7%D7%99%D7%A0%D7%95%D7%97.7fcd6008.jpg" },
    ];

    return (
      <div>
        <div className="listRecipe">
          <div>
            <img src={img1} onClick={()=>{this.props.history.push("2")}}></img>
             {/* <div><Link  to="/recipe/1">למתכונים הבשריים</Link></div> */}
            <img src={img2}></img> 
            {/* <div><Link  to="/recipe/1">למתכונים חלביים</Link></div> */}

          </div>
        
          <div>
            <img src={img3}></img>
            <img src={img4}></img>
            </div>
        </div>
        <div className="silderRecipe">
          <SimpleImageSlider
            width={500}
            height={420}
            style={{ margin: '0 auto', marginTop: '20px' }}
            images={images}
            showBullets={true}
            showNavs={true} />
        </div>


      </div>
    );
  }

}
export default withRouter(Recipe)
