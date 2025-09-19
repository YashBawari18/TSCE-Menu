import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Calculator, Globe, Sparkles, Zap, ChefHat, Clock, Users, Leaf } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('ai-suggestions');

  const features = [
    {
      id: 'ai-suggestions',
      title: "AI-Powered Recipe Suggestions",
      description: "Advanced machine learning algorithms analyze your preferences, dietary restrictions, and cooking history to suggest perfect recipes tailored just for you.",
      icon: Brain,
      color: "from-pink-500 to-purple-600",
      gradient: "from-pink-500/20 to-purple-600/20",
      benefits: [
        "Personalized recommendations based on your taste profile",
        "Learns from your cooking history and feedback",
        "Considers dietary restrictions and allergies",
        "Suggests recipes based on available ingredients"
      ]
    },
    {
      id: 'nutrition-analysis',
      title: "Advanced Nutritional Analysis",
      description: "Get detailed nutritional breakdowns with interactive visualizations showing macros, vitamins, minerals, and health impacts for every recipe.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      gradient: "from-blue-500/20 to-cyan-600/20",
      benefits: [
        "Complete macro and micronutrient breakdown",
        "Visual charts and interactive graphs",
        "Health impact analysis and recommendations",
        "Dietary goal tracking and progress monitoring"
      ]
    },
    {
      id: 'recipe-scaling',
      title: "Smart Recipe Scaling Calculator",
      description: "Dynamically scale recipes for any number of servings with intelligent ingredient adjustments and measurement conversions.",
      icon: Calculator,
      color: "from-green-500 to-emerald-600",
      gradient: "from-green-500/20 to-emerald-600/20",
      benefits: [
        "Automatic ingredient quantity adjustments",
        "Smart measurement unit conversions",
        "Cooking time and temperature modifications",
        "Portion size optimization for different group sizes"
      ]
    },
    {
      id: 'global-cuisine',
      title: "Global Cuisine Explorer",
      description: "Discover authentic recipes from around the world with cultural context, traditional techniques, and ingredient substitutions.",
      icon: Globe,
      color: "from-orange-500 to-red-600",
      gradient: "from-orange-500/20 to-red-600/20",
      benefits: [
        "Authentic recipes from 50+ countries",
        "Cultural background and cooking traditions",
        "Ingredient substitution suggestions",
        "Regional variations and adaptations"
      ]
    },
    {
      id: 'meal-planning',
      title: "Intelligent Meal Planning",
      description: "AI-powered meal planning that considers your schedule, preferences, and nutritional goals to create perfect weekly menus.",
      icon: ChefHat,
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-500/20 to-pink-600/20",
      benefits: [
        "Weekly meal plans based on your schedule",
        "Automatic grocery list generation",
        "Budget-conscious meal suggestions",
        "Leftover optimization and meal prep tips"
      ]
    },
    {
      id: 'quick-recipes',
      title: "Quick & Easy Recipes",
      description: "Find delicious recipes that fit your time constraints, from 5-minute snacks to 30-minute complete meals.",
      icon: Clock,
      color: "from-yellow-500 to-orange-600",
      gradient: "from-yellow-500/20 to-orange-600/20",
      benefits: [
        "Recipes filtered by preparation time",
        "One-pot and sheet-pan meal options",
        "Make-ahead and meal prep recipes",
        "Quick substitutions for faster cooking"
      ]
    }
  ];

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            PLATFORM FEATURES
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the revolutionary features that make cooking smarter, faster, and more enjoyable
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-gradient-to-r ' + feature.gradient + ' border-purple-500'
                      : 'bg-gray-900/50 border-gray-700 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 flex-shrink-0`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{feature.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">{feature.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
            >
              {/* Feature Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentFeature.color} p-4`}>
                  <currentFeature.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{currentFeature.title}</h2>
                  <p className="text-gray-400 mt-2">{currentFeature.description}</p>
                </div>
              </div>

              {/* Feature Demo Area */}
              <div className="bg-black/50 rounded-2xl p-8 mb-6 min-h-[300px] flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: activeFeature === 'global-cuisine' ? [0, 360] : 0
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-6"
                  >
                    <currentFeature.icon className={`w-32 h-32 mx-auto bg-gradient-to-r ${currentFeature.color} bg-clip-text text-transparent`} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Interactive Demo Coming Soon
                  </h3>
                  <p className="text-gray-400">
                    Experience this feature in our full platform launch
                  </p>
                </motion.div>
              </div>

              {/* Benefits List */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentFeature.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mb-6"
            >
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Cooking?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of home cooks who are already using AI to discover amazing recipes and plan perfect meals.
            </p>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(139,69,255,0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-lg font-semibold border border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300"
            >
              <span className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;