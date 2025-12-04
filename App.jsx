import { Suspense } from 'react';
import './App.css'
import AvailablePlayer from './componants/Availableplayers/AvailablePlayer';
import Navbar from './componants/Navbar/Navbar';
import SelectedPlayers from './componants/Selectedplayers/SelectedPlayers';


const fetchPlayers = async () =>{
  const res = await fetch('/players.json');
  return res.json()
}


function App() {
  const playerPromise = fetchPlayers();
  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-infinity loading-xl flex items-center mx-auto"></span>}>
      <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
    </Suspense>
    <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
