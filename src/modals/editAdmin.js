import React from 'react'

export default function EditAdmin({infoEdit,showEdit,closeEdit}) {
 
  return (
    <div className="bg-modal" style={{display: infoEdit ? 'flex' : 'none' }}>
    <div className="modal-editAdmin" >
      <div className="close" onClick={function(event){showEdit()}}>+</div>
        <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg" height="100px" id="avaInfo"/>
        <form action>
        <div className="table_content">
          <tbody>
            <tr>
              <td className="no_border">AdminId</td>
              <td className="no_border">01</td>
            </tr>
            <tr>
            <td className="no_border">Name</td>
              <td className="no_border"><input type="text" id="nameInput" name="name" required placeholder="Nguyen Thi Thanh Xuan" className="inputE"
          size="30"/></td>
            </tr>
            <tr>
            <td className="no_border">Gmail</td>
              <td className="no_border">thxuan2702@gmail.com</td>
            </tr>
            <tr>
              <td className="no_border">Gender</td>
              <td className="no_border"><input type="radio" id="manCheck" name="drone" value="man"
          /><label> Man </label> <input type="radio" id="womanCheck" name="drone" value="woman" checked
          /><label> Woman </label></td>
            </tr>
            <tr>
            <td className="no_border">DayOfBirth</td>
              <td className="no_border"><input type="date" id="sinhnhat" name="trip-start" size = "35"
        min="1950-01-01" max="2005-12-31" value="2003-02-27"></input></td>
            </tr>
          </tbody></div>
        </form>
      <a className="button1" onClick={function(event){closeEdit()}} >Save</a>
  </div>
</div>
  )
}
