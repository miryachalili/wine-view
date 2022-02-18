import React from "react";
import "./User.css";
import axios  from "axios";
import {withRouter} from 'react-router-dom'
import { BsEyeSlash,BsEye} from "react-icons/all";
 class Login extends React.Component {
    state = {
        cities:[],
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
                rools: {
                    requird: true,
                    minlen: 2,
                    maxlen:10
                },
            }, 
             phone:{
                value: "",
                lable: "טלפון",
                valid: false,
                toch: false,
                type:"phone",
                errorMassge:" טלפון נייד חייב להכיל  9 ספרות ונייח 10 ספרות",
                rools: {
                    requird: true,
                    regex:/^[0-9\b]+$/,
                    minlen: 9,
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
                    maxlen:30,
                    regex:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

                },
           
          
               }, 
            password:{
                value: "",
                lable: "יצירת סיסמה",
                errorMassge:"סיסמה חייבת להכיל...",
                valid: false,
                toch: false,
                type:"password",
                rools: {
                    requird: true,
                    maxlen:8,
                    regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
                }
            },
        address: {
            value: "",
            lable: "כתובת:רחוב ומספר בית",
            valid: false,
            toch: false,
            type:"text",
            errorMassge:"מייל חייב להכיל לפחות חמש ",
            rools: {
                requird: true,
                min:2,
                maxlen:10
        
            }
         },  
        }, 
       city:null,
        validForm:false,
        showPassword: false
    }
    componentDidMount() {
        axios.get(`http://localhost:62979/api/Cities`).then(x => {
            this.setState({ cities: x.data })   
          }).catch(x => { console.log(x) }).finally(() => { });
    }
  validForm=(form)=>{  
    let validForm=true;
    for(let i in this.state.form){
        console.log(i,validForm,form[i].valid)
        validForm=validForm&&form[i].valid;
    }
    console.log(validForm,"validForm")
    return validForm;
}
  validtion=(key,value)=>{
      console.log(key,value);
    
        let valid=true;
    const validtition=this.state.form[key].rools;
     if(validtition.requird)
      valid=valid&&value.length>0;
     if(validtition.minlen)
      valid=valid&&value.length>=validtition["minlen"];
      if(validtition.maxlen)
      valid=valid&&value.length<=validtition["maxlen"];
      if(validtition.regex)
      {
        const regex = new RegExp(validtition.regex);
        valid=valid&&regex.test(value);
      }

      console.log(valid)
     return valid;
    }
    checkPassword = (event) => {
      event.preventDefault();
      const data={};
      for (let x in this.state.form) {
        data[x]=this.state.form[x].value    
        }
       data.City=this.state.city;
       axios.post(`http://localhost:62979/api/users`,data).then(x=>{        
        alert("הרשמה בוצעה בהצלחה")
        this.props.setUser(x.data)
        this.props.history.push("/")
    }).catch(x=>{})
    }
    change=(event,key)=>{
        const form={...this.state.form};
        const newObj={...form[key]};
        newObj.value=event.target.value; 
        newObj.toch=true;
        newObj.valid=this.validtion(key,event.target.value)
        form[key]=newObj;
        const validFor=this.validForm(form);
        this.setState({form:form,validForm:validFor});
    }
    render() {
           const arr=[];
          for (let x in this.state.form) {
              if(x==="address")
                {break;} 
            arr.push({key:x,config:this.state.form[x]})    
             }
        return (
            <div className="g">
              <h3>יצירת משתמש</h3>
                <form onSubmit={this.checkPassword}>
                    {arr.map(x=> (
                    <div key={x.key}>
                    
                     <div className="password"> 
                    
                    <input className="lastinput" 
                    type={x.config.type==="password"&&this.state.showPassword?"text": x.config.type}
                    value={x.config.value}
                    placeholder={ x.config.lable} 
                    onChange={(event)=>{this.change(event,x.key)}} /> 
                 {x.config.type==="password"?  
                <i> {this.state.showPassword?
                 <BsEye onClick={()=>this.setState({showPassword:false})}/>:
                 <BsEyeSlash onClick={()=>this.setState({showPassword:true})}/>
                }
                 </i> 
                 
                 :null}</div>
                     {!x.config.valid&&x.config.toch?x.config.errorMassge:""}
                   </div> ))}
                     <div className="placeButton">
                    <select onChange={(event)=> this.setState({city: event.target.value})}>
                     <option className="city">בחר את העיר שלך</option>
                      {this.state.cities.map(x => <option key={x.Id} value={x.Id} > {x.Name}</option>)}
                     </select>
                     <br/>
                     <br/>
                      <button disabled   className="buttonCity">ישראל</button><br/>
                     </div>  
                      <input placeholder="רחוב ומספר בית" onChange={(event)=>{this.change(event,"address")}} /><br/>
                  <div className="placeButton">  <button  type="submit" disabled={!this.state.validForm}>הרשם</button></div>
                </form>
            </div>
        );
    }

}




export default withRouter( Login)