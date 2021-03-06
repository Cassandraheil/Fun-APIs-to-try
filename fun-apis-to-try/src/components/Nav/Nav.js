import React from 'react';
import "./nav.css"


function Nav(){
    return(
        <nav className="navbar navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" >
              <img src="https://academy.mobidea.com/wp-content/uploads/2017/12/api.jpg" alt="api-pic" width="30" height="24" className="d-inline-block align-top"></img>
              <p className="navText">API's are the Bomb.com!</p>
            </a>
          </div>
        </nav> 
    )
}

export default Nav;