import React, { useEffect, useRef, useState } from 'react';
import { type MoviePrediction, type MoviePredictionCriteria, type PredictionRequest } from '../../types';
import { MovieForm } from './MovieForm';
import { MovieCriteria } from './MovieCriteria';
import { PredictionResults } from './PredictionResults';
import { GET_MOVIE_CRITERIAS, PREDICT } from '../../constants/api.constants';
import axios from 'axios';
import { MovieCriteriaSkeleton } from './MovieCriteriaSkeleton';
import { PredictionResultsSkeleton } from './PredictionResultsSkeleton';

export function PredictionPage() {
  const [movieIdea, setMovieIdea] = useState('');
  const [prediction, setPrediction] = useState<MoviePrediction | null>(null);
  const [criteria, setCriteria] = useState<MoviePredictionCriteria | null>(null);
  const [isCriteriaLoading, setIsCriteriaLoading] = useState(false);
  const [isPredictionResultLoading, setIsPredictionResultLoading] = useState(false);
  const resultsSectionRef = useRef<HTMLDivElement>(null);
  const scrollToResultsSection = () => {
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(scrollToResultsSection, 200);
    await getMovieCriterias();
  };

  const getMoviePredictionResults = async () => {
    if(!criteria)
      return;
    setIsPredictionResultLoading(true);
    const result = await axios.post<MoviePrediction>(PREDICT, criteria);
    setPrediction(result.data)
    setIsPredictionResultLoading(false);
  };

  const getMovieCriterias = async () => {
    // TODO: Get movie criteria from API
    setIsCriteriaLoading(true);
    const body = {
      description : movieIdea
    }
    const result = await axios.post(GET_MOVIE_CRITERIAS, body);
    setCriteria(result.data);
    setIsCriteriaLoading(false);
  };

  useEffect(() => {
    getMoviePredictionResults()
  }, [criteria])
  

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Get Your Movie Prediction
      </h1>
      <div className="max-w-2xl mx-auto">
        <MovieForm
          movieIdea={movieIdea}
          onMovieIdeaChange={setMovieIdea}
          onSubmit={handleSubmit}
        />
          <div className="mt-12 space-y-8" ref= {resultsSectionRef}>
          {criteria && !isCriteriaLoading && <MovieCriteria criteria={criteria} />}
          {isCriteriaLoading && <MovieCriteriaSkeleton />}
            {prediction && !isPredictionResultLoading && <PredictionResults prediction={prediction} />}
            {isPredictionResultLoading && <PredictionResultsSkeleton />}
          </div>
      </div>
    </div>
  );
}