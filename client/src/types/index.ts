export interface MoviePrediction {
  rating: number;
  revenue: string;
}

export interface MoviePredictionCriteria {
    budget: string;
    keywords: string[];
    genres: string[];
}