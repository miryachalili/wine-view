import React from "react";
import { FaWineGlassAlt, FiChevronDown } from "react-icons/all";
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import img1 from './images/img01.jpg';
import img2 from './images/img02.jpg';
import img3 from './images/img03.jpg';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [img1, img2, img3],
      currentImage: 0,
      min: 0,
      max: 600,
      value: [0, 600]
    };
  }

  getRandomImageId() {
    let { currentImage } = this.state;
    currentImage++;
    if (currentImage > 2) {
      currentImage = 0;
    }
    console.log(this.state.currentImage);
    this.setState({ currentImage });
    return this.state.currentImage
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentImage: this.getRandomImageId() });
    }, 5000);
  }

  render() {
    const handleChange = (event, newValue) => {
      this.setState({ value: newValue });
      this.setState({ max: newValue[1] });
      this.setState({ min: newValue[0] });

    };


    return (<>
      <div id="rotatingImg">
        <img src={this.state.images[this.state.currentImage]} ></img>
      </div>
      <div className="filtersFile">
        <div className="filtersSelector">
          <div className="button active"> <span> חיפוש יין</span><FaWineGlassAlt /> </div>
          <div className="button "> <span>חיפוש אביזר יין</span></div>
        </div>
        <form className="filter" >
          <div className="column">
            <div>הכל</div>
            <FiChevronDown />
          </div>
          <div className="column">
            <label >טווח מחירים</label>
            <p className="amountTotal">
              <input type="text" value={this.state.max} />
              <i className="shekel sign icon"></i>
              <input type="text" value={this.state.min} />
            </p>
            <Slider
              value={this.state.value}
              onChange={handleChange}
              min={0}
              max={600}
              style={{ color: '#891826' }}
              valueLabelDisplay="auto"

            />
          </div>
          <div className="column">
            <div className="checkboxFilter">
              <FormControlLabel
                control={<Checkbox /*checked={gilad} onChange={handleChange}*/ name="sale" />}
                label="במבצע" />
              <FormControlLabel
                control={<Checkbox /*checked={gilad} onChange={handleChange}*/ name="kasher" />}
                label="כשר" />
            </div>
          </div>
          <div className="column">
            <button type="submit" className="searchButton"> חיפוש</button>
          </div>
        </form>

      </div>






    </>
    );
  }

}
