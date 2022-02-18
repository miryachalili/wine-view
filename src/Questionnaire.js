import React from "react";
import axios  from "axios";
import Answer from "./Answer";
import Taste from "./Taste";
import Product from "./Product";

export default class Questionnaire extends React.Component {

    state={
        qs:[],
        indexQestion:0,
        point:0,
        lastPoint:[],
        selectProduuct:1
    }
    quntity=(count)=>{
        const lastPoint=[...this.state.lastPoint]
        console.log(this.state.indexQestion,this.state.point+count)
        const qs=[...this.state.qs]
    
        if(this.state.indexQestion===3&&this.state.point+count>5&&this.state.point+count<10)
        {
            qs.splice(4,1)
            this.setState({selectProduuct:3})
        }
       else
       {
           if(this.state.point+count>9&&this.state.point+count<=12)
              {this.setState({selectProduuct:1})}
           if(this.state.point+count>=4&&this.state.point+count<6)
              { this.setState({selectProduuct:2})}
           if(this.state.point+count>12)
             {   
                 qs.splice(5,1)
                 this.setState({selectProduuct:4})}
        } 
lastPoint.push(count)
        
this.setState({point:this.state.point+count,
    lastPoint:lastPoint,
    qs:qs,
    indexQestion:this.state.indexQestion+1
})
    } 
    prevQestion=()=>{
        
    const lastPoint=[...this.state.lastPoint]
    var count=lastPoint[lastPoint.length-1]
    lastPoint.pop();
    this.setState({point:this.state.point-count,
        lastPoint:lastPoint,
        indexQestion:this.state.indexQestion-1})
        }
    componentDidMount() {
        axios.get(`http://localhost:62979/api/Questionnaire`).then(x => {
        console.log(x.data)   
        this.setState({ qs: x.data })   
          }).catch(x => { console.log(x) }).finally(() => { });
     }
    

    render() {
         const x=  this.state.qs[this.state.indexQestion];
        return (
            <>
        כמות נקודות{this.state.point}
            <h3>Questionnaire</h3>
          {x?
            <div >{x.QuestionContent}  
          {x.Answers.map(y=> <Answer key={y.Id} clickAnswer={this.quntity} answer={y} />)}
        {/*  :this.state.selectProduuct==y.IdTypeWine?
          <Answer key={y.Id} clickAnswer={this.quntity} answer={y} />:<Product/> )} */}
          
           </div>:null}
           {
        (!x)|| x.Id===6?<Taste type={this.state.selectProduuct}  
          addToOrder={this.props.addToOrder}
          setProductsShow={this.props.setProductsShow} />:null
          }
{this.state.indexQestion?<button onClick={this.prevQestion}>חץ אחורה</button>:null}
           </>
        );
    }

}
