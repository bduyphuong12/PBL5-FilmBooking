import React,{useState} from 'react'
import Rapchieu from '../Router/rapchieu'
import '../styles/qlirap.css'
import InfoRapchieu from '../modals/infoRapchieu'

function QliRap (){
  const [infoRoom, setStateE] = useState(false)
  const openRoomDetail = value => setStateE(value);
  const closeRoomDetail = value => setStateE(value);
  
  return (
    <main>
    <div className='bg-qlirap'>
      <Rapchieu modalOpenDetail={openRoomDetail}/>
      <Rapchieu modalOpenDetail={openRoomDetail}/>
      <Rapchieu modalOpenDetail={openRoomDetail}/>
      <Rapchieu modalOpenDetail={openRoomDetail}/>
      <Rapchieu modalOpenDetail={openRoomDetail}/>
    </div>
    <InfoRapchieu infoRoom={infoRoom} modalCloseDetail={closeRoomDetail}/>
    </main>
  )
}
export default QliRap;