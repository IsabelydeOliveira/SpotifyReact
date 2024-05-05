
import  spotifyHeart  from "@/imagens/spotifyHeart.png";
import React, { useEffect,useState } from 'react';


const Playlists = () => {
  const [token, setToken] = useState('');


  useEffect(()=>{
    const client_id = '3446e2658000467ba30501c7820fbb4f';
    const client_secret = '572cf24c431847d78a573e7aec987bc6';
    const redirect_uri = 'http://localhost:5173/home';

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if(code){
       const requestBody = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
      });

      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
        },
        body: requestBody.toString()
      }).then(response => response.json()).then(data => {
        setToken(data.access_token);
      }).catch(error => {
        console.error('Erro ao obter token de acesso:', error);
      });
    
    }
  },[]);


  return (
    <div>
      <h1 className="font-semibold text-4xl mt-8">TOP10 Playlist Brasil</h1>
              <div className="grid grid-cols-8 gap-4 mt-4">
              <a href="" className="bg-white/5 p-3 rounded flex flex-col">
                  <img className="w-full" src={spotifyHeart} alt="spotifyHeart" />
                  <strong className="w-96">Nome da Playlist</strong>
                  <span className="text-sl text-zinc-500">Descrição da playlist</span>
                  <span className="text-sm text-zinc-500">Gênero</span>
              </a>
              <div>
      {token ? (
        <p>Token de acesso: {token}</p>
      ) : (
        <p>nao</p>
      )}
    </div>
            </div>
    </div>
  );
};

export default Playlists;