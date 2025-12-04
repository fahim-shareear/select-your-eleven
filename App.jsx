import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayer from './componants/Availableplayers/AvailablePlayer';
import Navbar from './componants/Navbar/Navbar';
import SelectedPlayers from './componants/Selectedplayers/SelectedPlayers';
import { ToastContainer } from 'react-toastify';




const fetchPlayers = async () =>{
  const res = await fetch('/players.json');
  return res.json()
}

const playerPromise = fetchPlayers();

function App() {
  const [availBalance, setBalance] = useState(1000000);
  const [purchasedPlayers, setPurchasePlayers] = useState([])
  // console.log(purchasedPlayers);
  const [toggle, setToggle] = useState(true);

  const deletePlayer = (p) =>{
    const filteredPlayers = purchasedPlayers.filter(ply => ply.id !== p.id);
    // console.log(filteredPlayers);
    setPurchasePlayers(filteredPlayers);
    setBalance(availBalance + p.price);
  }

  return (
    <>
    <Navbar availBalance={availBalance}></Navbar>
    <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-15 mb-5 sticky top-[80px] bg-white z-40 p-4 rounded-2xl shadow'>
      <h1 className='font-bold'>{toggle === true? "Available Players" : `Selected Players(${purchasedPlayers.length}/6)`}</h1>
      <div className='flex items-center gap-0'>
        <button className={`p-2 text-[15px] font-medium border cursor-pointer border-gray-400 rounded-l-xl border-r-0 ${toggle === true? "bg-[#E7FE29]" : ""}`} onClick={() => setToggle(true)}>Available</button>
        <button className={`p-2 text-[15px] font-medium border cursor-pointer border-gray-400 rounded-r-xl border-l-0 ${toggle === false? "bg-[#E7FE29]": ""}`} onClick={() => setToggle(false)}>Selected <span>({purchasedPlayers.length})</span></button>
      </div>
    </div>

    {
      toggle === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl flex items-center mx-auto"></span>}>
                        <AvailablePlayer playerPromise={playerPromise} availBalance={ availBalance } setBalance={setBalance} purchasedPlayers={purchasedPlayers} setPurchasePlayers={setPurchasePlayers}></AvailablePlayer>
                      </Suspense> : <SelectedPlayers
                      purchasedPlayers= {purchasedPlayers} setPurchasePlayers={setPurchasePlayers} deletePlayer={deletePlayer}></SelectedPlayers>
    }
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
