import React,{useState,useEffect} from 'react'
import axios from 'axios'

const SeatNum = ({seatId,seatName}) => {
  const [dataSeatCol, setDataCol] = useState(null);
     useEffect(() => {
        const getSeatCol = async () => {
            await axios.get(`/seatNo/getBySeatId/${seatId}`).then(res => {
              setDataCol(res.data);
            })
          }
          getSeatCol();
     },[])
  const compare =( a, b ) => {
    if ( parseInt(a.Seat_No) < parseInt(b.Seat_No) ){
      return -1;
    }
    if ( parseInt(a.Seat_No) > parseInt(b.Seat_No) ){
      return 1;
    }
    return 0;
  }
  if(dataSeatCol){
  return (
    <>
      {React.Children.toArray(
          dataSeatCol.result.sort(compare).map(d=>(
        <div class={d.Status === '1'?"seat occupied":"seat"} >{seatName}{d.Seat_No}</div>
      )))}
    </>
  )}
}

export default SeatNum