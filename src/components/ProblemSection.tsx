import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Brain, Utensils } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-purple-900/20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            THE PROBLEM
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Modern cooking faces challenges that traditional recipe platforms can't solve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-3xl p-8 border border-red-500/20 backdrop-blur-sm">
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-red-400 mb-4">Frustrated Cook</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  No personalized recipe suggestions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Complex nutritional calculations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Manual recipe scaling struggles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Time-consuming meal planning
                </li>
              </ul>
            </div>
          </motion.div>

          
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-3xl p-8 border border-green-500/20 backdrop-blur-sm">
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-8 h-8 text-green-500" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-green-400 mb-4">AI Assistant</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Personalized AI recommendations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Instant nutritional analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Smart recipe scaling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Automated meal planning
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        
        <motion.div
          className="flex justify-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl text-purple-500"
          >
            →
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;