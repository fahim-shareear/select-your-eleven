import React from 'react';
import footerBanner  from '../../assets/bg-shadow.png';

const Footer = () => {
    return (
        <>
            <div className='mt-20 border-2 border-red-500 bg-[#060919'>
                <div className="max-w-[1200px] mx-auto border-4 border-red-500 h-[900px] bg-[#060919]">
                    <div className='bg-white'>
                        <img src={footerBanner} alt="" className='rounded-md w-[800px] mx-auto pt-40'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;