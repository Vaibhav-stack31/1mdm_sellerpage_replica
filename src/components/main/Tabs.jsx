import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tools } from '../../data/tools';

const Tabs = () => {
  const [selectedTool, setSelectedTool] = useState('Custom storefront');

  return (
    <div className="px-6 py-12 lg:px-20">
      <h2 className="text-4xl font-semibold mb-10 text-center text-red-900">
        Grow your business with a suite of tools built for you
      </h2>

      <div className="flex flex-col items-center lg:flex-row gap-10 gap-y-16">
        <motion.div
          className="w-full lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto border-l-0 lg:border-l-2 space-x-6 lg:space-x-0 lg:space-y-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {Object.keys(tools).map((tool) => (
            <div
              key={tool}
              className={`cursor-pointer font-semibold py-4 px-4 whitespace-nowrap transition-colors min-w-max
            ${selectedTool === tool
                  ? 'text-[#ED1C24] border-b-2 lg:border-b-0 lg:border-l-[6px] border-[#ED1C24]'
                  : 'text-gray-700 hover:text-[#ED1C24] hover:bg-[#f8f9fa]'
                }`}
              onClick={() => setSelectedTool(tool)}
            >
              {tool}
            </div>
          ))}
        </motion.div>

        <div className="lg:w-3/4 flex flex-col lg:flex-row items-center justify-between gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTool}
              className="max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-4xl font-medium mb-4">{tools[selectedTool].title}</h3>
              <p className="text-gray-600">{tools[selectedTool].description}</p>
            </motion.div>

            <motion.img
              key={tools[selectedTool].image}
              src={tools[selectedTool].image}
              alt="Tool visual"
              className="w-full max-w-md rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>

  );
};

export default Tabs;
