import React from 'react';
import navImg from '../../assets/logo.png';
import dollarImg from '../../assets/dollar1.png'

const Navbar = ({availBalance}) => {
    return (
        <>
            <div className="navbar max-w-[1200px] mx-auto sticky top-0 z-50 bg-white-100 shadow">
                <div className="flex-1">
                    <a className="text-xl">
                    <img src={navImg} alt="" className='w-[60px] h-[60px]'/></a>
                </div>
                <div className="flex gap-2 items-center border border-gray-300 rounded-2xl p-2 shadow">
                    <span className='text-black font-bold'>{availBalance}</span>
                    <span className='text-black font-bold'>Coin</span>
                    <img src={dollarImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Navbar;