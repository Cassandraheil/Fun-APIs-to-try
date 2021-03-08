import React from 'react';
import "./card.css";

function ApiCards(props){
    console.log("props hopefully", props.catFacts)
    console.log("Promise.probs", Promise.props)
    return(
        // this will be {{background: {props}}}
        <div className='apiCard' style={{background: "blue"}}>
            <div className="cardInfo">
                <p className="cardText">
                {/* class="btn btn-{props}">{props} */}
                this should be props:
                {/* {props.catFacts} */}
                <button type="button" className="cardBtn btn-info">Click for Kayne's words of wisdom</button></p>
            </div>
            {/* the src will be props soon enough */}
            <img className="cardImg" src="https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg"></img>
        </div>
    )
}
export default ApiCards;