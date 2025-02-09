export interface MoviePrediction {
  rating: number;
  revenue: number;
}

export interface MoviePredictionCriteria {
    budget: number;
    keywords: string[];
    genres: string[];
}

export interface PredictionRequest {
  keywords: string[],
  genres: string[],
  budget: number
}