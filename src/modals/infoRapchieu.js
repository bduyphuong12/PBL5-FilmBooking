import React from 'react'


 const InfoRapchieu = ({infoRoom,modalCloseDetail,roomData}) => {
    return (
        <div className="bg-modal" style={{display: infoRoom ? 'flex' : 'none' }}>
            <div className="modal-cinema" >
                <div className="close" onClick={function(event){modalCloseDetail(false)}}>+</div>
                <h3>ROOM 1: Jujutsu Kaisen 0</h3>
                <div className='size-canvas'></div>
            </div>
        </div>
    )
}
export default InfoRapchieu;
