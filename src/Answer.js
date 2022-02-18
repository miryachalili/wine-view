import React from "react";

export default function Answer (props) {

        return (
           <div >
               
         <button  onClick={()=>props.clickAnswer(props.answer.Points)}>
              {/* {props.answer.IdTypeWine==props.answer.type? */}
                <img  src={`data:image/jpeg;base64,${props.answer.Img}`}  height={'50px'} width={'50px'}   /> </button> 
                </div> 
                     )    
   

}
