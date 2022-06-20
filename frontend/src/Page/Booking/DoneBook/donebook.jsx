import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCode from 'qrcode.react';
import './donebook.css'
import axios from 'axios';
function DoneBook() {
  var moment = require("moment");
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 3]
  const roomID = getUrlPhim[getUrlPhim.length - 2]
  const id = getUrlPhim[getUrlPhim.length-1]
  const [lcbyid,setlcbyid] = useState(null);
    useEffect(() => {
      const getLCID = () => {
        axios.get('/lc/detail/' + id ).then(res => {
          setlcbyid(res.data.result[0]);
        })
      }
      getLCID();
    },[id]);
 
  const [lcByRoomPhimID,setlcByRoomPhimID] = useState(null);
  useEffect(() => {
    const getLCByRoomPhimID = () => {
      axios.get('/lc/getlc/' + phimID + '/'+ roomID ).then(res => {
        setlcByRoomPhimID(res.data.result[0]);
      })
    }
    getLCByRoomPhimID();
  },[phimID,roomID]);
  
  const [phimDetail,setPhimDetail] = useState(null);
  useEffect(() => {
    const getPhimDetail = () => {
      axios.get('/phim/detail/' + phimID).then(res => {
        setPhimDetail(res.data.result[0]);
      })
    }
    getPhimDetail();
  },[phimID]);
  
  const user = useSelector((state) => state.auth.login.currentUser);
  const soGhe = localStorage.getItem('soGhe')
  const idGd = localStorage.getItem('idgd')
  const [gd,setGd] = useState(null)
  useEffect(() => {
    const getgd = () => {
      axios.get('/dg/detail/' + idGd).then(res => {
        setGd(res.data.result[0]);
      })
    }
    getgd();
  },[idGd]);
  
  if(phimDetail ){
    return (
      <div>
        <header className='doneBook'>
            <p>Chúc mừng bạn đã đặt vé thành công</p>
            <p>Vui lòng đưa mã QR Code này cho nhân viên bán vé để kiểm tra thông tin</p>
          <div>
            <QRCode
              id='qrcode'
              value={ 'idGD: '+ idGd + '.   ' +'idUser: ' + user.ID_User +'.    ' + 'Time: ' + moment(lcbyid.thoi_gian_chieu).format("DD/MM/yyyy hh:mm A") + '.    ' +  'Room: ' + lcByRoomPhimID.room_id + '.    ' +   'Seat: ' + soGhe + '.   '+'Total: ' + gd.so_tien +'000' 
               
            
            }
              size={290}
              level={'H'}
              includeMargin={true}
            />
          </div>
        </header>
        <div className='detail-user'>
          
              <h4>Thông tin vé được gửi về</h4>
              <p>Email: {user.Email}  </p>
              <p>Tên phim: {phimDetail.ten_phim}</p>
              <p>Ngày đặt: {moment(Date().toLocaleString()).format("DD/MM/yyyy  hh:mm A") }</p>
              <p>Suất chiếu: {moment(lcbyid.thoi_gian_chieu).format("DD/MM/yyyy")}  {moment(lcbyid.thoi_gian_chieu).format("hh:mm A")}</p>
              <p>Rạp số: {lcByRoomPhimID.room_id}</p>
              <p>Số ghế: {soGhe}</p>
        </div>
      </div>
    );
  }

  }
  

export default DoneBook;