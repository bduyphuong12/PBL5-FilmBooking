import React from 'react'

export default function AddFilm({addFilm,modalClose}) {
  return (
    <div className="bg-modal" style={{display: addFilm ? 'flex' : 'none' }}>
    <div className="modal-addGame" >
      <div className="close" onClick={function(event){modalClose(false)}}>+</div>
      <form runat="server">
          <img alt="AvaGame" width="90px" height="90px" className="imagee" id="avaAddGame" src="	https://www.elleman.vn/wp-content/uploads/2022/04/16/213427/Jujutsu-Kaisen-0-elleman.jpg"/>
          <input accept=".jpg"id="fileImg" type='file'/>
      </form> 
      <form action>
      <div className="table_content">
        <tbody>
          <tr>
            <td className="no_border">Title</td>
            <td className="no_border"><input type="text" id="tittle" name="title" required className="inputE" 
             minlength="4" maxlength="20" size="33"/></td>
          </tr>
          <tr>
          <td className="no_border">Content</td>
            <td className="no_border"> <textarea rows="5" cols="32" wrap="soft" id="desc" className="inputE"></textarea></td>
          </tr>
          <tr>
            <td className="no_border">Actor</td>
            <td className="no_border"><input type="text" id="act" name="act" required className="inputE" 
             minlength="4" maxlength="50" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Director</td>
            <td className="no_border"><input type="text" id="direc" name="direc" required className="inputE" 
             minlength="4" maxlength="20" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Producer</td>
            <td className="no_border"><input type="text" id="produc" name="produc" required className="inputE" 
             minlength="4" maxlength="50" size="33"/></td>
          </tr>
          <tr>
            <td className="no_border">Trailer</td>
              <td className="no_border"><input type="url" className="inputE" id="demoUrl" 
              pattern="https://.*" size="33" required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){modalClose(false)}}>Save</a>
    </div>
  </div>
  )
}
