import { Component } from "react";

export default class NameContainer extends Component {
    openProd = () => {

   }
   render(){
        return (
            <div className="name-search">
                {this.props.names.map(name => <div className="search-item"><div className="name-btn-d" onClick={this.openProd}><img className="img-search" src={`data:image/jpeg;base64,${name.img}`} /> {name.Name}</div><button className="name-btn" onClick={this.openProd}>הוסף לסל </button></div>
                )}
            </div>
        )

    }
}