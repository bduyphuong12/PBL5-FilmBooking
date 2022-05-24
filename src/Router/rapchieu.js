import React from 'react'


const Rapchieu = ({modalOpenDetail}) => {
  return (
    <div className='bg-items-rapchieu' onClick={function(event){modalOpenDetail(true)}}>
        <div className='bg-image' >
            <div className='image-items' />
        </div>
        <div className='title-items'>
            <span className='title-left'>Room 1 &nbsp;&nbsp;&nbsp;|</span>
            <span className='title-right'>35/80 Seat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |<a style={{color: "green"}}>&nbsp;&nbsp;&nbsp; Open</a></span>
        </div>
    </div>
  )
}
export default Rapchieu;
