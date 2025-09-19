import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Globe, Users, Zap, Target, Award, Rocket } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Recipes Analyzed', value: '50K+', icon: Brain },
    { label: 'Happy Cooks', value: '10K+', icon: Heart },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Team Members', value: '15+', icon: Users }
  ];

  const team = [
    { name: 'Alex Chen', role: 'AI Engineer', specialty: 'Machine Learning & Recipe Analysis' },
    { name: 'Sarah Johnson', role: 'UX Designer', specialty: 'User Experience & Interface Design' },
    { name: 'Marcus Rodriguez', role: 'Full Stack Developer', specialty: 'Platform Architecture & Development' },
    { name: 'Dr. Emily Watson', role: 'Nutrition Scientist', specialty: 'Nutritional Analysis & Health' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in culinary technology, constantly exploring new ways to enhance your cooking experience.'
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every feature we build starts with understanding our users\' needs, ensuring our platform truly serves home cooks everywhere.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'We believe great food transcends borders. Our platform celebrates culinary diversity and makes global cuisines accessible to all.'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Our AI gets smarter every day, learning from millions of cooking experiences to provide better recommendations.'
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            ABOUT RECIPEAI
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionizing the way people discover, plan, and cook meals through the power of artificial intelligence
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm mb-16"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6"
            >
              <Rocket className="w-16 h-16 text-pink-500 mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize cooking by making personalized, nutritious, and delicious meals accessible to everyone. 
              Through cutting-edge AI technology, we transform the overwhelming world of recipes into a personalized culinary journey 
              that adapts to your taste, dietary needs, and lifestyle.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mb-4"
              >
                <stat.icon className="w-12 h-12 text-purple-500 mx-auto" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Our Story
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                RecipeAI was born from a simple frustration: spending hours searching for recipes that actually match your taste, 
                dietary restrictions, and available ingredients. Our founders, a team of food enthusiasts and tech innovators, 
                realized that artificial intelligence could solve this age-old problem.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                What started as a weekend project in 2023 has evolved into a comprehensive platform that serves thousands of 
                home cooks worldwide. We've combined machine learning, nutritional science, and culinary expertise to create 
                an AI that truly understands food and cooking.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, RecipeAI continues to evolve, learning from every interaction to provide increasingly personalized 
                and accurate recommendations. We're not just building a recipe platform – we're creating the future of cooking.
              </p>
            </div>
            
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8 border border-purple-500/30"
              >
                <div className="text-center">
                  <Brain className="w-24 h-24 text-pink-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Innovation</h3>
                  <p className="text-gray-300">
                    Our proprietary AI algorithms analyze millions of recipes, user preferences, and nutritional data 
                    to deliver personalized cooking experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 flex-shrink-0">
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6"
            >
              <Award className="w-16 h-16 text-yellow-400 mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Join Our Culinary Revolution
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the future of cooking. Experience personalized recipes, smart meal planning, 
              and AI-powered culinary insights that will transform your kitchen adventures.
            </p>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(139,69,255,0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg font-semibold border border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300"
            >
              <span className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;