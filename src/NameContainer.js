import { Component } from "react";

export default class  NameContainer extends Component{
   render(){
    return(
        <div>
           {this.props.names.map(name=><div>{name.Name}</div>)}

        </div>
    )

   }
}