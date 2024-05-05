import { Search, Library } from "lucide-react";
import  spotifyHeart  from "@/imagens/spotifyHeart.png";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div className="">
     <aside className=" h-[850px] bg-zinc-950 p-3">
          <nav className=" flex flex-col space-y-5">
          <div className="flex flex-center items-center gap-3 text-lg font-semibold text-zinc-100" >            
          <Search/>
          <form>
              <input className="bg-transparent" placeholder="Pesquise por playlists"></input>
            </form>
          </div>
          <div className="flex flex-center items-center gap-3 text-lg font-semibold text-zinc-100">  
          <Library/>
            <Link to="/home">
          Sua Blibloteca
            </Link>
          </div>         
          <nav className=" mt-10 pt-10 border-t border-zinc-800"></nav>
          <div>
            <div className="flex flex-row">          
          <Link to="/musicsLike">
          <img className="w-16 h-16" src={spotifyHeart} alt="spotifyHeart"  />
          </Link>
          <Link to="/musicsLike">
          <a className="flex flex-center items-center gap-3 ml-2 mt-4 text-lg font-semibold text-zinc-100"href="">
            Músicas Curtidas
          </a>
          </Link>
          </div>
        </div>
          </nav>
        </aside>
    </div>
  );
};

export default NavBar;