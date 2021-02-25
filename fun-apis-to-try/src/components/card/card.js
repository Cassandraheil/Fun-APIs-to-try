import React from 'react';
import "./card.css";

function ApiCards(){
    return(
        // this will be {{background: {props}}}
        <div className='apiCard' style={{background: "blue"}}>
            <div className="cardInfo">
                <p className="cardText">this shall be information from the api's, ok but now we will see what happens when there is a lot of text in here and see just how that looks instead
                {/* class="btn btn-{props}">{props} */}
                <button type="button" className="cardBtn btn-info">Click for Kayne's words of wisdom</button></p>
            </div>
            {/* the src will be props soon enough */}
            <img className="cardImg" src="https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg"></img>
        </div>
    )
}
export default ApiCards;