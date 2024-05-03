
import { Search, Library } from "lucide-react";
import  spotifyHeart  from "./imagens/spotifyHeart.png";

function App() {

  return (
    <div className="bg-zinc-900 h-screen flex flex-col text-zinc-50">
      <div className="flex flex-1">
        <aside className="min-w-[300px] bg-zinc-950 p-3">
          <nav className=" flex flex-col space-y-5">
          <a className="flex flex-center items-center gap-3 text-lg font-semibold text-zinc-100" href="">
          <Search/>
         Input de pesquisa
          </a>
          <a className="flex flex-center items-center gap-3 text-lg font-semibold text-zinc-100"href="">
          <Library/>
          Sua Blibloteca</a>
          <nav className=" mt-10 pt-10 border-t border-zinc-800"></nav>
          <div>
            <div className="flex flex-row">
          <img className="w-16 h-16" src={spotifyHeart} alt="spotifyHeart" />
          <a className="flex flex-center items-center gap-3 ml-2 text-lg font-semibold text-zinc-100"href="">
            Músicas Curtidas
          </a>
          </div>
        </div>
          </nav>
        </aside>
        <main className="flex flex-col">
        <div className=" h-16 text-zinc-50 bg-indigo-800">
          <div className="m-4 ">
            <div className=" w-20 h-10 m-2 bg-zinc-50/70 text-zinc-950 rounded-full text-center text-base font-semibold content-center">
              <p>Playlists</p>
              </div>
              <h1 className="font-semibold text-4xl mt-8">TOP10 Playlist Brasil</h1>
              <div className="grid grid-cols-8 gap-4 mt-4">
              <a href="" className="bg-white/5 p-3 rounded flex flex-col">
                  <img className="w-full" src={spotifyHeart} alt="spotifyHeart" />
                  <strong className="w-96">Nome da Playlist</strong>
                  <span className="text-sl text-zinc-500">Descrição da playlist</span>
                  <span className="text-sm text-zinc-500">Gênero</span>
              </a>

            </div>

            </div>
        </div>
          <div className="flex-1  min-w-[1600px] p-6 text-zinc-50">
        </div>

        </main>
      </div>
      <footer className="bg-zinc-800 gap-4 border-t border-t-zinc-700 p-6"/>
    </div>
  )
}

export default App
