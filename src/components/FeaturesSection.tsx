import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Calculator, Globe, Sparkles, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recipe Suggestions",
      description: "Advanced machine learning algorithms analyze your preferences, dietary restrictions, and cooking history to suggest perfect recipes.",
      color: "from-pink-500 to-purple-600",
      gradient: "from-pink-500/20 to-purple-600/20"
    },
    {
      icon: BarChart3,
      title: "Nutritional Analysis",
      description: "Get detailed nutritional breakdowns with interactive visualizations showing macros, vitamins, and health impacts.",
      color: "from-blue-500 to-cyan-600",
      gradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      icon: Calculator,
      title: "Recipe Scaling Calculator",
      description: "Dynamically scale recipes for any number of servings with intelligent ingredient adjustments and measurement conversions.",
      color: "from-green-500 to-emerald-600",
      gradient: "from-green-500/20 to-emerald-600/20"
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CORE FEATURES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary technology meets culinary creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 h-full">
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <motion.div
                  className="flex items-center text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>

                
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm">
            <div className="absolute top-6 left-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Experience the Future of Cooking
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our AI doesn't just suggest recipes – it understands your taste, learns from your preferences, and evolves with your culinary journey.
            </p>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(139,69,255,0.5)",
                background: "linear-gradient(45deg, #8B45FF, #FF6B9D)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold border border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300"
            >
              <Link to="/demo" className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;