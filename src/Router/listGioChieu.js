import React from 'react'

export default function ListGioChieu({openGC}) {
  return (
    <>
      <span className='item-giochieu' onClick={function(event){openGC(true)}}>17:00 - 19:10</span>
    </>
  )
}
