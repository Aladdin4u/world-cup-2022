import React from "react";

const Box = (props) => {
    return ( 
        <div className="box-container">
            <img src={props.teamImg} alt="team" className="box-img"/>
            <span className="box-name">{props.teamName}</span>
        </div>
    );
}
 
export default Box;