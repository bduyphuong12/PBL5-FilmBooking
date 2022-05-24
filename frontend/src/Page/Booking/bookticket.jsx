import React, { Fragment, useState, useEffect } from "react";
import ChooseSlot from "./ChooseSlot/chooseslot";
import Checkout from "./CheckOut/checkout";
import CornAndWater from "./CornAndWater/cornandwater"

export default function BookingTicket() {
  
  
  return (
    <Fragment>
      <div className="container-fluid bg-light" style={{ paddingTop: 20 }}>
        <div className="bookTicket__content row mt-5">
          <ChooseSlot
            
          />
          <Checkout
            
          />
          {/* <CornAndWater /> */}
        </div>
      </div>
    </Fragment>
  );
}
