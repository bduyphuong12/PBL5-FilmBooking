import React,{useState,useEffect} from 'react'
import axios from 'axios'

const SeatNum = ({seatId,seatName}) => {
  const [dataSeatCol, setDataCol] = useState(null);
     useEffect(() => {
        const getSeatCol = async () => {
            await axios.get(`/seatNo/getBySeatId/${seatId}`).then(res => {
              setDataCol(res.data.result);
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
  console.log(dataSeatCol)
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive)
  };
  const renderGhe = () =>{

  }
  if(dataSeatCol){
  return (
    <div >
      {React.Children.toArray(
          dataSeatCol.sort(compare).map(d=>(
        <div 
        class={
          d.Status === '1'?"seat occupied":isActive ? "seat occupied" : "seat"
          
        } 
        onClick={handleClick}
       
        >{seatName}{d.Seat_No}</div>
      )))}
    </div >
  )}
}

export default SeatNum