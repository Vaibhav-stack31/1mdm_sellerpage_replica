import React from 'react';

const Banner = () => {
  return (
    <div className="w-full bg-white mb-16">

      <section className="text-center px-4 py-8">
        <h2 className="text-[#212529] font-semibold text-[clamp(1.5rem,2.5vw,2.25rem)] leading-snug">
          1mdm.com is a leading ecommerce platform that<br /> helps SMEs go global
        </h2>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-12 max-w-7xl mx-auto">

        <div className="w-full max-w-[560px] aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/TN7iJyc5Uks?si=GYlAt1GVZWHVnl4T"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-gray-700 text-lg leading-relaxed max-w-xl text-center lg:text-left">
          <p className="mb-6">
            Connect with millions of business buyers from around the world.
          </p>
          <p className="mb-6">
            Get the tools and know-how to build a successful ecommerce presence for your business.
          </p>
          <p>
            Pocket more from each sale, with take rates as low as 0% in some cases.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
