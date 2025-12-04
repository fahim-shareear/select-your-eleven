import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayer from './componants/Availableplayers/AvailablePlayer';
import Navbar from './componants/Navbar/Navbar';
import SelectedPlayers from './componants/Selectedplayers/SelectedPlayers';


const fetchPlayers = async () =>{
  const res = await fetch('/players.json');
  return res.json()
}


function App() {
  const [toggle, setToggle] = useState(true);
  const playerPromise = fetchPlayers();
  return (
    <>
    <Navbar></Navbar>
    <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='font-bold'>{toggle === true? "Available Players" : "Selected Players"}</h1>
      <div className='flex items-center gap-0'>
        <button className={`p-2 text-[15px] font-medium border border-gray-400 rounded-l-xl border-r-0 ${toggle === true? "bg-[#E7FE29]" : ""}`} onClick={() => setToggle(true)}>Available</button>
        <button className={`p-2 text-[15px] font-medium border border-gray-400 rounded-r-xl border-l-0 ${toggle === false? "bg-[#E7FE29]": ""}`} onClick={() => setToggle(false)}>Selected <span>(0)</span></button>
      </div>
    </div>

    {
      toggle === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl flex items-center mx-auto"></span>}>
                        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
                      </Suspense> : <SelectedPlayers></SelectedPlayers>
    }
    </>
  )
}

export default App
