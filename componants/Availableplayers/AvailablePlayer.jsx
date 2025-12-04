import React, { use } from 'react';
import '../../../src/App.css';
import playerDash from '../../assets/Group.png';
import flagDash from '../../assets/Vector.png';

const AvailablePlayer = ({playerPromise}) => {
    const player = use(playerPromise);
    // console.log(player);
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-10">
            {
                player.map(p => <div className='card-container' key={p.id}>
                <div className="card bg-white-100 shadow-sm">
                    <figure className="rounded-2xl shadow">
                        <img src={p.img} 
                        alt="Player" 
                        className='p-4 w-[380px] h-[330px] rounded-2xl shadow'/>
                    </figure>
                    <div className="card-body shadow">
                        <div className='card-title flex items-center gap-2'>
                            <img src={playerDash} alt="" />
                            <h2 className="card-title font-bold text-black">{p.name}</h2>
                        </div>
                        <div className='flex items-center justify-between pb-1 border-b-2'>
                            <div className='flex items-center gap-2.5'>
                                <img src={flagDash} className="mt-4"/>
                                <h3 className='text-gray-500 mt-4 font-medium'>{p.country}</h3>
                            </div>
                            <div className='text-center bg-gray-100 rounded-md mt-4'>
                                <h3 className='text-black font-medium p-2 text-[15px]'>{p.playing_role}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="text-black font-bold text-1xl">Rating</h3>
                            <h3 className="text-black font-bold text-1xl">{p.rating}</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="text-black font-bold text-1xl">{p.batting_style}</h3>
                            <h3 className="text-gray-500 font-medium text-1xl">{p.bowling_style}</h3>
                        </div>
                        <div className="card-actions justify-between items-center mt-4">
                            <h3 className="text-black font-bold mt-4">Price <span>$</span> {p.price}</h3>
                            <button className="btn bg-white text-gray-600 border-gray-300 rounded-2xl shadow-3xl">Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default AvailablePlayer;