// import { useState } from "react";

import { Link } from "react-router-dom";
import {
    Collapse,
} from "reactstrap";
import logo from '../../../Assets/Images/App/logo.png'
import './navbar.css'


function NavBar() { 
    let buttons;
    buttons = (
        <Link className="nav-right-side " to={'/login'}>
            <div navbar >
                <img src="https://i.ibb.co/PCjW83Y/avt.png" className="avt" />
                <button 
                    
                    className="navbar-btn" 
                    id="btnSignUp"
                    >Account
                    
                </button>
            </div>
        </Link>
    )
    return (
       <nav className="navbar navbar-expand navbar-light fixed-top">
           <div className="nav-left-side">
               <div>
                    <Link  to={'/'}>
                        <img className="navbar-logo" src={logo} alt="logo" />
                        </Link>   
               </div>
                <div className="navbar-search">
                    <input type="text" class="navbar-search-input" id='navbar-search-input' placeholder="Search flim..." />
                    <button class="navbar-search-btn"  >
                        <i class="fas fa-search navbar-search-btn-icon" id='navbar-search-btn-icon' alt="search" />
                    </button>
                    
                
           </div>
           <a href="#" className="film">Phim</a>
           <a href="#" className="category ">Thể loại</a>
          
          
           {buttons}
           </div>
           
       </nav>
       
    );
}

export default NavBar;