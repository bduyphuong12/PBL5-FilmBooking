import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'

 const Userlist = ({openHis,modalOpen}) => {
  return (
    <tr>
        <td>1234</td>
        <td><FaUserCircle className='ava' size={20}/><a className="name">Ho Minh Hieu</a></td>
        <td>oppahd96@gmail.com</td>
        <td>0912345678</td>
        <td><FiEdit className="iconfont1" size="20px" onClick={function(event){modalOpen(true)}}/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle size="20px" className="iconfont2" onClick={function(event){openHis(true)}}/></td>
    </tr>
  )
}
export default Userlist;
