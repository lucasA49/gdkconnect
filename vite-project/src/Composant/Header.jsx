import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Globe size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">GDK Connect</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Réalisations</a>
            <a href="#a-propos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden lg:flex">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Contactez-nous
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Accueil</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#realisations" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Réalisations</a>
              <a href="#a-propos" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>À propos</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="pt-2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg" onClick={() => setIsMenuOpen(false)}>
                  Contactez-nous
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
