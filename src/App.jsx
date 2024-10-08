import React, { useState, useEffect } from 'react'
import GetPhoto from './components/getPhoto';
import { Outlet } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/Footer';
import './App.css'

function App() {
 
  
  return (
    <>
    <Header/>
      <Outlet />
    <Footer/>
    </>
  )
}

export default App
