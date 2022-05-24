import React, { useState } from 'react'
import {BiAlarmAdd} from 'react-icons/bi'
import ListGioChieu from '../Router/listGioChieu'
import DetailGiochieu from './detailGiochieu'

export default function Giochieuphim({infogiochieu,modalCloseInfo}) {
  const [infoDetailGC,setGC] = useState(false);
  const changeGC = (val) => setGC(val);
  return (
    <div className="bg-modal" style={{display: infogiochieu ? 'flex' : 'none' }}>
    <div className={infoDetailGC?"modal-giochieu0":"modal-giochieu"} >
        <div className="close" onClick={function(event){modalCloseInfo(false);changeGC(false)}}>+</div>
        <input type="text" id="myInput0" placeholder=" Nhập giờ chiếu phim (Ex: 17:00)" />
        <button className="btn0" ><BiAlarmAdd size={25}/></button>
        <div className='list-giochieu'>
            <ListGioChieu openGC={changeGC}/>
            <ListGioChieu openGC={changeGC}/>
            <ListGioChieu openGC={changeGC}/>
            <ListGioChieu openGC={changeGC}/>
        </div>
    </div>
    <DetailGiochieu infoDetailGC={infoDetailGC} closeDetail={changeGC}/>
</div>
  )
}
