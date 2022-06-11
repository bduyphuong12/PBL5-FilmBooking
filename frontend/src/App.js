import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Styles/App.css';
import Login from './Components/Popup/login/Login_form'
import Register from './Components/Popup/register/Register_form'
import Setting_form from './Page/UserAccount/setting/Setting_form';
import NavBar from './Components/PageLayout/Header/navbar';
import AboutUs from './Components/PageLayout/Footer/about-us';
import HomePage from './Page/HomePage/homepage';
import MovieDetail from './Page/MovieDetail/moviedetail';
import BookingTicket from './Page/Booking/bookticket';
import TableCornAndWater from './Page/Booking/CornAndWater/tableCornandWater';
import DoneBook from './Page/Booking/DoneBook/donebook';
import Movie from './Page/Movie/movie'
import ChooseSlotCopy from './Page/Booking/ChooseSlot/chooseslotcopy';
import AllMovie from './Page/Movie/AllMovie/allmovie';
function App() {
  return (
    <BrowserRouter className="App" > 
      <NavBar /> 
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route  path="/film-detail" component={() => <MovieDetail />} />
        <Route path="/booking" component={()=> <BookingTicket />} />
        <Route path="/cornAwater" component={() => <TableCornAndWater />} />
        <Route path="/doneBook" component={() => <DoneBook />} />
        <Route path="/login" component={() => <Login /> } />
        <Route path="/register" component={() => <Register /> } />
        <Route path="/setting" component={() => <Setting_form />} />
        <Route path="/allmovie" component={() => <AllMovie />} />
        <Route path="/cs" component={() => <ChooseSlotCopy />} />
      </Switch>
      
      <div className="App-footer " > 
          <AboutUs/>
      </div>
    </BrowserRouter>
  );
}

export default App;
