import NavBar from '@/navBar/navBar';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import  spotifyHeart  from "@/imagens/spotifyHeart.png";

function MusicsLike() {
  const [musics, setMusics] = useState([
    { id: 1, name: 'Music 1', tempo:'descripsss', genero:'genero'},
    { id: 2, name: 'Music 2', tempo:'descripsss', genero:'genero'},
    { id: 3, name: 'Music 3', tempo:'descripsss', genero:'genero'},
    { id: 4, name: 'Music 4', tempo:'descripsss', genero:'genero'},
    { id: 5, name: 'Music 5', tempo:'descripsss', genero:'genero'},

  ]);
  return (
    <div className="bg-zinc-900  flex flex-col text-zinc-50">
      <div className="flex flex-1">
        <div className='min-h-[100px]'>
           <NavBar/> 
        </div>
        
        <main className="flex flex-col">
        <div className=" h-16 text-zinc-50 bg-indigo-800 mix-w-[100px]">
          <div className="m-4 ">
            <div className=" w-40 h-10 m-2 bg-zinc-50/70 text-zinc-950 rounded-full text-center text-base font-semibold content-center">
              <p>Músicas curtidas</p>
            </div>
            {musics.map((music) => ( 
           <div className='m-2 grid grid-cols-5'>
            <div className='w-[1300px] ml-4 h-24 flex flex-row p-4 bg-black rounded-lg'>
              <div className='w-[70px] bg-white ml-2 rounded-lg'>
                <p className=''>
                <img className="w-[70px] h-[65px] rounded-lg" src={spotifyHeart} alt="spotifyHeart"  />
                </p>
              </div>
              <div className='w-[800px] ml-2'>
                <p className='ml-20 mt-4'>{music.name}</p>
              </div>
              <div className='w-[200px] ml-2'>
                <p className='m-5'>{music.tempo}</p>
              </div>
              <div className='w-[100px] ml-2'>
              <p className='m-5'>

                <FaHeart/>
              </p>
              </div>
            </div>
           </div>
            ))}
            </div>
        </div>
          <div className="flex-1  min-w-[1600px] p-6 text-zinc-50">
        </div>
        </main>
      </div>
      
    </div>
  )
}

export default MusicsLike
