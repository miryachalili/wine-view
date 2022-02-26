import React from 'react';
import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // this.close = this.close.bind(this);
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {

    }
    componentWillUnmount() {

    }


    render() {



        return (
            // <div className='login-window'>
            <div class="comment__bubble arrow">
                <div className='close'>
                    <button className='close-btn' onClick={this.props.closeSignIn}>x</button>
                    <h3> כניסת לקוח קיים</h3>
                </div>
                <input className="user-name"
                    placeholder='שם משתמש'
                // type={x.config.type==="password"&&this.state.showPassword?"text": x.config.type}
                // value={x.config.value}
                // placeholder={ x.config.lable} 
                // onChange={(event)=>{this.change(event,x.key)}}
                />
                <input className="pass"
                    placeholder='סיסמה'
                // type={x.config.type==="password"&&this.state.showPassword?"text": x.config.type}
                // value={x.config.value}
                // placeholder={ x.config.lable} 
                // onChange={(event)=>{this.change(event,x.key)}} 
                />
                <button className='btn-login'>כניסה</button>
                <div className='link-sign-in'>
                    <Link className='link' to="/user">הרשמת לקוח חדש</Link>

                </div>

            </div>
            // </div>
        )



    }
}
