import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login.tsx';
import Home from './pages/home.tsx';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
