import React from "react";
import "./EndPage.css";
import { BiError } from "react-icons/all";

export default class EndPage extends React.Component {

    render() {

        return (
            <div className="endPage"> 
           <div className="error">             
                 <span>
                  <i><BiError/></i> 
                אזהרה: מכיל אלכוהול - יש להימנע משתיה מופרזת 

                 </span>
           </div>
           </div>
        
        );
    }

}
