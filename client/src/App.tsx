import React, { useState } from 'react';
import { Brain, TrendingUp, Award, Play, ChevronRight, Github, DollarSign, Tag, Film } from 'lucide-react';

function PredictionPage() {
  const [movieIdea, setMovieIdea] = useState('');
  const [prediction, setPrediction] = useState<null | {
    rating: number;
    revenue: string;
    criteria: {
      budget: string;
      keywords: string[];
      genres: string[];
    };
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated prediction with extracted criteria
    setPrediction({
      rating: 8.2,
      revenue: '$127.5M',
      criteria: {
        budget: '$45M',
        keywords: ['time-travel', 'romance', 'adventure', 'technology'],
        genres: ['Sci-Fi', 'Romance', 'Adventure']
      }
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Get Your Movie Prediction
      </h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="movieIdea" className="block text-lg mb-2 text-gray-200">
              Describe your movie idea
            </label>
            <textarea
              id="movieIdea"
              value={movieIdea}
              onChange={(e) => setMovieIdea(e.target.value)}
              className="w-full h-48 p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your movie plot, target audience, key actors, genre, etc..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
          >
            Get Prediction
          </button>
        </form>

        {prediction && (
          <div className="mt-12 space-y-8">
            {/* Extracted Criteria Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Extracted Movie Criteria</h2>
              <div className="grid gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Estimated Budget</h3>
                    <p className="text-purple-400 font-bold">{prediction.criteria.budget}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <Tag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Keywords</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {prediction.criteria.keywords.map((keyword, index) => (
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
                      {prediction.criteria.genres.map((genre, index) => (
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

            {/* Prediction Results */}
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
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold">MovieMind AI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`hover:text-purple-400 transition-colors ${currentPage === 'home' ? 'text-purple-400' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('predict')}
            className={`hover:text-purple-400 transition-colors ${currentPage === 'predict' ? 'text-purple-400' : ''}`}
          >
            Get Prediction
          </button>
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
          Get Started
        </button>
      </nav>

      <main>
        {currentPage === 'predict' ? (
          <PredictionPage />
        ) : (
          <>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Predict Box Office Success with AI
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Harness the power of advanced machine learning to predict your movie's success before production begins.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button 
                  onClick={() => setCurrentPage('predict')}
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Try Demo <Play className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                  Learn More <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-800 py-20">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">Why Choose MovieMind AI?</h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Advanced AI Analysis</h3>
                    <p className="text-gray-400">Powered by state-of-the-art machine learning algorithms trained on decades of box office data.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">95% Accuracy Rate</h3>
                    <p className="text-gray-400">Our predictions have been proven accurate across various genres and market conditions.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Industry Trusted</h3>
                    <p className="text-gray-400">Used by major studios and independent filmmakers worldwide.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Proof */}
            <section className="container mx-auto px-6 py-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
                <p className="text-gray-400">Join hundreds of studios and producers making data-driven decisions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
                <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=100&fit=crop&q=80" alt="Studio Logo" className="h-12 object-contain mx-auto" />
                <img src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=200&h=100&fit=crop&q=80" alt="Studio Logo" className="h-12 object-contain mx-auto" />
                <img src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=200&h=100&fit=crop&q=80" alt="Studio Logo" className="h-12 object-contain mx-auto" />
                <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80" alt="Studio Logo" className="h-12 object-contain mx-auto" />
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-800 to-pink-800">
              <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to Predict Your Next Hit?</h2>
                <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                  Join the AI revolution in film production and maximize your chances of success.
                </p>
                <button 
                  onClick={() => setCurrentPage('predict')}
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-6 h-6 text-purple-500" />
              <span className="text-lg font-bold">MovieMind AI</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2025 MovieMind AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;