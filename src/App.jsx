import React, { useState, useEffect } from 'react'
import GetTest from './components/getTest';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
 
  
  return (
    <>
      test Page
      <Outlet />
    </>
  )
}

export default App
