import React,{useState, useEffect} from 'react'
import '../styles/room.css'
import Seat from '../Router/seat'
import axios from 'axios'

 const InfoRapchieu = ({infoRoom,modalCloseDetail,roomData}) => {
     const [dataSeatRow, setDataRow] = useState(null);
     const [listSeatCol, setListSeatCol] = useState(null);
     var lengthSeat=0;
     useEffect(() => {
        const getSeatRow = async () => {
            await axios.get(`/seat/getByRoomId/${roomData}`).then(res => {
                setDataRow(res.data);
            })
          }
          const getListSeatCol = async () => {
            await axios.get('/seatNo/list').then(res => {
                setListSeatCol(res.data);
            })
          }
          getSeatRow();
          getListSeatCol();
     },[])
    const compare =( a, b ) => {
        if ( a.Room_Name < b.Room_Name ){
          return -1;
        }
        if ( a.Room_Name > b.Room_Name ){
          return 1;
        }
        return 0;
      }
      if(listSeatCol){
        var newArray = listSeatCol.result.filter(function (el) {
            var i = (roomData-1)*10;
          return el.Seat_Id.toString().indexOf(i+1) > -1 || el.Seat_Id.toString().indexOf(i+2) || el.Seat_Id.toString().indexOf(i+3) || el.Seat_Id.toString().indexOf(i+4) || el.Seat_Id.toString().indexOf(i+5)
                || el.Seat_Id.toString().indexOf(i+6) || el.Seat_Id.toString().indexOf(i+7) || el.Seat_Id.toString().indexOf(i+8) || el.Seat_Id.toString().indexOf(i+9) || el.Seat_Id.toString().indexOf(i+10);
        });
        var seatBought = newArray.filter(function (el) {
          return el.Status.toString().indexOf(1) > -1;
        });
        lengthSeat =seatBought.length;
    }
      if(dataSeatRow){
    return (
        <div className="bg-modal" style={{display: infoRoom ? 'flex' : 'none' }}>
            <div className="modal-cinema" >
                <div className="close" onClick={function(event){modalCloseDetail(false)}}>+</div>
                <h3>ROOM 1: Jujutsu Kaisen 0</h3>
                <div className='size-canvas'>
                <ul class="showcase">
                <li>
                    <div class="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div class="seat occupied"></div>
                    <small>{lengthSeat}/100 Seat</small>
                </li>
                <li>
                    <div class="seat occupied"></div>
                    <small>Occupied</small>
                </li>
                </ul>

                    <div class="container">
                    <div class="screen"></div>
                    {React.Children.toArray(
                    dataSeatRow.result.sort(compare).map(d=>(
                     <Seat seatId={d.Seat_Id} seatName={d.Room_Name}/>
                    )))}
                    </div>
                </div>
            </div>
        </div>
    )}
}
export default InfoRapchieu;
