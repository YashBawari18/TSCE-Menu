import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Leaf, Globe } from 'lucide-react';

const RequirementsSection: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['vegetarian']);

  const filterOptions = [
    { id: 'vegetarian', label: 'Vegetarian', icon: Leaf, color: 'from-green-500 to-emerald-600' },
    { id: 'quick', label: '< 30 min', icon: Clock, color: 'from-blue-500 to-cyan-600' },
    { id: 'family', label: 'Family Size', icon: Users, color: 'from-purple-500 to-pink-600' },
    { id: 'global', label: 'International', icon: Globe, color: 'from-orange-500 to-red-600' }
  ];

  const recipeCards = [
    { title: "AI Fusion Pasta", cuisine: "Italian-AI", time: "25 min", image: "🍝", rating: 4.9 },
    { title: "Smart Stir Fry", cuisine: "Asian-Tech", time: "15 min", image: "🥘", rating: 4.8 },
    { title: "Quantum Quinoa Bowl", cuisine: "Future-Health", time: "20 min", image: "🥗", rating: 5.0 }
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            ADVANCED SEARCH
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Futuristic filtering system that understands your needs
          </p>
        </motion.div>

        {/* Search Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-4">
              <Search className="w-6 h-6 text-gray-400 mr-4" />
              <input
                type="text"
                placeholder="Search recipes with AI..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              >
                <Filter className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Filter Toggles */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterOptions.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeFilters.includes(filter.id)
                    ? 'bg-gradient-to-r ' + filter.color + ' border-transparent text-white shadow-lg'
                    : 'bg-gray-900/50 border-gray-600 text-gray-300 hover:border-purple-500'
                }`}
              >
                {activeFilters.includes(filter.id) && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg"
                  />
                )}
                <filter.icon className="w-5 h-5 mr-2" />
                <span className="font-semibold">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Recipe Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {recipeCards.map((recipe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                rotateY: 5,
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(139,69,255,0.3)"
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                {/* Recipe Image/Emoji */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <span className="text-6xl">{recipe.image}</span>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-yellow-400 font-semibold">★ {recipe.rating}</span>
                  </div>
                </div>

                {/* Recipe Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {recipe.title}
                  </h3>
                  
                  <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                    <span>{recipe.cuisine}</span>
                    <span>{recipe.time}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(139,69,255,0.1)" }}
                    className="w-full py-2 border border-purple-500/30 rounded-lg text-purple-400 hover:text-purple-300 transition-all duration-300"
                  >
                    View Recipe
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/recipes">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(59,130,246,0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold border border-blue-500/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300"
            >
              View All Recipes
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RequirementsSection;