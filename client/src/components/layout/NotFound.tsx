// src/components/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react'; // Import Lucide icons

export function NotFound()  {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="text-center animate-bounce">
        <AlertCircle size={80} className="text-red-500 mx-auto" />
      </div>
      <h1 className="text-4xl font-bold mt-6">404 - Page Not Found</h1>
      <p className="text-lg text-gray-400 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 flex items-center justify-center space-x-2 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        <Home size={20} />
        <span>Go back to the home page</span>
      </Link>
    </div>
  );
};

