import React, { useState } from 'react'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import Lichchieu from '../Router/lichchieu'
import Giochieuphim from './giochieuphim';
import {AiFillStar} from 'react-icons/ai'
import {MdAccessTimeFilled} from 'react-icons/md'
import EditFilm from './editFilm';

export default function DetailFilm({infoFilm,modalCloseFilm,filmData}) {
    const [giochieu,setGiochieu] = useState(false);
    const openModal = val => setGiochieu(true);
    const closeModal = val => setGiochieu(false);

    const [editForm,setEForm] = useState(false);
    const changeEditForm = val => setEForm(val);

    const [openTrailer,setOpenTrailer] = useState(false);
    const changeOpenT = () => setOpenTrailer(!openTrailer);
  return (
    <div className="bg-cinema" style={{display: infoFilm ? 'flex' : 'none' }}>
        <div className="modal-film" >
            <div className="close-film" onClick={function(event){modalCloseFilm(false)}}>+</div>
            <div className='bg-film-item1'>
                <div className='image-film'><iframe style={{display: openTrailer ? "flex":"none"}} width="375" height="250" src="https://www.youtube.com/embed/-iun6KPT4SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button className={openTrailer? 'btn-trailer0':'btn-trailer'} onClick={function(event){changeOpenT()}}>{openTrailer?"Poster":"Trailer"}</button></div>
                <div className='info-film1'>
                    <a className='title-film0' >JUJUTSU KAISEN 0 </a>
                    <a className='title-film' style={{color: "#D2D2D2"}}><AiFillStar style={{color:"yellow",position:"relative",top:"3",marginRight:"3px"}} size={18} />9.4/10 </a>
                    <a className='title-film' style={{color: "#D2D2D2"}}><MdAccessTimeFilled style={{color:"lightblue",position:"relative",top:"3",marginRight:"3px"}} size={18}/>127 phút </a>
                    <FaEdit onClick={function(event){changeEditForm(true)}} className='icon-film' size={25} style={{position: "relative",top: 5,marginRight:"20px"}}/>
                    <RiDeleteBack2Fill className='icon-film' size={25} style={{position: "relative",top: 5}}/>
                </div>
                <div className='info-film2'>
                    <a className='title-info'>Diễn viên: <a className='text-info'>Uchiyama Koki, Nakamura Yuichi, Hanazawa Kana</a></a>
                    <a className='title-info'>Thể loại: <a className='text-info'>Hoạt hình</a></a>
                    <a className='title-info'>Đạo diễn: <a className='text-info'>Park Seong Ho</a></a>
                    <a className='title-info'>Nhà sản xuất: <a className='text-info'>Toho Company, Ltd</a></a>
                    <a className='title-info'>Nội dung: <a className='text-info'>Nhân vật chính của Chú Thuật Hồi Chiến là Okkotsu Yuta - nam sinh trung học giành được quyền kiểm soát một Linh hồn bị nguyền rủa cực kỳ mạnh mẽ. Cậu được Jujutsu Sorcerers đăng ký vào trường trung học Jujutsu tỉnh Tokyo để kiểm soát sức mạnh của mình. </a></a>
                </div>
            </div>
            <div className='bg-film-item2'>
                    <a className='title-lichchieu'>Lịch chiếu</a>
                    <div className='lichchieu'>
                        <Lichchieu openInfo={openModal}/>
                    </div>
            </div>
        </div>
        <Giochieuphim infogiochieu={giochieu} modalCloseInfo={closeModal} />
        <EditFilm infoModalFilm={editForm} modalClose={changeEditForm} />
    </div>
  )
}
