import React, { useState,useEffect } from 'react'
import {BiAlarmAdd} from 'react-icons/bi'
import ListGioChieu from '../Router/listGioChieu'
import DetailGiochieu from './detailGiochieu'
import axios from 'axios'

export default function Giochieuphim({infogiochieu,modalCloseInfo,time,timeFilm,idFilm}) {
  const [infoDetailGC,setGC] = useState(false);
  const [idLC, setIdLC] = useState(1);
  const [dataLC,setDataLC] = useState(null);
  const [timeGCPhim,setTimeGCPhim] = useState(null);
  const changeGC = (val,id) => {
    setGC(val);
    setTimeGCPhim(id);
  }
  useEffect(()=>{
    const getDataLC = () => {
      axios.get('/lc/list').then(res => {
        setDataLC(res.data);
      })
    }
    getDataLC();
  },[])
  var timeLC="";
  var dataTimeLC;
  const getData = () =>{
    timeLC = document.getElementById("myTimeLC1").value;
  }
  if(infogiochieu){
    document.getElementById("myTimeLC1").value="";
  }
  if(dataLC){
    dataLC.result.map((d)=>{
      if(idLC==d.id) setIdLC(idLC+1);
    })
  }
  const getDataTimeLC = () => {
      return dataTimeLC = {
          id: idLC, 
          id_phim: idFilm,
          thoi_gian_chieu: time+" "+timeLC+":00",
          room_id: 1
      }
  }
  const newLC = async (data) => {
    await axios.post('/lc/add',data);
    window.alert("Added successfully!");
    window.location.reload();
    }
  const checkData = () => {
    if(timeLC === '') {
      alert('Empty Value');
      return false;
    }
    else {
      newLC(dataTimeLC);
      modalCloseInfo(false);changeGC(false);
    }
  }
  if(dataLC){
  var newArray = dataLC.result.filter(function (el) {
    return xuliDay(el.thoi_gian_chieu).toString().substring(0,10).indexOf(time) > -1 && el.id_phim.toString().indexOf(idFilm)>-1;
  });
  return (
    <div className="bg-modal" style={{display: infogiochieu ? 'flex' : 'none' }}>
    <div className={infoDetailGC?"modal-giochieu0":"modal-giochieu"} >
        <div className="close" onClick={function(event){modalCloseInfo(false);changeGC(false)}}>+</div>
        <input type="text" id="myTimeLC1" placeholder=" Nhập giờ chiếu phim (Ex: 17:00)" onChange={getData}/>
        <button className="btn0" onClick={function(event){getDataTimeLC();checkData()}}><BiAlarmAdd size={25}/></button>
        <div className='list-giochieu'>
        {React.Children.toArray(
            newArray.map(d =>(
            <ListGioChieu openGC={changeGC} time={xuliDate(d.thoi_gian_chieu)} timeFilm={timeFilm} idGC={d.id}/>
            )))}
        </div>
    </div>
    {timeGCPhim?<DetailGiochieu infoDetailGC={infoDetailGC} closeDetail={changeGC} idGC={timeGCPhim} />:<></>}
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
