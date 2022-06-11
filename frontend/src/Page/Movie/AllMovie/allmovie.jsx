import React, {useEffect,useState} from "react";
import './allmovie.scss'
import axios from 'axios';
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function AllMovie() {
  var moment = require("moment");
  const [listFilm,setListFilm] = useState(null);

  useEffect(() => {
    const getListFilm = () => {
      axios.get('/phim/list').then(res => {
        setListFilm(res.data);
      })
    }
    getListFilm();
  },[]);
  
  if(listFilm){
    return (
        <div className="pageallfilm">
        {
              React.Children.toArray(
                listFilm.result.map(d => (
        <div className="movie-card col-md-6 col-sm-4">
          
                    <NavLink className="card-link" to={'/film-detail/'+ d.id_phim}>
            <div className="card-content">
              <div className="content-left">
                <div className="left-header-movie">
                  <h2 className="movie-name">{d.ten_phim}</h2>
                  <p className="during-time">{d.thoi_luong}</p>
                  
                </div>
                <div className="below-header">
                  <p className="description">{d.noi_dung}</p>
                </div>
              </div>
              <LazyLoad throttle={200}>
                <CSSTransition
                  key="1"
                  transitionName="fade"
                  transitionAppear
                  transitionAppearTimeout={1000}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <div
                    className="content-right"
                    style={{ backgroundImage: `url(${d.poster})` }}
                  ></div>
                </CSSTransition>
              </LazyLoad>
            </div>
          </NavLink> 
        </div>
         )))
        }
        </div>
        
      );
  }
 
}
