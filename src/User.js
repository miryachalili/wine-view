import React from "react";
import "./User.css";
// import axios  from "axios";
// import image from "./images/p.jpg";
export default class Login extends React.Component {
    state = {
        form: {
            firstName: {
                value: "",
                lable: "שם פרטי",
                valid: false,
                toch: false,
                type:"text",
                rools: {
                    requird: true,
                    minlen: 2,
                    maxlen:10
                },
            },
            lastName:  {
                value: "",
                lable: "שם משפחה",
                valid: false,
                toch: false,
                type:"text",
                errorMassge:"מייל חייב להכיל לפחות חמש ",

                rools: {
                    requird: true,
                    minlen: 3,
                    maxlen:10
                },
            },
            email:{
                value: "",
                lable: "כתובת מייל",
                valid: false,
                toch: false,
                type:"email",
                errorMassge:"מייל חייב להכיל לפחות חמש ",
                rools: {
                    requird: true,

                    regex:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                    

                },
            },
            password:{
                value: "",
                lable: "צור סיסמה",
                valid: false,
                toch: false,
                type:"password",
                rools: {
                    requird: true,
                    regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
                    
                },
            },
            // phone: "",
            // password: "",
            // address: "",
            // houseNumber: 0
        },
        validForm:false
    }
validForm=()=>{
    let validForm=true;
    for(let i in this.state.form){
        validForm=validForm&&this.state.form[i].valid
        console.log(validForm,this.state.form[i].valid)
    }
    return validForm;
}
  validtion=(key,value)=>{
        let valid=true;
    const validtition=this.state.form[key].rools;
     if(validtition.requird)
      valid=valid&&value.length>0;
     if(validtition.minlen)
      valid=valid&&value.length>=validtition["minlen"];
      if(validtition.regex)
      {
        const regex = new RegExp(validtition.regex);
        valid=valid&&regex.test(value);
      }

      console.log(valid)
     return valid;
    }
    checkPassword = (event) => {
      event.preventDefault()   
    }
    change=(event,key)=>{
        const form={...this.state.form};
        const newObj={...form[key]};
        newObj.value=event.target.value; 
        newObj.toch=true;
        newObj.valid=this.validtion(key,event.target.value)
        form[key]=newObj;
        const validFor=this.validForm();
        this.setState({form:form,validForm:validFor});
    }
    render() {
           const arr=[];
          for (let x in this.state.form) {
            arr.push({key:x,config:this.state.form[x]})    
             }
        return (
            <div className="g">
              <h1>יצירת משתמש</h1>
                <form onSubmit={this.checkPassword}>
                    {arr.map(x=><div key={x.key}>{x.config.lable}{x.config.toch?88:99}-{x.config.valid?5555:2222}
                    <input 
                    type={x.config.type}
              //  className=    {x.config.valid?"tru":"eroor"} 
                    value={x.config.value} 
                    onChange={(event)=>{this.change(event,x.key)}} />
                    {!x.config.valid&&x.config.toch?x.config.errorMassge:""}
                    </div>)}

                    {this.state.validForm?"כן":"לא"}


                    <button type="submit" disabled={!this.state.validForm}>הרשם</button>

                </form>
            </div>
        );
    }

}
