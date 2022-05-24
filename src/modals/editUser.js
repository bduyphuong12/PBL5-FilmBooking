import React from 'react'

export default function EditUser({infoEdit,modalClose}) {
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
            <td className="no_border">1234</td>
          </tr>
          <tr>
          <td className="no_border">FullName</td>
            <td className="no_border"><input type="text" id="fullnameInput" name="name" required placeholder="Ho Minh Hieu" className="inputE"
          size="32"/></td>
          </tr>
          <tr>
          <td className="no_border">Gmail</td>
            <td className="no_border"><a>oppahd96@gmail.com</a></td>
          </tr>
          <tr>
            <td className="no_border">Gender</td>
            <td className="no_border"><input type="radio" id="manRadioCheck" name="drone" checked
         /><label> Man </label> <input type="radio" id="womanRadioCheck" name="drone"
         /><label> Woman </label></td>
          </tr>
          <tr>
          <td className="no_border">DayOfBirth</td>
            <td className="no_border"><input type="date" id="ngaySinhNhat" name="trip-start" size = "35"
           min="1950-01-01" max="2010-12-31" value="2001-12-03"></input></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){modalClose(false);}} >Save</a>
    </div>
  </div>
  )
}
