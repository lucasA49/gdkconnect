import React from 'react';
import { NavLink } from 'react-router-dom';

const PriseContactServices = () => {
  return (
    <section className="py-16 bg-blue-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Besoin d'un service digital sur mesure ?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Que ce soit pour un site vitrine, un e-commerce ou une solution plus complexe,
          nous sommes là pour concrétiser vos idées.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/prisederdv"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-500 transition-colors"
          >
            Planifier un appel
          </NavLink>
     
        </div>
      </div>
    </section>
  );
};

export default PriseContactServices;
