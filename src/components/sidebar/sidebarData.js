import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {CgLogOut} from 'react-icons/cg';
import {GiTheater,GiFilmProjector} from 'react-icons/gi'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome  />,
    cName: 'nav-text'
  },
  {
    title: 'Quan Li Rap',
    path: '/qlirap',
    icon: <GiFilmProjector />,
    cName: 'nav-text'
  },
  {
    title: 'Quan Li Phim',
    path: '/qliphim',
    icon: <GiTheater />,
    cName: 'nav-text'
  },
  {
    title: 'Quan Li User',
    path: '/qliuser',
    icon: <FaIcons.FaRegUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/',
    icon: <CgLogOut />,
    cName: 'nav-text'
  }
];
