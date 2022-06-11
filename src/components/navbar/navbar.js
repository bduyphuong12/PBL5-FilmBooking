import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import {GiGalaxy} from 'react-icons/gi'
import "./Navbar.css";
import {SidebarData} from '../sidebar/sidebarData'
import {IconContext} from 'react-icons'
import {BsFillBellFill} from 'react-icons/bs'
import '../../styles/modal.css'
import '../../styles/table.css'
import AdminInfo from '../../modals/AdminInfo';
import Messeger from '../../modals/messeger';
import EditAdmin from '../../modals/editAdmin';
import axios from 'axios';

function Navbar() {
  const [dataMesseger, setDataMesseger] = useState([])
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);

  const [detail, setStateE] = useState(false)
  const showInfo = () =>{
    setStateE(!detail);
  }

  const [messeger, setMesseger] = useState(false)
  const showMesseger = () => setMesseger(!messeger);

  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    setStateE(!detail);
    setEdit(!editform)};
  const closeEdit = () => {
    setEdit(!editform)
  }
  const handleLogout = (value) => {
    if(value === "Log out"){
      if(window.confirm("Are you sure you want to log out?")){
        localStorage.removeItem('token');
        window.location.href = "/";
      }
      else return;
    }
  }
  useEffect(() => {
    const getMessNum = () => {
      axios.get('/tb/list/').then(res => {
        setDataMesseger(res.data);
      })
    }
    getMessNum();
  },[]);
  const AddNewMess = async (data) => {
    console.log(data);
    await axios.post('/tb/add',data);
    window.alert("Send mess to user successfully!");
    window.location.reload();
  }
  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
      <div className="menu_bars">
          <Link to='#'>
              <AiOutlineBars size={35} style={{color: "#9E4242"}} onClick={showSidebar} />
          </Link>
        </div>
        <div className="sidebar__img">
        <Link to='/'><img style={{marginTop: '12px'}} src="https://i.postimg.cc/25yXkc0N/logo.png" height="60" width="180"/></Link>
              
            </div>
        <div className="navbar__right">
        <div className="dropdown">
             <a className="btn btn-secondary dropdown-toggle" onClick={showMesseger} >
                     <BsFillBellFill className='bell-btn' size={25} alt="avatar1" style={{float: 'right', color: "#9E4242"}} />
        </a>
        </div>
        <a onClick={showInfo} className="ava1">
          <img width="38" height="38" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg" alt="avatar" id="avaAdmin"/>
        </a>
      </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path} onClick={function(event){handleLogout(item.title)}}>
                              {item.icon}
                              <span >{item.title}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </nav>
      <AdminInfo detail={detail} showInfo={showInfo} showEdit={showEdit} />
      <Messeger openMess={messeger} showMess={showMesseger} dataMess={AddNewMess} idMess={dataMesseger}/>
      <EditAdmin infoEdit={editform} showEdit={showEdit} closeEdit={closeEdit}/>
      </IconContext.Provider>
      </>
  )
}
export default Navbar;