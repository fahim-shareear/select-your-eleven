import React from 'react';
import Selectedcard from '../selectedcard/Selectedcard';


const SelectedPlayers = ({purchasedPlayers}) => {
    console.log(purchasedPlayers);
    return (
        <div className="max-w-[1200px] mx-auto border border-red-400 rounded-2xl p-4">
            {
                purchasedPlayers.map(player => <Selectedcard player={player} key={player.id}></Selectedcard>)
            }
        </div>
    );
};

export default SelectedPlayers;