import React from 'react';
import deleButton from '../../assets/Frame.png';

const Selectedcard = ({player, deletePlayer}) => {
    const handleRemove = () =>{
        deletePlayer(player);
    }
    return (
        <div>
            <div className='flex items-center justify-between p-4 shadow rounded-2xl mb-10'>
                <div className='flex items-center gap-5'>
                    <img src={player.img} className='w-[80px] h-[80px] rounded-2xl'/>
                    <div>
                        <h2 className='text-xl font-medium'>{player.name}</h2>
                        <p className="font-medium text-gray-400">{player.playing_role}</p>
                        <p className='text-gray-400'>{player.batting_style}</p>
                        <p className='text-gray-400'>{player.bowling_style}</p>
                        <p className='text-gray-400'>{player.price}</p>
                    </div>
                </div>
                <div onClick={() => handleRemove()}>
                    <img src={deleButton}/>
                </div>
            </div>
        </div>
    );
};

export default Selectedcard;