import React from 'react'
import axios from 'axios'

export default function EditUser({infoEdit,modalClose,userData}) {
  var userName="",number="";
  var dataUser;
  const getData = () =>{
    userName = document.getElementById("fullnameuser").value;
    number = document.getElementById("phoneuser").value;
    userName === "" ? userName = document.getElementById("fullnameuser").placeholder : userName = document.getElementById("fullnameuser").value;
    number === "" ? number = document.getElementById("phoneuser").placeholder : number = document.getElementById("phoneuser").value;
  }
  const getStartData = () =>{
    userName = document.getElementById("fullnameuser").placeholder;
    number = document.getElementById("phoneuser").placeholder;
  }
  const editUser = async (data) => {
    await axios.put('/user/update',data);
    window.alert("User updated successfully!");
    window.location.reload();
    }
  if(infoEdit){
    document.getElementById("fullnameuser").value="";
    document.getElementById("phoneuser").value="";
    getStartData();
  }
  const getDataUser = () => {
    return dataUser = {
        ID_User: userData?userData.result[0].ID_User:"", 
        User_Name: userName,
        User_Password: userData?userData.result[0].User_Password:"",
        Email: userData?userData.result[0].Email:"",
        Phone_Number: number
    }
}
const updateUser = () => {
  getData();
  editUser(dataUser);
  modalClose(false);
}
  if(userData){
  return (
    <div className="bg-modal" style={{display: infoEdit ? 'flex' : 'none' }}>
    <div className="modal-editUser" >
      <div className="close" onClick={function(event){modalClose(false);}}>+</div>
      <form action>
      <div className="table_content" style={{marginTop:'30px'}}>
        <tbody>
          <tr>
            <td className="no_border">UserId</td>
            <td className="no_border"><input readOnly type="text" id="iduser" name="iduser" required placeholder={userData.result[0].ID_User} className="inputE"
          size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">FullName</td>
            <td className="no_border"><input type="text" id="fullnameuser" name="fullnameuser" autoComplete='off' placeholder={userData.result[0].User_Name} className="inputE" onChange={getData}
          size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">Gmail</td>
            <td className="no_border"><input type="text" id="emailuser" name="mail" required placeholder={userData.result[0].Email} readOnly className="inputE"
          size="30"/></td>
          </tr>
          <tr>
          <td className="no_border">PhoneNum</td>
            <td className="no_border"><input type="text" id="phoneuser" name="phoneuser" autoComplete='off' placeholder={userData.result[0].Phone_Number} className="inputE" onChange={getData}
          size="30"/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataUser();updateUser()}} >Save</a>
    </div>
  </div>
  )}
  else{
    return (
      <div className="bg-modal" style={{display: infoEdit ? 'flex' : 'none' }}>
      <div className="modal-editUser" >
        <div className="close" onClick={function(event){modalClose(false);}}>+</div>
        <img width="130px" height="130px" id="out1" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"/>
        <form action>
        <div className="table_content">
          <tbody>
            <tr>
              <td className="no_border">UserId</td>
              <td className="no_border"><input readOnly type="text" id="iduser" name="iduser" required placeholder="Null" className="inputE"
            size="32"/></td>
            </tr>
            <tr>
            <td className="no_border">FullName</td>
              <td className="no_border"><input type="text" id="fullnameuser" name="fullnameuser" placeholder="Null" className="inputE" onChange={getData}
            size="32"/></td>
            </tr>
            <tr>
            <td className="no_border">Gmail</td>
              <td className="no_border"><input type="text" id="emailuser" name="mail" required placeholder="Null" readOnly className="inputE"
            size="32"/></td>
            </tr>
            <tr>
            <td className="no_border">PhoneNum</td>
              <td className="no_border"><input type="text" id="phoneuser" name="phoneuser" placeholder="Null" className="inputE" onChange={getData}
            size="32"/></td>
            </tr>
          </tbody></div>
        </form>
        <a className="button1" onClick={function(event){getDataUser();updateUser()}} >Save</a>
      </div>
    </div>
    )
  }
}
