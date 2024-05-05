import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login.tsx';
import Home from './pages/home.tsx';
import Music from './musics/music.tsx';
import MusicsLike from './musicsLike/musicsLike.tsx';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './global.css'
import Playlists from './playlists/playlist.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/musicsLike" element={<MusicsLike/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/playlist" element={<Playlists/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
