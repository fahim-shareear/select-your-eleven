import React from 'react';
import Selectedcard from '../selectedcard/Selectedcard';


const SelectedPlayers = ({purchasedPlayers, deletePlayer}) => {
    // console.log(purchasedPlayers);
    return (
        <div className="max-w-[1200px] mx-auto rounded-2xl p-4 shadow">
            {
                purchasedPlayers.map(player => <Selectedcard player={player} key={player.id} deletePlayer={deletePlayer}></Selectedcard>)
            }
        </div>
    );
};

export default SelectedPlayers;