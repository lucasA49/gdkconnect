import React from 'react';
import { Globe, Smartphone, Palette, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de site web",
      description: "Sites vitrine, e-commerce et applications web sur mesure avec des technologies modernes."
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description: "Développement d'applications iOS et Android natives et hybrides pour tous vos besoins."
    },
    {
      icon: Palette,
      title: "Webdesign & Graphisme",
      description: "Création d'identités visuelles marquantes et d'interfaces utilisateur intuitives."
    },
    {
      icon: Shield,
      title: "Sécurité numérique",
      description: "Protection de vos données et systèmes avec les meilleures pratiques de cybersécurité."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour accompagner votre transformation digitale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
