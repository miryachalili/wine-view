import React, { useState, } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'

class Product extends React.Component {

    state = {
        products: [],
        urlNumber: 4,
        file:null,
        imageSow:[]
    }
    componentDidUpdate() {
        if (this.state.urlNumber !== this.props.match.params.id) {
            this.setState({ urlNumber: this.props.match.params.id })
            this.getProudct()
        }
    }
    getProudct = () => {
        axios.get(`http://localhost:62979/api/Products?number=${this.state.urlNumber}`).then(x => {
            console.log(x.data)
          //  alert(x.data.length);
            this.setState({ products: x.data })

        }).catch(x => { console.log(x) }).finally(() => { });
    }

    componentDidMount() {
        // const number = this.props.match.params.id;
        this.setState({ urlNumber: this.props.match.params.id })
        //     console.log(  this.props.match.params.id )
        //   console.log(  this.props)
        this.getProudct()
       }       
       
       setFile =(e)=>{

          this.setState( {file:e.target.files[0]});
        }
    sendFile=()=>{
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
        let data = new FormData();
        data.append('image', this.state.file);
        axios.post("http://localhost:62979/api/Image?id=6",data,config).then(x=>{
        console.log(x) ;
               this.setState({imageSow:x.data})
        })
        .catch(x=>console.log(x))
    }
    render() {

        return (<>
            <h3>product</h3>
            {this.state.products.map(x => <div key={x.Id}>{x.Description}
                <img src={`data:image/jpeg;base64,${x.img}`} /> 
            </div>)}
            <input type="file" onChange={e =>this.setFile(e)}/>
            <img src={`data:image/jpeg;base64,${this.state.imageSow}`} /> 
<button onClick={this.sendFile} />
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
export default withRouter(Product)