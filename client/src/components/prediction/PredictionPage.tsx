import React, { useRef, useState } from 'react';
import type { MoviePrediction, MoviePredictionCriteria } from '../../types';
import { MovieForm } from './MovieForm';
import { MovieCriteria } from './MovieCriteria';
import { PredictionResults } from './PredictionResults';
import { GET_MOVIE_CRITERIAS } from '../../constants/api.constants';
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
    await getMoviePredictionResults();
  };

  const getMoviePredictionResults = async () => {
    // TODO: Get movie criteria from API
    setIsPredictionResultLoading(true);
    // const body = {
    //   description : movieIdea,
    //   test : true
    // }
    //const result = await axios.post(GET_MOVIE_CRITERIAS, body);
    setPrediction({
      rating: 8.2,
      revenue: '$127.5M',
    });
    setTimeout(() => {
      setIsPredictionResultLoading(false);
    }, 1500);
  };

  const getMovieCriterias = async () => {
    // TODO: Get movie criteria from API
    setIsCriteriaLoading(true);
    const body = {
      description : movieIdea,
      test : true
    }
    const result = await axios.post(GET_MOVIE_CRITERIAS, body);
    setCriteria(result.data);
    setTimeout(() => {
      setIsCriteriaLoading(false);
    }, 1000);
  };

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