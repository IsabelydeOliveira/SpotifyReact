import  spotify_logo  from "@/imagens/Spotify_logo.png";

function Login() {
const client_id = '3446e2658000467ba30501c7820fbb4f';
// const client_secret = 'd1a93de64bc44fa9b0c05887332784e6';
const redirect_uri = 'http://localhost:5173/home';
const escopes = 
[
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-library-modify",
    "user-library-read",

];

    function handleLogin() {
    const scope = escopes.join('%20'); 
    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${encodeURIComponent(redirect_uri)}`;

    
        window.location.href = url; 
    }



  return (
    
    <div className="flex flex-row">
    <div className="w-[600px] bg-green-500">
        <h2 className="text-white p-20 text-4xl font-bold mt-20">
            Entre agora para começar a curtir as suas músicas favoritas
        </h2>
    </div>
    <div className="w-screen h-screen bg-black">
        <div className=" mt-20 mx-[500px]">
       <img className=" w-96 h-24 " src={spotify_logo} alt="spotifyHeart" />     
       <div className="text-lg font-semibold text-zinc-100 bg-green-500 rounded-full">
       <button className="bg-gree-50 text-white px-10 py-5 text-2xl block mx-[100px] mt-96" onClick={handleLogin}>Entrar</button>
       </div>

       {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes> */}
        </div>
    
    </div>
   </div>
   
  )
}

export default Login
