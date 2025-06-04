import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-blue-400 mb-4">GDK Connect</div>
          <p className="text-gray-400">
            Transformons ensemble vos idées en solutions digitales innovantes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><NavLink to="/services/web" className="hover:text-white transition-colors">Développement Web</NavLink></li>
            <li><NavLink to="/services/mobile" className="hover:text-white transition-colors">Applications Mobiles</NavLink></li>
            <li><NavLink to="/services/design" className="hover:text-white transition-colors">Design UX/UI</NavLink></li>
            <li><NavLink to="/services/consulting" className="hover:text-white transition-colors">Consulting</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
          <ul className="space-y-2 text-gray-400">
            <li><NavLink to="/a-propos" className="hover:text-white transition-colors">À propos</NavLink></li>
            <li><NavLink to="/equipe" className="hover:text-white transition-colors">Équipe</NavLink></li>
            <li><NavLink to="/carrieres" className="hover:text-white transition-colors">Carrières</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Cholet, France</li>
            <li>contact@gdkconnect.com</li>
            <li>+33 1 23 45 67 89</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 GDK Connect. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
