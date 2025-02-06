import React from 'react';

export function MovieCriteriaSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 animate-pulse">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gray-700/50 h-8 w-3/4 mx-auto rounded-lg"></h2>
      <div className="grid gap-6">
        {/* Budget Skeleton */}
        <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
          <div className="bg-purple-600 p-2 rounded-lg">
            <div className="w-6 h-6 bg-purple-500/50 rounded-lg"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold bg-gray-700/50 h-6 w-1/2 rounded-lg"></h3>
            <p className="text-purple-400 font-bold bg-purple-600/30 h-4 w-1/4 mt-2 rounded-lg"></p>
          </div>
        </div>

        {/* Keywords Skeleton */}
        <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
          <div className="bg-purple-600 p-2 rounded-lg">
            <div className="w-6 h-6 bg-purple-500/50 rounded-lg"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold bg-gray-700/50 h-6 w-1/2 rounded-lg"></h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/30 h-6 w-16 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Genres Skeleton */}
        <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
          <div className="bg-purple-600 p-2 rounded-lg">
            <div className="w-6 h-6 bg-purple-500/50 rounded-lg"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold bg-gray-700/50 h-6 w-1/2 rounded-lg"></h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/30 h-6 w-16 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}