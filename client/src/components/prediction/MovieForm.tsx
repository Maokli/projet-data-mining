import React from 'react';

interface MovieFormProps {
  movieIdea: string;
  onMovieIdeaChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function MovieForm({ movieIdea, onMovieIdeaChange, onSubmit }: MovieFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="movieIdea" className="block text-lg mb-2 text-gray-200">
          Describe your movie idea
        </label>
        <textarea
          id="movieIdea"
          value={movieIdea}
          onChange={(e) => onMovieIdeaChange(e.target.value)}
          className="w-full h-48 p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          placeholder="Enter your movie plot, target audience, key actors, genre, etc..."
        />
      </div>
      <button
        type="submit"
        disabled={!movieIdea}
        className="w-full bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
      >
        Get Prediction
      </button>
    </form>
  );
}