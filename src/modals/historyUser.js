import React,{useState} from 'react'
import HistoryBuy from '../Router/history'
import DetailHistory from './detailHistory'

export default function HistoryUser({openHis,modalCloseHis,hisData}) {
    const [infoDetail, setStateDetail] = useState(false);
    const changeDetail = () => setStateDetail(!infoDetail);
  return (
    <div className={infoDetail?"bg-history":"bg-modal"} style={{display: openHis ? 'flex' : 'none' }}>
    <div className="modal-history" >
        <div className="close" onClick={function(event){modalCloseHis(false)}}>+</div>
        <h3 style={{color: "white"}}>LỊCH SỬ GIAO DỊCH</h3>
        <div className='table-history'>
            <table id="myTable">
                <tbody>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                <HistoryBuy hoverChange={changeDetail}/>
                </tbody>
            </table>
        </div>
    </div>
    <DetailHistory infoDetail={infoDetail}/>
</div>
  )
}
