import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./history.scss";
import { BsEye } from "react-icons/bs";
import DetailHistory from "./DetailHistory/DetailHistory";
const History = () => {
  const [historyGD, setHistoryGD] = useState([]);
  const [showhisDetail, setShowHisDetail] = useState(false);
  const [idGD, setIdGD] = useState(1);
  const [tongtien, setTongTien] = useState(0);
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(showhisDetail);
  useEffect(() => {
    axios.get(`/dg/getByIdUser/${user.ID_User}`).then((res) => {
      if (res.data.result) {
        setHistoryGD(res.data);
        console.log(res.data);
      } else {
        setHistoryGD([]);
      }
    });
  }, [user]);

  const changeDetail = (id, tong) => {
    setShowHisDetail(!showhisDetail);
    setIdGD(id);
    setTongTien(tong);
  };
  if (historyGD) {
    if (historyGD.result !== undefined) {
      return (
        <div className="history">
          <table id="customer">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ngày đặt</th>
                <th>Tổng tiền</th>
                <th>Xem chi tiết</th>
              </tr>
            </thead>

            <tbody>
              {React.Children.toArray(
                historyGD.result.map((history) => (
                  <tr>
                    <td>{history.id}</td>
                    <td>
                      {xuliDate(history.ngay) + " " + xuliDay(history.ngay)}
                    </td>
                    <td>{history.so_tien}</td>
                    <td>
                      <BsEye
                        onMouseOver={() => {
                          changeDetail(history.id, history.so_tien);
                        }}
                        onMouseOut={() => {
                          changeDetail(history.id, history.so_tien);
                        }}
                        size="20px"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="his-detail">
            <DetailHistory
              showDetail={showhisDetail}
              idGD={idGD}
              tong={tongtien}
            />
          </div>
        </div>
      );
    }
  }
};
function xuliDay(val) {
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  var day = dt + "-" + month + "-" + year;
  return day;
}
function xuliDate(val) {
  var date = new Date(val);
  var hour = date.getHours();
  var minute = date.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  var daytime = hour + "h" + minute;
  return daytime;
}
export default History;
