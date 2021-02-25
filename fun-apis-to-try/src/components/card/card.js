import React from 'react';
import "./card.css";

function ApiCards(){
    return(
        <div className='apiCard'>
            <div>
            <p>this shall be information from the api's</p>
            {/* class="btn btn-{props}">{props} */}
            <button type="button" class="btn btn-info">Click for Kayne's words of wisdom</button>
            </div>
            {/* the src will be props soon enough */}
            <img src="https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg"></img>
        </div>
    )
}
export default ApiCards;