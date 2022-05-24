
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Login from './components/login/login';
import QliRap from './pages/QliRap'
import QliPhim from './pages/QliPhim';
import QliUser from './pages/QliUser';
import './App.css';

function App() {

  if(localStorage.getItem('token')){
    return <Login />
  }
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={main} />
          <Route path='/qlirap' component={QliRap} />
          <Route path='/qliphim' component={QliPhim} />
          <Route path='/qliuser' component={QliUser} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
