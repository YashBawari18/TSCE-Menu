import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import DemoPage from './pages/DemoPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import CustomCursor from './components/CustomCursor';
import InteractiveElements from './components/InteractiveElements';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        <CustomCursor />
        <InteractiveElements />
        <Navigation />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;