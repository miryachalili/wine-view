import React from "react";
import "./User.css";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import TasteView from "./TasteView";

class Taste extends React.Component {

    state = {
        tastes: []

    }
    componentDidUpdate(prevProps,prevState) {
        console.log(this.props.type)
        if(this.props.type!=prevProps.type){
        axios.get(`http://localhost:62979/api/Taste?typeId=${this.props.type}`).then(x => {
            console.log(x.data,this.props.type)
            this.setState({ tastes: x.data })
        }).catch(x => { console.log(x) })
    }
    }
    componentDidMount() {
        console.log(this.props.type)
        axios.get(`http://localhost:62979/api/Taste?typeId=${this.props.type}`).then(x => {
            console.log(x.data,this.props.type)
            this.setState({ tastes: x.data })
        }).catch(x => { console.log(x) })
    }
    render() {
        return (
            <>
            {this.props.type===4?<TasteView t={null} ProductTypeId={this.props.type} 
                addToOrder={this.props.addToOrder}
                 setProductsShow={this.props.setProductsShow} />:
                this.state.tastes.map(y => <TasteView t={y} ProductTypeId={this.props.type} 
                addToOrder={this.props.addToOrder}
                 setProductsShow={this.props.setProductsShow} />)}


            </>
        )
    }
}

export default withRouter(Taste)