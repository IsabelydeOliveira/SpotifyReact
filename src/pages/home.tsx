import NavBar from '@/navBar/navBar';
import Playlists from '@/playlists/playlist';

function Home() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex flex-col text-zinc-50">
      <div className="flex ">
        <div className='max-h-[500px]'>
           <NavBar/> 
        </div>
        
        <main className="flex h-screen bg-zinc-900 flex-col">
        <div className=" h-16 text-zinc-50 bg-indigo-800">          
          <div className="m-4 w-[1300px]">
            <div className=" w-20 h-10 m-2 bg-zinc-50/70 text-zinc-950 rounded-full text-center text-base font-semibold content-center">
              <p>Playlists</p>
            </div>
            <Playlists/>
            </div>
        </div>
          <div className="flex-1  min-w-[1600px] p-6 text-zinc-50">
        </div>
        </main>
      </div>
      
    </div>
  )
}

export default Home
