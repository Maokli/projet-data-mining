import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { PredictionPage } from './components/prediction/PredictionPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleGetStarted = () => {
    setCurrentPage('predict');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main>
        {currentPage === 'predict' ? (
          <PredictionPage />
        ) : (
          <HomePage onGetStarted={handleGetStarted} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;