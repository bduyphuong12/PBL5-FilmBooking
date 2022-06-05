import React,{useState,useEffect} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import axios from 'axios'

 const Userlist = ({openHis,modalOpen,dataUser,getDataUser}) => {
   if(dataUser){
    const deleteUser = async (id) => {
      if (window.confirm("Do you want to delete?") == true) {
          await axios.delete(`/user/delete/${id}`);
          window.alert("Delete User successfully!");
          window.location.reload();
        } else {
          return;
        }
  }
    return (
      React.Children.toArray(
        dataUser.map(d =>(
        <tr>
          <td>{d.ID_User}</td>
          <td><FaUserCircle className='ava' size={20}/><a className="name">{d.User_Name}</a></td>
          <td>{d.Email}</td>
          <td>{d.Phone_Number}</td>
          <td><FiEdit className="iconfont1" size="20px" onClick={function(event){modalOpen(true);getDataUser(d.ID_User)}}/><RiDeleteBin6Line onClick={function(event){deleteUser(d.ID_User)}} className="iconfont" size="20px"/><BsInfoCircle size="20px" className="iconfont2" onClick={function(event){openHis(true)}}/></td>
      
        </tr>
      )))
    )
   }
}
export default Userlist;
