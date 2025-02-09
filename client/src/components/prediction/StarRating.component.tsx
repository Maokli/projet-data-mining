import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 10,
  size = 24
}) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const fillPercentage = Math.max(0, Math.min(100, 
          rating >= index + 1 
            ? 100 
            : Math.max(0, (rating - index) * 100)
        ));

        return (
          <div key={index} className="relative">
            {/* Background star (gray) */}
            <Star 
              size={size}
              className="text-gray-300"
              fill="currentColor"
            />
            
            {/* Foreground star (filled) with clip path */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star
                size={size}
                className="text-purple-400"
                fill="currentColor"
              />
            </div>
          </div>
        );
      })}
      <span className="ml-2 text-sm text-purple-400">
        {rating.toFixed(1)}/10
      </span>
    </div>
  );
};