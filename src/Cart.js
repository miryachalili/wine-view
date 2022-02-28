import React from 'react';
import "./Cart.css";
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import axios  from 'axios';
export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // close: true,
        }
        // this.closeCart = this.closeCart.bind(this);
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {

    }
    componentWillUnmount() {

    }
    // deleteProd = (id) =>{
    //     console.log("kk", id)
    //     this.props.ordersShow.map(x =>{
    //         if(x.Id == id){
    //             this.props.ordersShow.splice(x)
    //         }
    //     })
    //     console.log("ffkk", id)

    // }
    pay=()=>{
        if(this.props.user)
    {
       const sum= this.props.ordersShow.reduce((partialSum, a) => partialSum + a.qentity * a.Price, 0);
       if(sum>=500)
       { 
         sum-=(sum*0.5);
         alert( )
       }
       axios.post(`http://localhost:62979/api/users?id=${this.props.user.Id}&points=${sum*0.1}`).then(x =>{        
      
         //נעשה הנחה של 50% מסך הקנייה ונאפס את הנקודות של המשתמש
         
        }).catch(x=>{ })     

    }
    else{
      alert("הרשם/התחבר למערכת")
    }
    }

    render() {
        return (
            <div className='cart'>
                <div className='header-close'>
                    <button className='close-btn' onClick={this.props.closeOrder}>x</button>
                    <h3>עגלת קניות</h3>
                </div>
                <div className='order-detailes'>
                    <Container className='grid'>
                        <Row className='header-row'>
                            <Col sm={2}>
                                <div className='header-grid'>
                                    <p>כמות</p>
                                </div>
                            </Col>
                            <Col sm={7}>
                                <div className='header-grid'>
                                    <p>שם פריט</p>
                                </div>
                            </Col>
                            {/* <Col sm={1}>
                                <div className='header-grid'>
                                    <p>הסר</p>
                                </div>
                            </Col> */}
                            <Col sm={2}>
                                <div className='header-grid'>
                                    <p>סה"כ</p>
                                </div>
                            </Col>
                        </Row>
                        {this.props.ordersShow.map(x => <div key={x.Id}>
                            <Row className='body-row'>
                                <Col sm={2}>
                                    <div className='body-col'>
                                        <p>{x.qentity}</p>
                                    </div>
                                </Col>
                                <Col sm={7}>
                                    <div className='body-col'>
                                        <p>{x.Name}</p>
                                    </div>
                                </Col>
                                {/* <Col sm={2}>
                                    <div className='body-col'>
                                        <p ><Button className='x-btn' onClick={this.deleteProd(x.Id)}>X</Button></p>
                                    </div>
                                </Col> */}
                                <Col sm={2}>
                                    <div className='body-col'>
                                        <p>₪{x.qentity * x.Price}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>)}
                    </Container>
                </div>
                <div>
                    {this.props.user?.points ? <div className='credits'>
                        <p>נקודות זיכוי :</p>
                        <p>{this.props.user?.points}</p>
                    </div> : null}
                </div>
                <div className='pay'>
                    <button className='pay-btn' onClick={this.pay}>לתשלום {this.props.ordersShow.reduce((partialSum, a) => partialSum + a.qentity * a.Price, 0)} ₪</button>
                </div>
            </div>
        )
    }
}
