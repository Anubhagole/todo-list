import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx';
import Todo from './components/Todo.jsx';
import { v4 as uuidv4 } from 'uuid';

// Routing 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element: <><Navbar/><Todo/></>
    },
    {
      path : '/about',
      element: <><Navbar/><About/></>
    },
  ])
 
  return (
    <>
      <RouterProvider router= {router}/>
      
    </>
  )
}

export default App
