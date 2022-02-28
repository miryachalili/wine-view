import React from 'react';
import { Link } from "react-router-dom";
import axios  from "axios";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail:"",
            pass:""
        }
        // this.close = this.close.bind(this);
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {

    }
    componentWillUnmount() {

    }
    changemail = (e) => {
        this.setState({mail:e.target.value});
    }
    changepass = (e) => {
        this.setState({pass:e.target.value});
    }
    SignIn= () => {   
        axios.post(`http://localhost:62979/api/users?mail=${this.state.mail}&password=${this.state.pass}`).then(x =>{        
          this.props.setUser(x.data)
              alert("welcome");
           
        }).catch(x=>{ alert("error")})
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
                    onKeyUp={this.changemail}
                // type={x.config.type==="password"&&this.state.showPassword?"text": x.config.type}
                // value={x.config.value}
                // placeholder={ x.config.lable} 
                // onChange={(event)=>{this.change(event,x.key)}}
                />
                <input className="pass"
                    placeholder='סיסמה'
                    onKeyUp={this.changepass}
                    
                // type={x.config.type==="password"&&this.state.showPassword?"text": x.config.type}
                // value={x.config.value}
                // placeholder={ x.config.lable} 
                // onChange={(event)=>{this.change(event,x.key)}} 
                />
                <button className='btn-login' onClick={this.SignIn}>כניסה</button>
                {this.state.mail}
                {this.state.pass}
                <div className='link-sign-in'>
                    <Link className='link' to="/user">הרשמת לקוח חדש</Link>

                </div>

            </div>
            // </div>
        )



    }
}
