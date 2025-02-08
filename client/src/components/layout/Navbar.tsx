import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800 mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Brain className="w-8 h-8 text-purple-500" />
        <span className="text-xl font-bold">MovieMind AI</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
        <Link to="/prediction" className="hover:text-purple-400 ">Get Prediction</Link>
        <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-purple-400 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="hover:text-purple-400 transition-colors"
          >
            Pricing
          </button>
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
        Get Started
      </button>
    </nav>
  );
}