import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  Brain,
  Calculator,
  BarChart3,
} from "lucide-react";

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState("ai-suggestions");
  const [servings, setServings] = useState(4);

  const demos = [
    {
      id: "ai-suggestions",
      title: "AI Recipe Suggestions",
      icon: Brain,
      description:
        "Watch how our AI analyzes your preferences and suggests perfect recipes",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: "nutrition-analysis",
      title: "Nutritional Analysis",
      icon: BarChart3,
      description:
        "See real-time nutritional breakdown with interactive visualizations",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "recipe-scaling",
      title: "Recipe Scaling",
      icon: Calculator,
      description:
        "Dynamically scale recipes with intelligent ingredient adjustments",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const togglePlayback = () => setIsPlaying(!isPlaying);
  const resetDemo = () => {
    setIsPlaying(false);
    setServings(4);
  };
  const startDemo = (id: string) => {
    setCurrentDemo(id);
    setIsPlaying(true);
  };

  return (
    <div className="relative pt-24 pb-16 px-4 min-h-screen overflow-hidden">
      {/* 🔮 Floating Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            INTERACTIVE DEMO
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the <span className="text-pink-400">future of cooking</span> with our{" "}
            <span className="text-purple-400">AI-powered platform</span>
          </p>
        </motion.div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {demos.map((demo) => (
            <motion.div
              key={demo.id}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => startDemo(demo.id)}
              className={`relative p-6 rounded-3xl border cursor-pointer shadow-lg transition-all duration-300 ${
                currentDemo === demo.id
                  ? `bg-gradient-to-br ${demo.color}/20 border-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.6)]`
                  : "bg-gray-900/50 border-gray-700 hover:border-purple-500/50"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${demo.color} p-3 mb-5`}>
                <demo.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
              <p className="text-gray-400 text-sm">{demo.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 mb-14 shadow-2xl"
        >
          <div className="relative bg-black/70 rounded-2xl p-8 min-h-[420px] flex items-center justify-center overflow-hidden">
            {/* Animated Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* AI Suggestions */}
            {currentDemo === "ai-suggestions" && (
              <div className="text-center">
                <motion.div
                  animate={isPlaying ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6"
                >
                  <Brain className="w-24 h-24 text-pink-500 mx-auto drop-shadow-[0_0_20px_rgba(236,72,153,0.7)]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">AI Recipe Suggestions</h3>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <motion.div
                      className="bg-purple-900/30 rounded-lg p-4"
                      animate={{ x: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <p className="text-purple-300">Analyzing your preferences...</p>
                    </motion.div>
                    <motion.div
                      className="bg-blue-900/30 rounded-lg p-4"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-blue-300">Found 127 matching recipes!</p>
                    </motion.div>
                    <motion.div
                      className="bg-green-900/30 rounded-lg p-4"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <p className="text-green-300">Top Pick: Spicy Thai Curry</p>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Nutrition Analysis */}
            {currentDemo === "nutrition-analysis" && (
              <div className="text-center">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="mb-6"
                >
                  <BarChart3 className="w-24 h-24 text-blue-400 mx-auto drop-shadow-[0_0_20px_rgba(96,165,250,0.7)]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">Nutritional Analysis</h3>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-3 gap-6"
                  >
                    {[
                      { label: "Protein", value: "25g", color: "text-red-300", bg: "bg-red-900/30" },
                      { label: "Carbs", value: "45g", color: "text-yellow-300", bg: "bg-yellow-900/30" },
                      { label: "Fat", value: "12g", color: "text-green-300", bg: "bg-green-900/30" },
                    ].map((nutrient, idx) => (
                      <motion.div
                        key={idx}
                        className={`${nutrient.bg} rounded-lg p-5`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2 + idx, repeat: Infinity }}
                      >
                        <p className={`${nutrient.color} font-bold`}>{nutrient.label}</p>
                        <p className="text-white text-2xl">{nutrient.value}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            )}

            {/* ✅ Fixed Recipe Scaling */}
            {currentDemo === "recipe-scaling" && (
              <div className="text-center w-full max-w-lg">
                <motion.div
                  animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6"
                >
                  <Calculator className="w-24 h-24 text-green-400 mx-auto drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">Recipe Scaling</h3>

                {/* Slider */}
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">
                    Servings: <span className="font-bold text-green-400">{servings}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={servings}
                    onChange={(e) => setServings(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-400"
                  />
                </div>

                {/* Ingredients */}
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {[
                      { name: "Flour", unit: "cups", base: 2 },
                      { name: "Sugar", unit: "cups", base: 1 },
                      { name: "Eggs", unit: "pcs", base: 3 },
                      { name: "Milk", unit: "cups", base: 1.5 },
                    ].map((ingredient, i) => {
                      let scaled;
                      if (ingredient.name === "Eggs") {
                        scaled = Math.round((ingredient.base * servings) / 4);
                      } else {
                        scaled = ((ingredient.base * servings) / 4).toFixed(1);
                      }

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="flex justify-between bg-gray-800/70 rounded-lg p-3 shadow-md"
                        >
                          <span className="text-gray-300">{ingredient.name}</span>
                          <span className="text-white font-semibold">
                            {scaled} {ingredient.unit}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayback}
              className="p-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={resetDemo}
              className="p-5 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors shadow-md"
            >
              <RotateCcw className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 50px rgba(236,72,153,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg font-semibold border border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300"
          >
            <span className="flex items-center justify-center">
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
