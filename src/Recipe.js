import React from "react";
import "./Recipe.css";
import { Link, withRouter } from 'react-router-dom'
import axios from "axios";
import img1 from './images/בשרי.png';
import img2 from './images/חלבי.png';
import img3 from './images/פרווה.png';
import img4 from './images/קינוח.png';
import img5 from './images/ספרמתכונים.png';
import SimpleImageSlider from "react-simple-image-slider";

 class Recipe extends React.Component {
  state = {
    recipes: [],
    urlNumber: 0,
    images :[]
  }
  componentDidUpdate() {
    if (this.state.urlNumber !== this.props.match.params.id) {
      this.setState({ urlNumber: this.props.match.params.id ,images:[]}) 
      this.getRecipes(this.props.match.params.id,this.state.images) 
    }
  }
  getRecipes= (number) => {   
    axios.get(`http://localhost:62979/api/Recipe?number=${number}`).then(x => {
      console.log(x)
      const images=[];
      x.data.forEach(x => { images.push( {url:'../images/'+x.ImageUrl})})
      console.log(images)
      this.setState({ recipes: x.data,images:images })   
    }).catch(x => { console.log(x) }).finally(() => { });
  }
  componentDidMount() {
    this.setState({ urlNumber: this.props.match.params.id }) 
    this.getRecipes(this.props.match.params.id)

  }
  render() {
    return (
      <div>
      <div className="recipeFile">
         < div className="silderRecipe">
         {this.state.images&&this.state.images.length?
          <SimpleImageSlider
            width={600}
            height={400}
            // style={{ direction: 'rtl' }}
            images={this.state.images}
            showBullets={true}
            showNavs={true} 
            />:<img src={img5}/>}
        </div>
        <div className="listRecipe">
           <Link className="link" to="/recipe/1"> <img src={img1} ></img>
             למתכונים הבשריים</Link>
             <Link className="link" to="/recipe/2"> <img src={img2} onClick={()=>{ this.props.history.push("2") }}></img> 
            למתכונים החלביים</Link>
            <Link className="link" to="/recipe/3">  <img src={img3}onClick={()=>{this.props.history.push("3")}}></img>
            למתכונים הפרווה</Link>
            <Link className="link" to="/recipe/4">  <img src={img4}onClick={()=>{this.props.history.push("4")}}></img>
         לקינוחי היין</Link>
       </div>
     
        </div>
    
      </div>
    );
  }
}
export default withRouter(Recipe)
