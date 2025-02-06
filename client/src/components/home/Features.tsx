import React from 'react';
import { Brain, TrendingUp, Award } from 'lucide-react';

export function Features() {
  return (
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
  );
}