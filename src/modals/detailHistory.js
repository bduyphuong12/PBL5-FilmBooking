import React from 'react'


export default function DetailHistory({infoDetail}) {
  return (
    <div style={{display: infoDetail ? 'flex' : 'none' }}>
        <div className="modal-detail" >
            <h3 style={{color: "white"}}>CHI TIẾT HÓA ĐƠN</h3>
            <div className='detail-up'>
                <a className='detail-left'>Vé xem phim x2</a>
                <a className='detail-right'>120.000</a>
                <a className='detail-left'>Bắp vị caramen x2</a>
                <a className='detail-right'>100.000</a>
                <a className='detail-left'>Coca x2</a>
                <a className='detail-right'>60.000</a>
            </div>
            <div className='detail-down'>
                <hr className='hr-class'/>
                <br/>
                <a className='detail-left'>Tổng</a>
                <a className='detail-right'>280.000</a>
            </div>
        </div>
    </div>
  )
}
