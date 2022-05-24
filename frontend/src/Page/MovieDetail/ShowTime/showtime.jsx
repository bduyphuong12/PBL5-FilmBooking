import React from "react";
import { NavLink } from "react-router-dom";
import "./showtime.css";
import Description from "../Description/description";
// import Comment from "../Comment/Comment";
export default function ShowTime() {
  const renderRap = () => {
      return (
        <a
          
          className="nav-link"
          id="v-pills-cgv-tab"
          data-toggle="pill"
          // href={`#${heThongRap.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-cgv"
          aria-selected="true"
        >
          <div className="img__content">
            <img src="https://i.ibb.co/cvb2Rk6/theater.jpg" alt=""/>
            
            <div className="img__text">
              <div className="img__name">Rạp 1</div>
            </div>
          </div>
        </a>
      );
    
  };

  const renderTime = () => {
    return (
      <div>
        {/* <div className="film__version my-4">2D Digital</div> */}
        <ul className="d-flex flex-wrap">
            
              <div className="timeshow__item" >
                <NavLink
                  className="timeshow__link"
                  to={'/booking'}
                >
                  <div className="time__begin mb-2">
                    06/05/2022
                    <p>
                      22:25 PM
                    </p>
                  </div>
                </NavLink>
              </div>
        </ul>
      </div>
    );
  };
  const renderShowTime = () => {
   
      return (
        <li className="list__item" >
          <a
            className="theater__link"
            data-toggle="collapse"
            // href={`#${cumRap.maCumRap}`}
            role="button"
            aria-expanded="false"
          >
            <div className="row">
              <div className="theater__img col-2">
                {/* <img src="https://i.ibb.co/cvb2Rk6/theater.jpg" alt="hinhrap" /> */}
              </div>
              <div className="theater__title col-10">
                <span className="theater__name cgv-color">
                  {/* <span className="theater__subname"> {cumRap.tenCumRap} </span> */}
                </span>
              </div>
            </div>
          </a>
          <div className="collapse" >
            <div className="collapse__content">
              <div className="film__timeshow">{renderTime()}</div>
            </div>
          </div>
        </li>
      );
    ;
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
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-comment"
              role="tab"
              aria-controls="pills-comment"
              aria-selected="false"
            >
              Đánh Giá
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
                  {renderRap()}
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
            <Description  />
          </div>
          {/**Bình luận */}
          <div
            className="tab-pane fade"
            id="pills-comment"
            role="tabpanel"
            aria-labelledby="pills-comment-tab"
          >
            {/* <Comment thongTin={phim} maPhim={maPhim} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
