import React from 'react';

function Description() {
  return (
    <div className="hero">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left pr-10">
          <h1 className="text-sm font-bold leading-tight mb-4">Tailored</h1>
          <p className="text-xl mb-6 font-extrabold">
            Enhancing Engagement and Satisfaction Through Personalized Services
          </p>
          <p className="text-gray-400 mb-8">
            Our AI-powered platform generates personalized marketing content,
            financial reports, and educational materials for bank customers.
            With Azure's scalable cloud services, we ensure efficient and
            responsive content generation that adapts dynamically to customer
            needs and usage patterns.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 mb-4 md:mb-0">
              Learn More
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-black font-bold py-2 px-4 rounded-full">
              Sign Up -&gt;
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="rounded-lg shadow-lg"
            src="https://via.placeholder.com/640x480"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
