import React, { Fragment, useEffect, useState } from "react";
import "./chooseslot.scss";
import axios from 'axios';
import swal from "sweetalert";
export default function ChooseSlot({lcByRoomPhimID,phimDetail}) {
  var moment = require("moment");
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 2]
  const roomID = getUrlPhim[getUrlPhim.length - 1]

  const [counter, setCounter] = useState(60 * 5);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      swal("Bạn đã chọn vé quá lâu! Ahihi", {
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [counter]);
  if(phimDetail){
    return (
      <div className="checkOut__left col-md-9 col-sm-12 p-0">
        <div className="bookSlot">
          <div
            className="poster__film"
            
          >
            <div className="overlay" />
          </div>
          <div className="bookSlot__content">
            <div className="theater__info d-flex justify-content-between">
              <div className="theater__img d-flex bg-light">
                <img src={phimDetail.result[0].poster} alt="hinhanh" />
                <div className="theater__name">
                  <span className="name">
                    <span className="subname">
                      Rạp {lcByRoomPhimID.result[0].room_id}
                    </span>
                  </span>
                  <p className="showtime">
                    Giờ chiếu: {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("hh:mm A")}
                  </p>
                </div>
              </div>
              <div className="timeKeepSlot">
                <p className="title__text">thời gian giữ ghế</p>
                <span className="time">{counter + "s"}</span>
              </div>
            </div>
            <div className="chooseSlot">
              <div className="screen__img">
                <img src="https://i.ibb.co/zWgWjtg/screen.png" alt="screen" />
              </div>
              <div className="picking row">
                <div className="slot__picking col-11">
                  <div className="slot__row">
                    <Fragment >
                    
                    <i className="fa fa-couch slot__item item--regular"></i>
                    <i className="fa fa-couch slot__item item--picked"></i>
                    <i className="fa fa-couch slot__item item--picked"></i>
                    <i className="fa fa-couch slot__item item--picking"></i>
                    
                    </Fragment>
                  </div>
                </div>
              </div>
              <div className="slot__detail row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <i className="fa fa-couch item--picking" />
                  <span className="slot__text">Ghế đang chọn</span>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <i className="fa fa-couch item--picked" />
                  <span className="slot__text">Ghế đã chọn</span>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <i className="fa fa-couch item--regular" />
                  <span className="slot__text">Ghế chưa chọn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
