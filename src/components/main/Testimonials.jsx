import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/testimonial';

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full bg-gray-50 py-14">
            <h2 className="text-4xl font-semibold mb-10 text-center text-red-900">Success stories from 1mdm.com sellers</h2>

            <div className="max-w-4xl mx-auto relative shadow-lg">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-full bg-white shadow-md p-6 sm:p-10 flex flex-col items-center text-center gap-4 rounded-2xl"
                            >
                                <FaQuoteLeft className="text-[#ED1C24] text-3xl" />
                                <p className="text-gray-600 text-lg italic">"{testimonial.quote}"</p>
                                <img
                                    src={testimonial.image}
                                    alt={`Testimonial ${index}`}
                                    className="w-48 h-48 rounded-full border-2 border-[#ED1C24] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute right-12 top-[95%] ml-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-10 p-2 shadow hover:bg-gray-100 transition-all duration-89+300"
                    aria-label="Previous Slide"
                >
                    <FaChevronLeft className="text-[#ED1C24]" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-[95%] mr-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-10 p-2 shadow hover:bg-gray-100 transition-all duration-300"
                    aria-label="Next Slide"
                >
                    <FaChevronRight className="text-[#ED1C24]" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
