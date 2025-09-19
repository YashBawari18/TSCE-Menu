import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Zap, Brain, Calculator, BarChart3 } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('ai-suggestions');
  const [servings, setServings] = useState(4);

  const demos = [
    {
      id: 'ai-suggestions',
      title: 'AI Recipe Suggestions',
      icon: Brain,
      description: 'Watch how our AI analyzes your preferences and suggests perfect recipes',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'nutrition-analysis',
      title: 'Nutritional Analysis',
      icon: BarChart3,
      description: 'See real-time nutritional breakdown with interactive visualizations',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'recipe-scaling',
      title: 'Recipe Scaling',
      icon: Calculator,
      description: 'Dynamically scale recipes with intelligent ingredient adjustments',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const togglePlayback = () => setIsPlaying(!isPlaying);
  const resetDemo = () => {
    setIsPlaying(false);
    setServings(4);
  };
  const startDemo = (demoId: string) => {
    setCurrentDemo(demoId);
    setIsPlaying(true);
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            INTERACTIVE DEMO
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of cooking with our AI-powered platform
          </p>
        </motion.div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {demos.map((demo) => (
            <motion.div
              key={demo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startDemo(demo.id)}
              className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                currentDemo === demo.id
                  ? 'bg-gradient-to-br ' + demo.color + '/20 border-purple-500'
                  : 'bg-gray-900/50 border-gray-700 hover:border-purple-500/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} p-3 mb-4`}>
                <demo.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
              <p className="text-gray-400 text-sm">{demo.description}</p>

              {currentDemo === demo.id && (
                <motion.div
                  layoutId="activeDemo"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30 pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mb-12"
        >
          <div className="relative bg-black rounded-2xl p-8 mb-6 min-h-[400px] flex items-center justify-center">

            {/* AI Recipe Suggestions */}
            {currentDemo === 'ai-suggestions' && (
              <div className="text-center w-full">
                <motion.div
                  animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6"
                >
                  <Brain className="w-24 h-24 text-pink-500 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Recipe Suggestions</h3>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <p className="text-purple-300">Analyzing your preferences...</p>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <p className="text-blue-300">Found 127 matching recipes!</p>
                    </div>
                    <div className="bg-green-900/30 rounded-lg p-4">
                      <p className="text-green-300">Top recommendation: AI Fusion Pasta</p>
                    </div>
                  </motion.div>
                )}

                {/* Previous Week Recipes */}
                <div className="mt-6 text-left">
                  <h4 className="text-xl font-semibold text-white mb-3">Previous Week Recipes</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Paneer Tikka", "Butter Chicken", "Veg Biryani", "Dal Makhani"].map((recipe, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        <p className="text-gray-200">{recipe}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Nutritional Analysis */}
            {currentDemo === 'nutrition-analysis' && (
              <div className="text-center">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="mb-6"
                >
                  <BarChart3 className="w-24 h-24 text-blue-500 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Nutritional Analysis</h3>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-3 gap-4"
                  >
                    <div className="bg-red-900/30 rounded-lg p-4">
                      <p className="text-red-300 font-bold">Protein</p>
                      <p className="text-white text-2xl">25g</p>
                    </div>
                    <div className="bg-yellow-900/30 rounded-lg p-4">
                      <p className="text-yellow-300 font-bold">Carbs</p>
                      <p className="text-white text-2xl">45g</p>
                    </div>
                    <div className="bg-green-900/30 rounded-lg p-4">
                      <p className="text-green-300 font-bold">Fat</p>
                      <p className="text-white text-2xl">12g</p>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Recipe Scaling */}
            {currentDemo === 'recipe-scaling' && (
              <div className="text-center w-full max-w-md">
                <motion.div
                  animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6"
                >
                  <Calculator className="w-24 h-24 text-green-500 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">Recipe Scaling</h3>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Servings: <span aria-live="polite">{servings}</span></label>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={servings}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setServings(parseInt(e.target.value, 10))}
                    className="w-full h-3 rounded-lg cursor-pointer pointer-events-auto"
                    aria-label="Servings"
                  />
                </div>

                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">Flour</span>
                      <span className="text-white">{(2 * servings / 4).toFixed(1)} cups</span>
                    </div>
                    <div className="flex justify-between bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">Sugar</span>
                      <span className="text-white">{(1 * servings / 4).toFixed(1)} cup</span>
                    </div>
                    <div className="flex justify-between bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">Eggs</span>
                      <span className="text-white">{Math.round(3 * servings / 4)} eggs</span>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayback}
              className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={resetDemo}
              className="p-4 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
            >
              <RotateCcw className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(139,69,255,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg font-semibold border border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300"
          >
            <span className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Using RecipeAI
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DemoPage;
