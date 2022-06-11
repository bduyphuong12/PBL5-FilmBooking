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
  },[])
  var timeStart1="";
  var dataTimeSt;
  const getData = () =>{
    timeStart1 = document.getElementById("timestart1").value;
    timeStart1 === "" ? timeStart1 = document.getElementById("timestart1").placeholder : timeStart1 = document.getElementById("timestart1").value;
  }
  const editGC = async (data) => {
    await axios.put('/lc/update',data);
    window.alert("Updated successfully!");
    window.location.reload();
    }
    const getDataUser = () => {
      return dataTimeSt = {
        id: dataTimeGC?dataTimeGC.result[0].id:"", 
        id_phim: dataTimeGC?dataTimeGC.result[0].id_phim:"",
        thoi_gian_chieu: dataTimeGC?xuliDay(dataTimeGC.result[0].thoi_gian_chieu).substring(0,10)+" "+timeStart1+":00":"",
        room_id: dataTimeGC?dataTimeGC.result[0].room_id:""
      }
  }
  const updateUser = () => {
    getData();
    editGC(dataTimeSt);
    closeDetail(false)
  }
  if(dataTimeGC){
    const deleteGC = async (id) => {
      if (window.confirm("Do you want to delete?") == true) {
          await axios.delete(`/lc/delete/${id}`);
          window.alert("Delete successfully!");
          window.location.reload();
        } else {
          return;
        }
  }
  return (
    <div style={{display: infoDetailGC ? 'flex' : 'none' }}>
    <div className="modal-detailGC" >
      <RiDeleteBin6Line className='icon-GC' size={20}  style={{position:"relative",top:"-13",float:"right",marginRight:"10px"}} onClick={function(event){deleteGC(dataTimeGC.result[0].id)}}/>
        <AiFillCloseCircle className="close-film0" onClick={function(event){closeDetail(false)}} size={20}/>
        <form action>
      <div className="table_content" style={{marginTop:"15px"}}>
        <tbody>
          <tr>
            <td className="no_border">Room</td>
            <td className="no_border"><input type="text" id="roomID" name="room" className="inputE" 
             minLength="4" maxLength="20" size="15" value={dataTimeGC.result[0].room_id} readOnly required/></td>
          </tr>
          <tr>
            <td className="no_border">TimeStart</td>
              <td className="no_border"><input type="text" className="inputE" name="timestart1" autoComplete='off' onChange={getData} placeholder={xuliDate(dataTimeGC.result[0].thoi_gian_chieu)} id="timestart1"  size="15"/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataUser();updateUser();}} >Save</a>
    </div>
</div>
  )}
  else{
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
              <td className="no_border"><input type="text" id="roomID" name="roomID" value="NULL" className="inputE" required
               minLength="4" maxLength="20" size="15" readOnly/></td>
            </tr>
            <tr>
              <td className="no_border">TimeStart</td>
                <td className="no_border"><input type="text" className="inputE" name='timestart1' placeholder='NULL' onChange={getData} autoComplete='off' id="timestart1"  size="15"/></td>
            </tr>
          </tbody></div>
        </form>
        <a className="button1" onClick={function(event){getDataUser();updateUser();}}>Save</a>
      </div>
  </div>
    )
  }
}
function xuliDay(val){
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var dt = date.getDate();
  
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var day = year+'-' + month + '-'+dt;
  return(day);
}
function xuliDate(val){
  var date = new Date(val);
  var hour = date.getHours();
  var minute = date.getMinutes();
  
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  var daytime = hour+':'+ minute;
  return(daytime);
}
