import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-pink-500 rounded-full blur-sm"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full blur-sm"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-5 h-5 bg-purple-400 rounded-full blur-sm"
        animate={{
          y: [-15, 15, -15],
          x: [8, -8, 8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ChefHat className="w-20 h-20 text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.7)]" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          DIGITAL RECIPE
          <br />
          <span className="text-5xl md:text-7xl">DISCOVERY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          AI-Powered Meal Planning Platform with Futuristic Recipe Discovery
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/recipes">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(236,72,153,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg font-semibold border border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300"
            >
              Explore Recipes
            </motion.button>
          </Link>
          
          <Link to="/demo">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-transparent border-2 border-blue-500 rounded-full text-blue-400 text-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </Link>
        </motion.div>

        {/* Pulsing Ring Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 border border-pink-500/20 rounded-full"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 border border-purple-500/20 rounded-full"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-pink-500 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default LandingPage;