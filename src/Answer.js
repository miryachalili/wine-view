import React from "react";
import "./Questionnaire.css";

export default function Answer(props) {

  return (
    <div className="q-btn">
      <button onClick={() => props.clickAnswer(props.answer.Points)}>
        {/* {props.answer.IdTypeWine==props.answer.type? */}
        <img src={`data:image/jpeg;base64,${props.answer.Img}`} height={'100px'} width={'100px'} /> </button>
    </div>
  )


}
