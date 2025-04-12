import React from 'react';
import { ShoppingCart, Headphones } from 'lucide-react';

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 flex-col items-end space-y-3 z-50 lg:block hidden">
            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white w-52 h-8 font-medium px-4 py-2 rounded-full shadow-lg transition">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Start Selling
            </button>

            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 h-8 w-52 rounded-full shadow-lg transition">
                <Headphones className="w-4 h-4 mr-2" />
                Customer Service
            </button>
        </div>
    );
};

export default FloatingButtons;
