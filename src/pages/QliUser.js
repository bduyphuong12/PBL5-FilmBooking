import React,{useState} from 'react'
import '../styles/qliuser.css'
import Userlist from '../Router/userlist'
import Pagination from '../Router/pagination'
import HistoryUser from '../modals/historyUser'
import EditUser from '../modals/editUser'

export default function QliUser() {
  const [infoEdit, setInfoEdit] = useState(false);
  const openEdit = value => setInfoEdit(value);
  const closeEdit = value => setInfoEdit(value);  

  const [infoHis, setStateHis] = useState(false);
  const openHis = value => setStateHis(value);
  const closeHis = value => setStateHis(value);
  return (
    <div className='bg-qliphim'>
    <input type="text" id="myInputUser" placeholder=" Tìm kiếm user " />
    <div className='bg-table'>
     <table id="myTable">
       <tbody>
         <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Email</th>
           <th>PhoneNum</th>
           <th>Actions</th>
         </tr>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
         <Userlist openHis={openHis} modalOpen={openEdit}/>
       </tbody>
     </table>
     <HistoryUser openHis={infoHis} modalCloseHis={closeHis}/>
     <Pagination/>
     <EditUser infoEdit={infoEdit} modalClose={closeEdit}/>
    </div>
  </div>
  )
}
