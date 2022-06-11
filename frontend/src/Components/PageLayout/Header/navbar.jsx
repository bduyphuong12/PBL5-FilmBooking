import { useState } from "react";

import { Link } from "react-router-dom";
import ModalTrailer from "../../Popup/ModalTrailer/modaltrailer";
import logo from '../../../Assets/Images/App/logo.png'
import './navbar.css'

function NavBar() { 
    const [openF,setOpenF] = useState(false);
    const handleToggleF = (event) => setOpenF(!openF)
    let buttons;
    buttons = (
        
            <Link className="nav-right-side" to={'/login'}>
            <div navbar >
                <img src="https://i.ibb.co/PCjW83Y/avt.png" className="avt" />
                <button 
                    
                    className="navbar-btn-account" 
                    id="btnSignUp"
                    >Account
                    
                </button>
            </div>
        </Link>
    )
    return (
        <>
        <nav className="navbar navbar-expand navbar-light fixed-top">
           <div className="nav-left-side">
               <div>
                    <Link  to={'/'}>
                        <img className="navbar-logo" src={logo} alt="logo" />
                        </Link>   
               </div>
                {/* <div className="navbar-search">
                    <input type="text" class="navbar-search-input" id='navbar-search-input' placeholder="Search flim..." />
                    <button class="navbar-search-btn"  >
                        <i class="fas fa-search navbar-search-btn-icon" id='navbar-search-btn-icon' alt="search" />
                    </button>
                    
                
           </div> */}
           <div className="center">

           </div>
           <Link className="film" to={'/allmovie'}>
            <img src="http://simpleicon.com/wp-content/uploads/film-3.png" className="film-icon" alt="" />
            Phim
            </Link>
           <div 
                        className="navbar-btn" 
                        onClick={handleToggleF}
                        >
                        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png" alt=""  className="thongbao" /> Thông báo
            </div>
            <a          
                        href={"#tin"}
                        className="navbar-btn" 
                        >
                        <img src="https://cdn-icons-png.flaticon.com/512/464/464214.png" alt=""  className="tintuc" /> Tin tức
            </a>
           {buttons}
           <ModalTrailer 
           openF={openF}
           handleToggleF={handleToggleF}
           />
           </div>
       </nav>
      
        </> 
    );
}

export default NavBar;