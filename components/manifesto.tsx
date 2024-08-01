import React from 'react';

interface ManifestoProps {
  candidateName: string;
  manifestoTitle: string;
  points: string[];
  imageUrl?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ candidateName, manifestoTitle, points, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto my-10 flex items-center">
      <div className="w-full md:w-2/3 pr-8">
        <div className="text-left mb-6">
          <h1 className="text-4xl font-bold text-blue-600">{candidateName}</h1>
          <h2 className="text-2xl text-gray-600 mt-2">{manifestoTitle}</h2>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${candidateName}`}
            className="rounded-lg object-cover w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Manifesto;
