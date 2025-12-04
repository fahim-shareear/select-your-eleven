import React, { use } from 'react';
import '../../../src/App.css';
import Player from './Player';


const AvailablePlayer = ({playerPromise}) => {
    const player = use(playerPromise);
    // console.log(player);
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 mb-10">
            {
                player.map(p => <Player p={p} key={p.id}></Player>)
            }
        </div>
    );
};

export default AvailablePlayer;