import React from 'react';

export function SocialProof() {
  return (
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
  );
}