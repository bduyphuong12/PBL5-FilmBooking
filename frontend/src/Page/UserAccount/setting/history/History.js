import React from "react";
import "./history.scss";
const History = () => {
  return (
    <div className="history">
      <table id="customer">
        <thead>
          <tr>
            <th>Ngày đặt</th>
            <th>Phim</th>
            <th>Đồ ăn</th>
            <th>Tổng tiền</th>
            <th>Hoàn Vé</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className="button-hoanve">
        <button>Hoàn vé</button>
      </div>
    </div>
  );
};
export default History;
