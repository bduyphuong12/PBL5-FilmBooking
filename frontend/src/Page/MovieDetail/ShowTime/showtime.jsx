import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./showtime.css";
import Description from "../Description/description";
// import Comment from "../Comment/Comment";
import Lichchieu from "./lichchieu";
import axios from "axios";
export default function ShowTime() {
  var moment = require("moment");
  const [lcDetail, setLCPhimDetail] = useState(null);
  const getUrlPhim = window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 1];
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    const getLCDetail = () => {
      axios.get("/lc/getByIdPhim/" + phimID).then((res) => {
        setLCPhimDetail(res.data);
      });
    };
    getLCDetail();
  }, [phimID]);
    const dateNow = moment(Date().toLocaleString()).format("yyyy-MM-DD")
    const [dateLC,setDateLC] = useState(dateNow);
    const openModal = (time) => {
        
        var nextDay = new Date();
        nextDay.setDate(nextDay.getDate()+time);
        setDateLC(nextDay.toISOString().slice(0, 10));
    }
    
    if(lcDetail){
      var newArray = lcDetail.result.filter(function (el) {
        return xuliDay(el.thoi_gian_chieu).toString().substring(0,10).indexOf(dateLC) > -1;
      });
    }
    console.log(newArray);
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
    
    

  const renderTime = () => {
    if (newArray) {
      return (
        <div>
          {React.Children.toArray(
            newArray.map((d) => (
              <ul className=" flex-wrapp">
                <div className="timeshow__item">
                  {user ? (
                    <NavLink
                      className="timeshow__link"
                      to={"/booking/" + d.id_phim + "/" + d.room_id}
                    >
                      <div className="time__begin mb-2">
                      
                        <p>{moment(d.thoi_gian_chieu).format("hh:mm A")}</p>
                      </div>
                    </NavLink>
                  ) : (
                    <NavLink className="timeshow__link" to={"/login"}>
                      <div className="time__begin mb-2">
                        {moment(d.thoi_gian_chieu).format("DD/MM/yyyy")}
                        <p>{moment(d.thoi_gian_chieu).format("hh:mm A")}</p>
                      </div>
                    </NavLink>
                  )}
                </div>
              </ul>
            ))
          )}
        </div>
      );
    }
  };

  return (
    <section className="tabBookMovie">
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-schedule"
              role="tab"
              aria-controls="pills-schedule"
              aria-selected="true"
            >
              Lịch Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-info"
              role="tab"
              aria-controls="pills-info"
              aria-selected="false"
            >
              Thông Tin
            </a>
          </li>
          
        </ul>
        {/* TAB LỊCH CHIẾU */}
        <div id="movieTheater" className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-schedule"
            role="tabpanel"
            aria-labelledby="pills-schedule-tab"
          >
            <div className="movieTheater__row row bg-light">
              <div className="row__left col-md-4 col-sm-12">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-rap"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Lichchieu openInfo={openModal} />
                </div>
              </div>
              <div
                className="tab-content col-md-8 col-sm-12"
                id="v-pills-tabContent"
              >
                {renderTime()}
              </div>
            </div>
          </div>
          {/**Thông tin */}
          <div
            className="tab-pane fade"
            id="pills-info"
            role="tabpanel"
            aria-labelledby="pills-info-tab"
          >
            <Description />
          </div>
          
        </div>
      </div>
    </section>
  );
}
