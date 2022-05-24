import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function DetailGiochieu({infoDetailGC,closeDetail}) {
  return (
    <div style={{display: infoDetailGC ? 'flex' : 'none' }}>
    <div className="modal-detailGC" >
      <RiDeleteBin6Line className='icon-GC' size={20}  style={{position:"relative",top:"-13",float:"right",marginRight:"10px"}}/>
        <AiFillCloseCircle className="close-film0" onClick={function(event){closeDetail(false)}} size={20}/>
        <form action>
      <div className="table_content" style={{marginTop:"15px"}}>
        <tbody>
          <tr>
            <td className="no_border">Room</td>
            <td className="no_border"><input type="text" id="room" name="room" required className="inputE" 
             minlength="4" maxlength="20" size="15" placeholder='3'/></td>
          </tr>
          <tr>
            <td className="no_border">TimeStart</td>
              <td className="no_border"><input type="text" className="inputE" placeholder='17:00' id="demoUrl"  size="15" required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){closeDetail(false)}} >Save</a>
    </div>
</div>
  )
}
