import React, { useState, useEffect } from 'react';
import { Brain, Heart, Globe, Users, Zap, Target, Award, Rocket, ChefHat, Sparkles, Code, Users2 } from 'lucide-react';

const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: 'Recipes Analyzed', value: '50K+', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { label: 'Happy Cooks', value: '10K+', icon: Heart, color: 'from-pink-500 to-red-500' },
    { label: 'Countries Served', value: '25+', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { label: 'Team Members', value: '15+', icon: Users, color: 'from-green-500 to-emerald-500' }
  ];

  const team = [
    { name: 'Yash Bawari', icon: Code },
    { name: 'Sahil Dalvi', icon: Sparkles },
    { name: 'Devesh Chaudhari', icon: Zap },
    { name: 'Atharv Kotwal', icon: Heart }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in culinary technology, constantly exploring new ways to enhance your cooking experience.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every feature we build starts with understanding our users\' needs, ensuring our platform truly serves home cooks everywhere.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'We believe great food transcends borders. Our platform celebrates culinary diversity and makes global cuisines accessible to all.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Our AI gets smarter every day, learning from millions of cooking experiences to provide better recommendations.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  // Floating particles animation
  const FloatingParticle = ({ delay = 0 }) => (
    <div
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"
      style={{
        animation: `float ${3 + Math.random() * 2}s ease-in-out ${delay}s infinite`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );


  const parallaxStyle = (intensity = 1) => ({
    transform: `translate(${mousePosition.x * intensity * 0.02}px, ${mousePosition.y * intensity * 0.02}px)`
  });

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139,69,255,0.3); }
          50% { box-shadow: 0 0 40px rgba(139,69,255,0.7), 0 0 60px rgba(139,69,255,0.3); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(180deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(90deg); opacity: 0.7; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes morphing {
          0%, 100% { border-radius: 20px; }
          25% { border-radius: 50px 20px; }
          50% { border-radius: 20px 50px; }
          75% { border-radius: 50px 20px 50px 20px; }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .morphing {
          animation: morphing 4s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-10px) rotateX(10deg);
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        }
        
        .stagger-animation {
          animation-delay: var(--animation-delay);
        }
      `}</style>

      <div className="pt-24 pb-16 px-4 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.5} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        
          <div className="text-center mb-16 relative">
            <div
              className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              style={parallaxStyle(2)}
            />
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"
              style={parallaxStyle(-1)}
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text relative">
              ABOUT RECIPEAI
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10 morphing" />
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
              Revolutionizing the way people discover, plan, and cook meals through the power of artificial intelligence
            </p>
          </div>

         
          <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm mb-16 relative hover-lift morphing">
            <div className="text-center">
              <div className="mb-6 relative">
                <Rocket className="w-16 h-16 text-pink-500 mx-auto bounce-in relative z-10" />
                <div className="absolute inset-0 w-16 h-16 bg-pink-500 rounded-full blur-md opacity-50 mx-auto animate-ping" />
                <ChefHat 
                  className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-bounce"
                  style={parallaxStyle(3)}
                />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6 relative">
                Our Mission
                <div className="absolute inset-0 shimmer" />
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're on a mission to democratize cooking by making personalized, nutritious, and delicious meals accessible to everyone. 
                Through cutting-edge AI technology, we transform the overwhelming world of recipes into a personalized culinary journey 
                that adapts to your taste, dietary needs, and lifestyle.
              </p>
            </div>
          </div>

         
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover-lift pulse-glow relative group"
                // style={{ '--animation-delay': `${index * 0.2}s` }}
              >
                <div className="relative mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full p-3 mx-auto relative z-10`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full mx-auto blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <Sparkles 
                    className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 counter" data-target={stat.value}>
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
                
               
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

         
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
              Our Story
            </h2>
            
         
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30 rounded-full hidden lg:block">
                <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-purple-500 to-transparent animate-pulse rounded-full" />
              </div>
              
             
              <div className="space-y-16 lg:space-y-24">
                <div className="grid lg:grid-cols-2 gap-8 items-center relative">
                  <div className="lg:text-right lg:pr-16 order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl p-8 border border-red-500/20 backdrop-blur-sm hover-lift relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-center justify-start lg:justify-end mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3 mr-4 lg:ml-4 lg:mr-0 lg:order-2 group-hover:scale-110 transition-transform">
                          <Target className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">The Problem</h3>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10">
                        RecipeAI was born from a simple yet universal frustration: spending countless hours searching for recipes 
                        that actually match your taste preferences, dietary restrictions, and available ingredients. Every home cook 
                        knows this struggle.
                      </p>
                      
                     
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-70" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full animate-pulse opacity-50" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start lg:pl-16 order-1 lg:order-2">
                    <div 
                      className="w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center border-4 border-red-500/30 relative group"
                      style={parallaxStyle(2)}
                    >
                      <ChefHat className="w-16 h-16 text-red-400 group-hover:scale-110 transition-transform bounce-in" />
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                      
            
                      <div className="absolute inset-0 animate-spin">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full" />
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
    
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900 hidden lg:block z-10 pulse-glow" />
                </div>

              
                <div className="grid lg:grid-cols-2 gap-8 items-center relative">
                  <div className="flex justify-center lg:justify-end lg:pr-16">
                    <div 
                      className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border-4 border-purple-500/30 relative group"
                      style={parallaxStyle(-1)}
                    >
                      <Brain className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform bounce-in" />
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
                      
                
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                            style={{
                              top: `${20 + Math.random() * 60}%`,
                              left: `${20 + Math.random() * 60}%`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:pl-16">
                    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm hover-lift relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-center mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
                          <Zap className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">The Breakthrough</h3>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10">
                        Our founders, a team of passionate food enthusiasts and innovative technologists, realized that artificial 
                        intelligence could revolutionize this experience. What started as a weekend hackathon project in 2023 would 
                        change everything.
                      </p>
                      
               
                      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 hidden lg:block z-10 pulse-glow" />
                </div>

    
                <div className="grid lg:grid-cols-2 gap-8 items-center relative">
                  <div className="lg:text-right lg:pr-16 order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-3xl p-8 border border-green-500/20 backdrop-blur-sm hover-lift relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-center justify-start lg:justify-end mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4 lg:ml-4 lg:mr-0 lg:order-2 group-hover:scale-110 transition-transform">
                          <Users className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">The Growth</h3>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10">
                        From humble beginnings to serving thousands of home cooks worldwide, we've combined machine learning, 
                        nutritional science, and culinary expertise. Our platform has evolved into a comprehensive ecosystem 
                        that truly understands food and cooking.
                      </p>
                      
                     
                      <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                        <div className="flex items-end space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className="bg-green-400 rounded-t animate-pulse"
                              style={{ 
                                width: '4px', 
                                height: `${(i + 1) * 4}px`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start lg:pl-16 order-1 lg:order-2">
                    <div 
                      className="w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border-4 border-green-500/30 relative group"
                      style={parallaxStyle(1)}
                    >
                      <Globe className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform bounce-in" />
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                      
                    
                      <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-4 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                        <div className="absolute top-12 right-6 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-200" />
                        <div className="absolute bottom-8 left-6 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-400" />
                        <div className="absolute bottom-6 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-600" />
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 hidden lg:block z-10 pulse-glow" />
                </div>

           
                <div className="grid lg:grid-cols-2 gap-8 items-center relative">
                  <div className="flex justify-center lg:justify-end lg:pr-16">
                    <div 
                      className="w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-4 border-pink-500/30 relative group"
                      style={parallaxStyle(-2)}
                    >
                      <Rocket className="w-20 h-20 text-pink-400 group-hover:scale-110 transition-transform bounce-in" />
                      <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl animate-pulse" />
                      
                    
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="flex flex-col items-center space-y-1">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full opacity-70 animate-pulse"
                              style={{
                                width: `${8 - i}px`,
                                height: `${8 - i}px`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:pl-16">
                    <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-3xl p-8 border border-pink-500/20 backdrop-blur-sm hover-lift relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-center mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
                          <Sparkles className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">The Future</h3>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10">
                        Today, RecipeAI continues to evolve with every interaction, learning and adapting to provide increasingly 
                        personalized recommendations. We're not just building a recipe platform – we're pioneering the future 
                        of intelligent cooking and transforming kitchens worldwide.
                      </p>
                      
                
                      <div className="absolute top-2 right-2 opacity-30 group-hover:opacity-60 transition-opacity">
                        <div className="grid grid-cols-4 gap-1">
                          {[...Array(16)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.05}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
           
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-gray-900 hidden lg:block z-10 pulse-glow">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover-lift group relative overflow-hidden"
                  // style={{ '--animation-delay': `${index * 0.1}s` }}
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"
                       style={{ background: `linear-gradient(45deg, var(--tw-gradient-stops))` }} />
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl p-3 flex-shrink-0 relative group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-full h-full text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  
              
                  <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                </div>
              ))}
            </div>
          </div>

          
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Meet Our Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover-lift group relative overflow-hidden"
                  style={{ '--animation-delay': `${index * 0.1}s` }}
                >
                
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="relative mb-4 mx-auto w-20 h-20">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity animate-pulse" />
                      <member.icon className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity animate-bounce" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {member.specialty}
                    </p>
                  </div>
                  
                 
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

       
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm hover-lift morphing relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 relative">
                  <Award className="w-16 h-16 text-yellow-400 mx-auto bounce-in relative z-10" />
                  <div className="absolute inset-0 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-30 mx-auto animate-pulse" />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-white animate-spin" />
                  <Users2 className="absolute -bottom-2 -left-2 w-8 h-8 text-cyan-400 animate-bounce" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 gradient-text">
                  Join Our Culinary Revolution
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Be part of the future of cooking. Experience personalized recipes, smart meal planning, 
                  and AI-powered culinary insights that will transform your kitchen adventures.
                </p>

                <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg font-semibold border border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(139,69,255,0.5)] relative overflow-hidden">
                  <span className="flex items-center relative z-10">
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Start Your Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;