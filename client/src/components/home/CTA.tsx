import React from 'react';

interface CTAProps {
  onGetStarted: () => void;
}

export function CTA({ onGetStarted }: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-pink-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Predict Your Next Hit?</h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Join the AI revolution in film production and maximize your chances of success.
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
        >
          Start Free Trial
        </button>
      </div>
    </section>
  );
}