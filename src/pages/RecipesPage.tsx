import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Leaf, Globe, Star, Heart, BookOpen } from 'lucide-react';

const RecipesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>(['vegetarian']);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filterOptions = [
    { id: 'vegetarian', label: 'Vegetarian', icon: Leaf, color: 'from-green-500 to-emerald-600' },
    { id: 'quick', label: '< 30 min', icon: Clock, color: 'from-blue-500 to-cyan-600' },
    { id: 'family', label: 'Family Size', icon: Users, color: 'from-purple-500 to-pink-600' },
    { id: 'global', label: 'International', icon: Globe, color: 'from-orange-500 to-red-600' }
  ];

  const recipes = [
    { id: 1, title: "AI Fusion Pasta", cuisine: "Italian-AI", time: "25 min", image: "🍝", rating: 4.9, difficulty: "Easy", servings: 4 },
    { id: 2, title: "Smart Stir Fry", cuisine: "Asian-Tech", time: "15 min", image: "🥘", rating: 4.8, difficulty: "Easy", servings: 2 },
    { id: 3, title: "Quantum Quinoa Bowl", cuisine: "Future-Health", time: "20 min", image: "🥗", rating: 5.0, difficulty: "Medium", servings: 1 },
    { id: 4, title: "Cyber Curry", cuisine: "Indian-Digital", time: "35 min", image: "🍛", rating: 4.7, difficulty: "Medium", servings: 6 },
    { id: 5, title: "Holographic Hummus", cuisine: "Middle-Eastern", time: "10 min", image: "🥙", rating: 4.6, difficulty: "Easy", servings: 4 },
    { id: 6, title: "Neural Network Noodles", cuisine: "Japanese-AI", time: "30 min", image: "🍜", rating: 4.9, difficulty: "Hard", servings: 2 },
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const toggleFavorite = (recipeId: number) => {
    setFavorites(prev => 
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  const viewRecipe = (recipeId: number) => {
    console.log('Viewing recipe:', recipeId);
    // Implement recipe view functionality
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            RECIPE DISCOVERY
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore thousands of AI-curated recipes tailored to your preferences
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-4">
              <Search className="w-6 h-6 text-gray-400 mr-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes with AI..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className="ml-4 p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              >
                <Filter className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Filter Toggles */}
          <div className="flex flex-wrap justify-center gap-4">
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
                <filter.icon className="w-5 h-5 mr-2" />
                <span className="font-semibold">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(139,69,255,0.3)"
              }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Recipe Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                <span className="text-6xl">{recipe.image}</span>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-yellow-400 font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {recipe.rating}
                  </span>
                </div>

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(recipe.id)}
                  className="absolute top-4 left-4 p-2 bg-black/50 backdrop-blur-sm rounded-full"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(recipe.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-400'
                    }`} 
                  />
                </motion.button>
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

                <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                  <span>Difficulty: {recipe.difficulty}</span>
                  <span>Serves: {recipe.servings}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(139,69,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => viewRecipe(recipe.id)}
                  className="w-full py-3 border border-purple-500/30 rounded-lg text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center justify-center"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Recipe
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 50px rgba(59,130,246,0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold border border-blue-500/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300"
          >
            Load More Recipes
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipesPage;