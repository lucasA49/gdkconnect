// HeroSection.jsx
import React from "react";
import { Globe } from "lucide-react";
import { NavLink } from "react-router-dom";

const AnnoncesServices = () => (
  <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Des solutions complètes et personnalisées pour accompagner votre transformation digitale. 
            De la conception à la réalisation, nous vous aidons à concrétiser vos projets les plus ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink to="/services" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Découvrir nos solutions
            </NavLink>
            <NavLink to="/devis" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Demander un devis
            </NavLink>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Solutions Digitales</h3>
              <p className="text-blue-100">Innovation & Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AnnoncesServices;
