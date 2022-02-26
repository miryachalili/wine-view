import { Component } from "react";

export default class  NameContainer extends Component{
   render(){
    return(
        <div className="name-search">
           {this.props.names.map(name=><div><button className="name-btn">{name.Name}</button></div>)}

        </div>
    )

   }
}