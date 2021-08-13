import React from "react";
import "./User.css";
import image from "./images/p.jpg";
export default class Login extends React.Component {

    // satate ??? האם יש צורך ב 
    firstName="";
    lastName="";
    email="";
    phone="";
    password="";
    address="";
    houseNumber=0;
    //city="";--נפתח גולל של ערים
    changeFirstName = (e) => {
        this.firstName=(e.target.value);
    }
    changeLastName = (e) => {
        this.lastName=(e.target.value);
    }  
    changeEmail = (e) => {
        this.email=(e.target.value);
    }
    changePhone = (e) => {
        this.phone=(e.target.value);
    }
    changePassword = (e) => {
        this.password=(e.target.value);
    }
    changeAddress = (e) => {
        this.address=(e.target.value);
    }
    changeHouseNumber = (e) => {
        this.houseNumber=(e.target.value);
    }
    checkPassword = (email,password) => {
          
    }
    render() {

        return (
        
             
            <div className="g">
               <div>
                   <h1>יצירת משתמש</h1>
                </div>

                <form>
                <h3>פרטי משתמש</h3>
            
                <input   placeholder="שם פרטי"  onKeyUp={this.changeFirstName}/>
                <input type="text" placeholder="שם משפחה" onKeyUp={this.changeLastName}/><br/>
               
                <input type="date" />
                 
                <input type="tel" placeholder="טלפון"  onKeyUp={this.changePhone}/><br/>
                 {/*עיר גלילה*/}

                <input type="text" placeholder="רחוב" onKeyUp={this.changeAddress}/>
                <input type="text" placeholder="מספר בית" onKeyUp={this.changeAddress}/><br/>

                <h3>יצירת סיסמא</h3>
                <input type="email" placeholder="כתובת אימייל" onKeyUp={this.changeEmail}/><br/>

               {/*צורך בבדיקות תקינות לסיסמא*/}
                <input type="text" placeholder="הכנס סיסמא"   onKeyUp={this.checkPassword}/><br/>
                <button type="button"  onClick={() => { this.checkPassword(this.email,this.password) }}>הרשם</button>

                </form>
            </div>
        );
    }

}
