import { Component } from "react";

export default class  NameContainer extends Component{
   render(){
      console.log(this.props)
    return(
        <div>
           {this.props.names.map(name=><div>{name.Name}</div>)}

        </div>
    )

   }
}