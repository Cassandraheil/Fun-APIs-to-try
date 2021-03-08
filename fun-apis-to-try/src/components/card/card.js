import React from 'react';
import "./card.css";

function ApiCards(props){
    console.log("props hopefully", props)
    return(
        // this will be {{background: {props}}}
        <div className='apiCard' style={{background: "blue"}}>
            <div className="cardInfo">
                <p className="cardText">
                {/* class="btn btn-{props}">{props} */}
                information is: <br/>
                {props.information}
                <br/>
                <button type="button" className="cardBtn btn-info">{props.btnText}</button></p>
            </div>
            {/* the src will be props soon enough */}
            <img className="cardImg" src={props.pic}></img>
        </div>
    )
}
export default ApiCards;