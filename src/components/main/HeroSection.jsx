import React, { useEffect, useState, useRef } from 'react';
import heroImg from '../../assets/hero.png';

const useAnimatedCounter = (maxValue, duration = 6000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const startTimeRef = useRef(null);

    useEffect(() => {
        const step = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;

            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);
            const targetCount = Math.floor(progress * maxValue);

            if (targetCount > countRef.current) {
                countRef.current = targetCount;
                setCount(targetCount);
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(maxValue);
                countRef.current = maxValue;
            }
        };

        requestAnimationFrame(step);
    }, [maxValue, duration]);

    return count;
};

const HeroSection = () => {
    const countBuyers = useAnimatedCounter(26000000);
    const countInquiries = useAnimatedCounter(400000);
    const countCountries = useAnimatedCounter(200);

    return (
        <section
            className="flex flex-col lg:h-[500px] lg:justify-between lg:flex-row items-center bg-cover bg-center bg-no-repeat px-6 py-12 lg:px-28 lg:py-20 gap-10 mb-9"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-[#212529] text-xl md:text-2xl font-medium mb-1">
                    Sell on 1mdm.com
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-[41.6px] leading-snug text-[#212529] font-semibold mb-10 md:mb-16">
                    Reach millions of B2B buyers globally
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button className="bg-[#ED1C24] text-white px-6 py-2 rounded-full transition hover:-translate-y-1 hover:shadow-md">
                        Start Selling
                    </button>
                    <button className="text-[#ED1C24] border border-[#ED1C24] px-6 py-2 rounded-full hover:bg-[#ED1C24] hover:text-white transition hover:-translate-y-1">
                        Chat with consultant
                    </button>
                </div>
            </div>

            <div className="text-center lg:text-left space-y-6">
                <div>
                    <h2 className="font-medium text-2xl md:text-3xl">
                        {countBuyers.toLocaleString()}
                    </h2>
                    <p className="text-sm md:text-md mt-2">active buyers globally</p>
                </div>
                <div>
                    <h2 className="font-medium text-2xl md:text-3xl">
                        {countInquiries.toLocaleString()}
                    </h2>
                    <p className="text-sm md:text-md mt-2">product inquiries daily</p>
                </div>
                <div>
                    <h2 className="font-medium text-2xl md:text-3xl">
                        {countCountries.toLocaleString()}
                    </h2>
                    <p className="text-sm md:text-md mt-2">countries and regions represented</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
