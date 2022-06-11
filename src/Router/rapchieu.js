import React from 'react'


const Rapchieu = ({modalOpenDetail,roomId,roomName}) => {
  return (
    <div className='bg-items-rapchieu' onClick={function(event){modalOpenDetail(true,roomId)}}>
        <div className='bg-image' >
            <div className='image-items' />
        </div>
        <div className='title-items'>
            <span className='title-center'>{roomName}</span>
        </div>
    </div>
  )
}
export default Rapchieu;
