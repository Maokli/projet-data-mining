import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Predict Box Office Success with AI
      </h1>
      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Harness the power of advanced machine learning to predict your movie's success before production begins.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button 
          onClick={onGetStarted}
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          Try Demo <Play className="w-5 h-5" />
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-colors">
          Learn More <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}