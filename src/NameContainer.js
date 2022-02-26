import { Component } from "react";

export default class NameContainer extends Component {
    openProd = () => {

    }
    render() {

        return (
            <div className="name-search">
                {this.props.names.map(name => <div><button className="name-btn" onClick={this.openProd}><img className="img-search" src={`data:image/jpeg;base64,${name.img}`} /> {name.Name}</button></div>
                )}
            </div>
        )

    }
}