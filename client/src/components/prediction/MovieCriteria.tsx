import React from 'react';
import { DollarSign, Tag, Film } from 'lucide-react';
import type {  MoviePredictionCriteria } from '../../types';
import { formatLargeNumber } from '../../utils/number.utils';

interface MovieCriteriaProps {
  criteria: MoviePredictionCriteria;
}

export function MovieCriteria({ criteria }: MovieCriteriaProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Extracted Movie Criteria</h2>
      <div className="grid gap-6">
        <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
          <div className="bg-purple-600 p-2 rounded-lg">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Estimated Budget</h3>
            <p className="text-purple-400 font-bold">{formatLargeNumber(criteria.budget)}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
          <div className="bg-purple-600 p-2 rounded-lg">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Keywords</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {criteria.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
          <div className="bg-purple-600 p-2 rounded-lg">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Genres</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {criteria.genres.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}