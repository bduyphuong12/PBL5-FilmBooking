import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import './cornandwater.scss'
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import swal from "sweetalert";
import CreditModal from '../CreditModal/CreditModal'
function CornAndWater({lcByRoomPhimID,phimDetail}) {
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 2]
  const roomID = getUrlPhim[getUrlPhim.length - 1]

  const [item, setItem] =  useState(null);
  var subTotal = localStorage.getItem('gia')
  console.log(subTotal)
  const [countN, setCountN] = useState(0)
  const [countB, setCountB] = useState(0)
  const [countCB1, setCountCB1] = useState(0)
  const [countCB2, setCountCB2] = useState(0)
  const sbTotal = Number(subTotal)
  const totalAll = sbTotal + countN*25000 + countB*20000 + countCB1*60000 + countCB2*80000
  const total = () =>{
    return totalAll
  }
  useEffect(() => {
    const getItem = () => {
      axios.get('/mh/list' ).then(res => {
        setItem(res.data);
      })
    }
    getItem();
  },[]);
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(user.ID_User  )
  var moment = require("moment");
  const data = {
    id: null,
    ngay: moment(Date().toLocaleString()).format("yyyy/MM/DD hh:mm:ss"),
    id_user: user.ID_User,
    so_tien: totalAll/1000
  }
  const datVe = async () => {
    
      swal({
      
        title: "Bạn chắc chứ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Thanh toán thành công! Chúc bạn xem phim vui vẻ", {
            icon: "success",
          });
           axios.post('/dg/add',data)
          setTimeout(() => {
            window.location.assign('/donebook/'+phimID+'/'+roomID);
          }, 2000);
        } else {
          swal("Chọn lại nào!");
        }
      });
    
    
};
  
  if(phimDetail){
    return (
      <>
        <div className="content">
            <Col md="9">
              <Card className="card-plain">
                <CardHeader>
                 <h1>Đồ uống</h1>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        {/* <th>Số thứ tự</th> */}
                        <th>Sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                         
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        
                        <td>Cocacola</td>
                        <td>25.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-" onClick = { countN >=1?function(){setCountN(countN-1)}:"" }/>
                        <input aria-label="quantity" class="input-qty-n" max="10" min="0" name="" type="number" value={countN}/>                        
                        <input className="plus is-form" type="button" value="+" onClick = {() => setCountN(countN+1)}/>
                        </td>
                        
                      </tr>
                      <tr> 
                      
                        <td>Bắp</td>
                        <td>20.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-" onClick = {countB >=1?function(){setCountB(countB-1)}:""}/>
                        <input aria-label="quantity" class="input-qty-b" max="10" min="0" name="" type="number" value={countB}/>                        
                        <input className="plus is-form" type="button" value="+" onClick = {() => setCountB(countB+1)}/>
                        </td>
                        
                      </tr>
                      <tr>
                      
                        <td>Combo 1 bắp + 2 nước</td>
                        <td>60.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-" onClick = {countCB1 >=1?function(){setCountCB1(countCB1-1)}:""}/>
                        <input aria-label="quantity" class="input-qty-cb1" max="10" min="0" name="" type="number" value={countCB1}/>                        
                        <input className="plus is-form" type="button" value="+" onClick = {() => setCountCB1(countCB1+1)}/>
                        </td>
                        
                      </tr>
                      <tr>
                      
                        <td>Combo 2 bắp + 2 nước</td>
                        <td>80.000</td>
                        <td>
                        <input className="minus is-form" type="button" value="-" onClick = {countCB2 >=1?function(){setCountCB2(countCB2-1)}:""}/>
                        <input aria-label="quantity" class="input-qty-cb2" max="10" min="0" name="" type="number" value={countCB2}/>                        
                        <input className="plus is-form" type="button" value="+" onClick = {() => setCountCB2(countCB2+1)}/>
                        </td>
                        
                      </tr>
                      
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          
        </div>
        <div className="checkOut__right col-md-3 col-sm-12">
        <div className="checkout__form">
          <div className="total__price">
            <span className="price">{total()} VND</span>
          </div>
          <div className="film__info">
            <span className="film__age--C">
              Rạp {lcByRoomPhimID.result[0].room_id}
            </span>
            <span className="film__name">
            {phimDetail.result[0].ten_phim}
            </span>
            <p className="film__detail">
            {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("DD/MM/yyyy")}  {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("hh:mm A")}

            </p>
            {/* <p className="theater__name">
              {thongTinPhongVe.thongTinPhim?.tenCumRap}
            </p> */}
            {/* <p className="film__address">
              {thongTinPhongVe.thongTinPhim?.diaChi}
            </p> */}
          </div>
          {/* <div className="count__slot">
            <div>Ghế đã chọn: </div>
            <div className="slot"></div>
            
          </div> */}
          <div className="discountForm d-flex justify-content-between">
            <div className="discountForm__content">
              <label className="label__name">Mã giảm giá</label>
              <input
                type="text"
                name="code"
                id="txtDiscountCode"
                className="form-control d-inline"
                
              />
            </div>
            <button id="btnCheckCode" className="btn mb-2">
              Áp dụng
            </button>
          </div>
          <div className="payForm">
            <a className="pay__link" href="/#">
              <span className="title__text">Hình thức thanh toán</span>
              <p className="text__notification">
                Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
              </p>
            </a>
          </div>
        </div>
        <div className="textNotification text-center">
          <i className="fa fa-info-circle text-danger mr-1" />
          <span className="noti__text">
            Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn{" "}
            <span className="noti__link">ZMS</span> (tin nhắn Zalo) và{" "}
            <span className="noti__link">Email</span> đã nhập.{" "}
          </span>
        </div>
        <div
          id="btnBook"
          className="btnBook"
          data-toggle="modal"
          data-target="#CreditModal"
          // onClick={() => {
          //   datVe();
          // }}
        >
          Đặt vé
        </div>
        <CreditModal 
        datVe={datVe} 
        />
      </div>
        </>
    );
  }
  }
    


export default CornAndWater;