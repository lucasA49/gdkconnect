import React from 'react';
import { ArrowRight, Play, Globe } from 'lucide-react';

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Donnez <span className="text-blue-800">vie</span> à vos idées
              <br />
              <span className="text-blue-800">digitales</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              GDK Connect transforme vos visions en réalité numérique grâce à des solutions innovantes et personnalisées.
              De la conception à la réalisation, nous vous accompagnons dans votre transformation digitale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Découvrir nos services
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Play size={20} />
              Voir nos projets
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 transform rotate-3 shadow-2xl">
            <div className="bg-white rounded-xl p-6 transform -rotate-3">
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <Globe size={80} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Solutions Digitales</h3>
                  <p className="text-gray-600 mt-2">Innovation & Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
