import React from 'react';
import { FaCog, FaCookieBite, FaGlobe } from 'react-icons/fa';
import Image from './image';

const Feature = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4">Unlock the Power of Personalized Marketing</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        Our AI-powered platform revolutionizes marketing content, financial reports, and educational materials, delivering personalized experiences that engage and satisfy customers. With dynamic content generation and tailored communication, we ensure efficient and responsive solutions that adapt to customer needs and usage patterns.
        </p>
        <div className='text-left blur-sm hover:blur-none'>
        <Image/>
        </div>
        <div className="flex mt-16 flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 max-w-sm">
            <div className="glassmorphic-card">
              <FaCog size={40} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Optimization</h3>
              <p className="text-gray-600">
                Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 max-w-sm">
            <div className="glassmorphic-card">
              <FaCookieBite size={40} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Cookie Banner</h3>
              <p className="text-gray-600">
                Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 max-w-sm">
            <div className="glassmorphic-card">
              <FaGlobe size={40} className="text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Custom Domain</h3>
              <p className="text-gray-600">
                Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
