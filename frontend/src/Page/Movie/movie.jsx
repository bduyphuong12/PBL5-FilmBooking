import React, { useState, useEffect } from "react";
import "./movie.scss";
import AllMovie from "./AllMovie/allmovie";
import axios from 'axios';

export default function Movie() {
  // const [loading, setLoading] = useState(true);
  // const [listFilm,setListFilm] = useState(null);

  // useEffect(() => {
  //   const getListFilm = () => {
  //     axios.get('/phim/list').then(res => {
  //       setListFilm(res.data);
  //     })
  //   }
  //   getListFilm();
  // },[]);
  // console.log(listFilm);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [danhSachPhimSearch, setDanhSachPhimSearch] = useState([]);
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // useEffect(() => {
  //   const results = listFilm.filter((phim) => {
  //     return phim.result[0].ten_phim.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   setDanhSachPhimSearch(results);
  // }, [searchTerm, listFilm]);

  // const renderDanhSachPhim = () => {
  //   return danhSachPhimSearch.map((phim, index) => {
  //     return <AllMovie listFilm={phim} key={index} />;
  //   });
  // };
   
      return (
        <>
        <div className="container all-movie">
          <div className="navbar-search">
                      <input type="text" class="navbar-search-input" id='navbar-search-input' placeholder="Search flim..."  
                      // value={searchTerm}
                      // onChange={handleChange}
                      />
                      <button class="navbar-search-btn"  >
                          <i class="fas fa-search navbar-search-btn-icon" id='navbar-search-btn-icon' alt="search" />
                      </button>
             </div>
          {/* <div className="row movielist-content">{renderDanhSachPhim()}</div> */}
          
        </div>
       <AllMovie />
        </>
        
      );
    
    
}
