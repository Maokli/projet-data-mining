import React from 'react';
import { 
  Brain, 
  TrendingUp, 
  Target,
  LineChart,
  Zap,
  Shield
} from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose MovieMind AI?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our advanced AI platform combines decades of box office data with cutting-edge machine learning to provide accurate predictions and insights for your film projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Advanced AI Analysis</h3>
            <p className="text-gray-400">
              Our AI analyzes over 50,000 movies and TV shows, considering 200+ factors including plot elements, cast, budget, and market trends.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">95% Accuracy Rate</h3>
            <p className="text-gray-400">
              Proven track record of predicting box office performance with 95% accuracy for movies released in the past 5 years.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Audience Insights</h3>
            <p className="text-gray-400">
              Detailed demographic analysis and viewer preference predictions to help target your ideal audience.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <LineChart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
            <p className="text-gray-400">
              Real-time market trend analysis and competition assessment for optimal release timing.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Instant Results</h3>
            <p className="text-gray-400">
              Get comprehensive predictions and insights within seconds of submitting your movie concept.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Data Security</h3>
            <p className="text-gray-400">
              Enterprise-grade encryption and privacy protection for all your project data and predictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}