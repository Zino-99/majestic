import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavHome = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navigation = [
    { name: "Accueil", path: "/" },
    { name: "La Carte", path: "/la-carte" },
    { name: "Restaurant", path: "/restaurant" },
  ];

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center px-12">
              <img
                src="/Majestic.png"
                alt="Le Majestic food"
                className="h-24 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden normal-case md:flex space-x-8  mr-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-extrabold group
                  ${
                    isActive(item.path) && item.name === "Accueil"
                      ? "text-[#fb953a]" 
                      : "text-black hover:text-[#fb953a]"
                  }`}
              >
                {item.name}
                
                {/* Animation de soulignement */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb953a] transition-all duration-300 group-hover:w-full
                  ${isActive(item.path) ? "w-full" : ""}`}
                />
                
                {/* Effet de background au survol */}
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 ">
            <div className="flex flex-col items-center space-y-4 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-3 rounded-lg transition-all duration-300 font-semibold group
                    ${
                      isActive(item.path) && item.name === "Accueil"
                        ? "text-[#fb953a]"
                        : "text-black hover:text-[#fb953a]"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  
                  {/* Animation mobile */}
                  <span className="absolute inset-0 bg-yellow-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                  
                  {/* Icône de flèche */}
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavHome;