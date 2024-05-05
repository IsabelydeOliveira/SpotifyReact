
import  spotifyHeart  from "@/imagens/spotifyHeart.png";
import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import queryString from 'query-string';

// const getTokenFromUrl = (): Params => {
//   return window.location.hash.substring(1)
//     .split("&")
//     .reduce((initial: Params, item) => {
//       const parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//       return initial;
//     }, {});
// }

const Playlists = () => {  
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState('');
  const client_id = '3446e2658000467ba30501c7820fbb4f';
  const client_secret = 'd1a93de64bc44fa9b0c05887332784e6';
  const redirect_uri = 'http://localhost:5173/home';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (!code ) {
      setError('state_mismatch');
      return;
    }

    const fetchData = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`
        },
        body: queryString.stringify({
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        })
      });

      const data = await response.json();

      if (response.ok) {
        setAccessToken(data.access_token);
      } else {
        setError(data.error);
      }
    };

    fetchData();
  }, []);
 
    const [playlists, setPlaylists] = useState([
      { id: 1, name: 'Playlist 1', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 2, name: 'Playlist 2', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 3, name: 'Playlist 3', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 4, name: 'Playlist 4', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 5, name: 'Playlist 5', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 6, name: 'Playlist 6', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 7, name: 'Playlist 7', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 8, name: 'Playlist 8', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 8, name: 'Playlist 9', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
      { id: 10, name: 'Playlist 10', descricao:'descripsss', genero:'genero', songs: ['Música 1', 'Música 2'] },
    ]);    
  

  return (
    <div>
      <p>{accessToken}</p>
      <h1 className="font-semibold flex flex-row text-4xl mt-8">TOP10 Playlist Brasil</h1> 
         <div className="">
              <div className="grid grid-cols-5 mt-6"> 
        {playlists.map((playlist) => (         
              <div key={playlist.id} className="bg-white/5 p-3 rounded flex flex-col my-4 mx-2">
                  <Link to="/playlist">
                  <img className="w-full " src={spotifyHeart} alt="spotifyHeart" />
                  </Link>
                  <span className="w-96">{playlist.name}</span>
                  <span className="text-sl text-zinc-500">{playlist.descricao}</span>
                  <span className="text-sm text-zinc-500">{playlist.genero}</span>
             
              </div> 
          
          ))} 
              </div>            
          </div>
      </div>
  );
};

export default Playlists;