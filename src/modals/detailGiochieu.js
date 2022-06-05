import React,{useEffect,useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
import axios from 'axios'

export default function DetailGiochieu({infoDetailGC,closeDetail,idGC}) {
  const [dataTimeGC,setdataTimeGC] = useState(null);
  useEffect(()=>{
    const getDataGC = async () =>{
      var res = await axios.get(`/lc/detail/${idGC}`);
      setdataTimeGC(res.data);
    }
    getDataGC();
    dataTimeGC?console.log(dataTimeGC):console.log("");
  },[])
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
            <td className="no_border"><input type="text" id="room" name="room" className="inputE" 
             minLength="4" maxLength="20" size="15" placeholder="" readOnly/></td>
          </tr>
          <tr>
            <td className="no_border">TimeStart</td>
              <td className="no_border"><input type="text" className="inputE" autoComplete='off' placeholder='17:00' id="demoUrl"  size="15" required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){closeDetail(false)}} >Save</a>
    </div>
</div>
  )
}
