import React from 'react';
import { Brain } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navbar({ currentPage, onPageChange }: NavbarProps) {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Brain className="w-8 h-8 text-purple-500" />
        <span className="text-xl font-bold">MovieMind AI</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <button 
          onClick={() => onPageChange('home')}
          className={`hover:text-purple-400 transition-colors ${currentPage === 'home' ? 'text-purple-400' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => onPageChange('predict')}
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
  );
}