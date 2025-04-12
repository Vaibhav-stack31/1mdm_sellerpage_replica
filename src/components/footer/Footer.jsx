import React from 'react';
import w_logo from '../../assets/w_logo.png';

const Footer = () => {
    return (
        <footer className="flex flex-wrap justify-around bg-black py-16 text-gray-400 h-auto lg:h-[29rem]">

            <div className="mb-12 lg:mb-0">
                <img src={w_logo} alt="1MDM Logo" className="w-40" />
                <h2 className="mt-6 text-[1rem]">
                    One Medical Devices <br />
                    Market Place
                </h2>
            </div>

            <div className="mb-12 lg:mb-0">
                <h2 className="text-white text-xl mb-8">Platform</h2>
                <ul className="flex flex-col gap-4">
                    {['Sell on 1MDM', 'Pricing', 'About us', 'Our Story', 'Careers', 'Blog', 'Brands'].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:text-white transition-colors duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-12 lg:mb-0">
                <h2 className="text-white text-xl mb-8">Press Room</h2>
                <ul className="flex flex-col gap-4 mb-8">
                    <li className="cursor-pointer hover:text-white transition-colors duration-200">Images & B-roll</li>
                </ul>

                <h2 className="text-white text-xl mb-8">Policies</h2>
                <ul className="flex flex-col gap-4">
                    {['Terms of Service', 'Privacy Policy', 'Delivery Information'].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:text-white transition-colors duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-12 lg:mb-0">
                <h2 className="text-white text-xl mb-8">Reach Us</h2>
                <ul className="flex flex-col gap-4">
                    {['Corporate Information', 'Contact Us'].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:text-white transition-colors duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
