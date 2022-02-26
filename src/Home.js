import React from "react";
import { FaWineGlassAlt, FiChevronDown } from "react-icons/all";
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "./Home.css";

import img1 from './images/img01.jpg';
import img2 from './images/img02.jpg';
import img3 from './images/img03.jpg';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.txt=React.createRef();
    this.bActive=React.createRef();
    this.b=React.createRef();
    this.state = {
      images: [img1, img2, img3],
      currentImage: 0,
      min: 0,
      max: 600,
      value: [0, 600],
      show:false,
      wines:['יין אדום','יין לבן','מחוזק',' רוזה'],
      toolWine:[],
      typeProduct:"הכל"
    };
  }

  getRandomImageId() {
    let { currentImage } = this.state;
    currentImage++;
    if (currentImage > 2) {
      currentImage = 0;
    }
    this.setState({ currentImage });
    return this.state.currentImage
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentImage: this.getRandomImageId() });
    }, 5000);
  }
  func1=()=>{
     this.bActive.current.style.backgroundColor="white";
     this.bActive.current.style.color="black";
     this.b.current.style.backgroundColor="#891826";
     this.b.current.style.color="white";

  }
  func2=()=>{
    this.bActive.current.style.backgroundColor="#891826";
    this.bActive.current.style.color="white";
    this.b.current.style.backgroundColor="white";
    this.b.current.style.color="black";

 }
  render() {
    const handleChange = (event, newValue) => {
      this.setState({ value: newValue });
      this.setState({ max: newValue[1] });
      this.setState({ min: newValue[0] });

    };


    return (
      <div id="rotatingImg">
        <img src={this.state.images[this.state.currentImage]} ></img>
      </div>         
    );
  }

}
