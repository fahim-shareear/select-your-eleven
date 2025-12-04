import React from 'react';
import navImg from '../../assets/logo.png';
import dollarImg from '../../assets/dollar1.png';
import bannerBg from '../../assets/bg-shadow.png';
import bannerMain from '../../assets/banner-main.png';
import '../../App.css';

const Navbar = ({availBalance}) => {
    return (
        <>
            <div className="navbar max-w-[1200px] mx-auto sticky top-0 z-50 bg-white">
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
            <div className='banner max-w-[1200px] mx-auto border-2 border-red-500 bg-black rounded-2xl mt-10'>
                <img src={bannerBg} alt="" className='rounded-2xl'/>
                <div className="banner_content">
                    <img src={bannerMain} alt="" />
                    <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p>Beyond Boundaries Beyond Limits</p>
                    <div className='w-[240px] flex items-center justify-center h-[70px] border-2 border-yellow-500 mt-8 rounded-3xl'>
                        <button className='text-2xl text-black font-bold p-2 bg-yellow-500 rounded-2xl'>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;