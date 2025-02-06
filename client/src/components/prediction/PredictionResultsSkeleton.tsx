import React from 'react';

export function PredictionResultsSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 animate-pulse">
      {/* Heading Skeleton */}
      <h2 className="text-2xl font-bold mb-6 text-center bg-gray-700/50 h-8 w-3/4 mx-auto rounded-lg"></h2>

      {/* Grid Container Skeleton */}
      <div className="grid grid-cols-2 gap-8">
        {/* Predicted Rating Skeleton */}
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2 bg-purple-600/30 h-12 w-20 mx-auto rounded-lg"></div>
          <div className="text-gray-400 bg-gray-700/50 h-4 w-3/4 mx-auto rounded-lg"></div>
        </div>

        {/* Predicted Revenue Skeleton */}
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2 bg-purple-600/30 h-12 w-20 mx-auto rounded-lg"></div>
          <div className="text-gray-400 bg-gray-700/50 h-4 w-3/4 mx-auto rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}