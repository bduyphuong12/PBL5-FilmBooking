import React from "react";
import "./description.css";
export default function Description() {
  
  return (
    <div className="row__above row">
      <div className="info__category col-md-6 col-sm-12">
        <div className="category__item">
          <p className="category__name">Ngày phát hành</p>
          <p className="category__content">05/05/2022</p>
        </div>
        <div className="category__item">
          <p className="category__name">Đạo diễn</p>
          <p className="category__content">Dave Wilson</p>
        </div>
        <div className="category__item">
          <p className="category__name">Thể Loại</p>
          <p className="category__content">Hành động</p>
        </div>
        <div className="category__item">
          <p className="category__name">Định dạng</p>
          <p className="category__content">2D/Digital</p>
        </div>
      </div>
      <div className="info__content col-md-6 col-sm-12">
        <div className="info__title">Nội dung</div>
        <p className="info__text">
          i say a b c d e f**k up in the night
        </p>
      </div>
    </div>
  );
}
