import React, { Fragment, useState, useEffect } from "react";
import CornAndWater from "./CornAWater/cornandwater";
import Checkout1 from "./chekcout1/checkout1";


export default function TableCornAndWater() {
  
  
  return (
    <div>
      <div className="container-fluid bg-light" style={{ paddingTop: 20 }}>
        <div className="bookCorn__content row mt-5">
          <CornAndWater
            
          />
          
          <Checkout1 />
        </div>
      </div>
    </div>
  );
}
