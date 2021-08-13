import React from "react";
import axios  from "axios";

export default class Product extends React.Component {


    componentDidMount()
    {
       axios.get("http://localhost:62979/api/Users").then(x=>{
           console.log(x.data)
           alert(x.data.length);
           
        }).catch(x=>{}).finally(()=>{});
    }
    render() {

        return (<>
            <h3>product</h3>
           {/* <div>
                {
               this.state.arr.map((item, index) => {
                         return <Square key={index} ind={index} myContent={item} toggloFunc={this.toggle} />;
                    })}
            </div> */}
            </>
        );
    }

}
