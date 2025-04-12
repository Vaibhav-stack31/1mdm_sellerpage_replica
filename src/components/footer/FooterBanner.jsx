import React from 'react';
import footerbanner from '../../assets/footerbanner.png';

const FooterBanner = () => {
    return (
        <div
            className="w-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${footerbanner})` }}
        >
            <div className="flex flex-col items-center text-center px-4 py-12 sm:px-6 md:px-12 lg:px-28 lg:py-20 gap-6 max-w-screen-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-snug">
                    Ready to Grow Your Business?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-white text-[#ED1C24] text-lg font-semibold px-6 py-2 rounded-full transition hover:-translate-y-1 hover:shadow-md">
                        Start Selling
                    </button>
                    <button className="text-white border text-lg font-semibold border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#ED1C24] transition hover:-translate-y-1">
                        Chat with consultant
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FooterBanner;
