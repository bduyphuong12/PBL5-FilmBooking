import axios from 'axios';
import SeatNum from './seatNum'
import React, { Fragment, useEffect, useState } from "react";
import './seat.css'
const Seat = ({seatId,seatName}) => {
  
  

    return (
      <div >
         <SeatNum  
          
         seatId={seatId} seatName={seatName} />
      </div>
    ) 
  
 
}

export default Seat