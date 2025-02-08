import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { PredictionPage } from './components/prediction/PredictionPage';
import { NotFound } from './components/layout/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage onGetStarted={() => {}} />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;