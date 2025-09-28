// components/HeroSection.jsx

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-6 leading-tight">
          Découvrez les Recettes du Majestic
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium mb-8 max-w-2xl mx-auto">
          Savourez nos plats maison qui allient authenticité et saveurs exquises
        </p>
        <Link
          to="/la-carte"
          className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Découvrir La Carte
        </Link>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-1 h-16 bg-gradient-to-b from-transparent via-orange-400 to-transparent rounded-full"></div>
  </div>
);

export default HeroSection;