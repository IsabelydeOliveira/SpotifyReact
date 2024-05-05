import { Search, Library } from "lucide-react";
import  spotifyHeart  from "@/imagens/spotifyHeart.png";

const NavBar = () => {
  return (
    <div className="h-[1000px]">
     <aside className="min-w-[300px] h-full bg-zinc-950 p-3">
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
    </div>
  );
};

export default NavBar;