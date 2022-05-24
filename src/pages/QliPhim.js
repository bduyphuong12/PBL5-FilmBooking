import React,{useState} from 'react'
import '../styles/qliphim.css'
import {MdAddToQueue} from 'react-icons/md'
import Carousel from '../Router/carousel'
import DetailFilm from '../modals/detailFilm'
import AddFilm from '../modals/addFilm'

export default function QliPhim() {
  const [infoFilm,setInfo] = useState(false);
  const openFilm = value => setInfo(value); 
  const closeFilm = value => setInfo(value); 

  const [addFilm,setAddModal] = useState(false);
  const changeModal = value => setAddModal(value); 
  return (
    <main>
      <div className='bg-qliphim'>
        <input type="text" id="myInput" placeholder=" Tìm kiếm phim" />
        <button className="btn1" onClick={function(event){changeModal(true)}}><MdAddToQueue size={25}/></button>
        <div className='bg-carousel'>
          <Carousel openFilm={openFilm}/>
        </div>
        <DetailFilm infoFilm={infoFilm} modalCloseFilm={closeFilm} />
        <AddFilm addFilm={addFilm} modalClose={changeModal}/>
      </div>
    </main>
  )
}
