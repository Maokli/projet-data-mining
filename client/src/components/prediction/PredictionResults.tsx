import React from 'react';
import type { MoviePrediction } from '../../types';
import { StarRating } from './StarRating.component';
import { formatLargeNumber } from '../../utils/number.utils';

interface PredictionResultsProps {
  prediction: MoviePrediction;
}

export function PredictionResults({ prediction }: PredictionResultsProps) {

  const getRevenueToDisplay = () => {
    console.log(prediction.revenue)
    console.log(formatLargeNumber(prediction.revenue))
    return formatLargeNumber(prediction.revenue);
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Prediction Results</h2>
      <div className="grid grid-rows-2 gap-8">
        <div className="flex items-center flex-col">
          {/* <div className="text-4xl font-bold text-purple-400 mb-2">{prediction.rating}</div> */}
          <StarRating rating={prediction.rating}></StarRating>
          <div className="text-gray-400 mt-2">Predicted Rating</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">{getRevenueToDisplay()}</div>
          <div className="text-gray-400">Predicted Revenue</div>
        </div>
      </div>
    </div>
  );
}