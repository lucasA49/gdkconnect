import  React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              
<div className="flex items-center  ">
  <img src="/gdkcontact.png" alt="Logo GDK Connect" className="w-30 object-contain" />

</div>
            </div>
          </div>
<nav className="hidden lg:flex items-center space-x-8">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `font-medium transition-colors ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`
    }
  >
    Accueil
  </NavLink>
  <NavLink
    to="/services"
    className={({ isActive }) =>
      `font-medium transition-colors ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`
    }
  >
    Services
  </NavLink>
  <NavLink
    to="/réalisations"
    className={({ isActive }) =>
      `font-medium transition-colors ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`
    }
  >
    Réalisations
  </NavLink>
 
  
</nav>

          <div className="hidden lg:flex">
            <NavLink 
            to="/Contact"
            className="bg-gradient-to-r from-amber-600 to-amber-400 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Contactez-nous
            </NavLink>
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
      <NavLink
        to="/"
        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/services"
        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Services
      </NavLink>
      <NavLink
        to="/realisations"
        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Réalisations
      </NavLink>
   
 
      <div className="pt-2">
        <NavLink
        to="/contact"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-medium shadow-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          Contactez-nous
        </NavLink>
     </div>
    </div>
  </div>
)}
    
      </div>
    </header>
  );
};

export default Header;
