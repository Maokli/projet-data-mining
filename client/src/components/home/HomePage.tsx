import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { SocialProof } from './SocialProof';
import { CTA } from './CTA';
import { Pricing } from './Pricing';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <SocialProof />
      <Pricing/>
      <CTA onGetStarted={onGetStarted} />
    </>
  );
}