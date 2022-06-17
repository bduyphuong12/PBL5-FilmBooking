import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCode from 'qrcode.react';
import './donebook.css'
import axios from 'axios';
function DoneBook() {
  var moment = require("moment");
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 2]
  const roomID = getUrlPhim[getUrlPhim.length - 1]
  const [lcByRoomPhimID,setlcByRoomPhimID] = useState(null);
  useEffect(() => {
    const getLCByRoomPhimID = () => {
      axios.get('/lc/getlc/' + phimID + '/'+ roomID ).then(res => {
        setlcByRoomPhimID(res.data);
      })
    }
    getLCByRoomPhimID();
  },[phimID,roomID]);

  const [phimDetail,setPhimDetail] = useState(null);
  useEffect(() => {
    const getPhimDetail = () => {
      axios.get('/phim/detail/' + phimID).then(res => {
        setPhimDetail(res.data);
      })
    }
    getPhimDetail();
  },[phimID]);
  const user = useSelector((state) => state.auth.login.currentUser);
  const idUser= user.ID_User;
  const [userDetail, setuserDetail] = useState(null);
  useEffect(() => {
    const getUser = () => {
      axios.get('/user/detail/' + idUser).then(res => {
        setuserDetail(res.data);
      })
    }
    getUser();
  },[idUser]);
  console.log(userDetail)
  const getMaVach =() =>{
    return (
      <div>
        <p>Email: {userDetail.result[0].Email}  </p>
        <p>Tên phim: {phimDetail.result[0].ten_phim}</p>
        <p>Suất chiếu: {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("DD/MM/yyyy")}  {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("hh:mm A")}</p>
        <p>Rạp số: {lcByRoomPhimID.result[0].room_id}</p>
        <p>Số vé: </p>
        <p>Đã thanh toán online</p>
        
      </div>
    );
  }
  if(phimDetail && userDetail){
    return (
      <div>
        <header className='doneBook'>
            <p>Chúc mừng bạn đã đặt vé thành công</p>
            <p>Vui lòng đưa mã QR Code này cho nhân viên bán vé để kiểm tra thông tin</p>
          <div>
            <QRCode
              id='qrcode'
              value={'Mã giao dịch: '}
              size={290}
              level={'H'}
              includeMargin={true}
            />
          </div>
        </header>
        <div className='detail-user'>
          
              <h4>Thông tin vé được gửi về</h4>
              <p>Email: {userDetail.result[0].Email}  </p>
              <p>Tên phim: {phimDetail.result[0].ten_phim}</p>
              <p>Ngày đặt: {moment(Date().toLocaleString()).format("DD/MM/yyyy  hh:mm A") }</p>
              <p>Suất chiếu: {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("DD/MM/yyyy")}  {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("hh:mm A")}</p>
              <p>Rạp số: {lcByRoomPhimID.result[0].room_id}</p>
        </div>
      </div>
    );
  }

  }
  

export default DoneBook;