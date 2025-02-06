import React from 'react';
import type { MoviePrediction } from '../../types';

interface PredictionResultsProps {
  prediction: MoviePrediction;
}

export function PredictionResults({ prediction }: PredictionResultsProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Prediction Results</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">{prediction.rating}</div>
          <div className="text-gray-400">Predicted Rating</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">{prediction.revenue}</div>
          <div className="text-gray-400">Predicted Revenue</div>
        </div>
      </div>
    </div>
  );
}