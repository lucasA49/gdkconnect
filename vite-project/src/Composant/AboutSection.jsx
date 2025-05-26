import React from 'react';
import { Users } from 'lucide-react';

const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            À propos de <span className="text-blue-600">GDK Connect</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous sommes une équipe passionnée de développeurs et designers qui transforment vos idées en solutions digitales innovantes.
            Avec plus de 5 ans d'expérience, nous accompagnons les entreprises dans leur transformation numérique.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Accompagnement personnalisé de A à Z</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Technologies modernes et performantes</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Support technique et maintenance</span>
            </li>
          </ul>
          <div className="flex gap-6 pt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              En savoir plus
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Nos valeurs
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Users size={80} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Notre Équipe</h3>
                <p className="text-gray-600 mt-2">Expertise & Créativité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
