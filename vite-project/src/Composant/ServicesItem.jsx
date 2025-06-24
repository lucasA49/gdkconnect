import React from 'react';
import { Globe, Palette, Shield, Code } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, features = [], gradientTop, gradientBullet }) => (
  <div className="rounded-2xl shadow-xl overflow-hidden bg-white transition-transform hover:scale-[1.02] duration-300 flex flex-col min-h-[480px]">
    {/* Partie colorée */}
    <div className={`p-8 ${gradientTop}`}>
      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-lg border border-white/20">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{title}</h3>
      <p className="text-white/90 text-sm leading-relaxed">{description}</p>
    </div>

    {/* Partie blanche */}
    <div className="p-6">
      <ul className="space-y-3 text-sm font-medium">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className={`w-2.5 h-2.5 rounded-full mr-3 ${gradientBullet}`}></div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesItem = () => {
  const services = [
    {
      icon: Globe,
      title: "Site internet",
description: "Présentez vos services en ligne avec un site rapide, pro et facile à utiliser.",
      features: [
        "Adapté à tous les écrans (mobile, tablette, PC)",
        "Apparition sur Google",
        "Chargement rapide",
        "Formulaire de contact simple"
      ],
      gradientTop: "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
      gradientBullet: "bg-pink-500"
    },
    {
      icon: Palette,
      title: "Identité visuelle",
      description: "Un design soigné et cohérent pour donner confiance à vos visiteurs.",
      features: [
        "Logo personnalisé",
        "Charte graphique harmonieuse",
        "Images et couleurs professionnelles",
        "Design clair et lisible"
      ],
      gradientTop: "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600",
      gradientBullet: "bg-fuchsia-500"
    },
    {
      icon: Shield,
      title: "Sécurité & fiabilité",
      description: "Votre site est protégé, sauvegardé et fonctionne sans interruption.",
      features: [
        "Connexion sécurisée (https)",
        "Sauvegardes régulières",
        "Protection contre les pirates",
        "Hébergement fiable 24h/24"
      ],
      gradientTop: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500",
      gradientBullet: "bg-emerald-500"
    },
    {
      icon: Code,
      title: "Fonctionnalités utiles",
      description: "Ajoutez ce dont vous avez besoin, sans rien de superflu.",
      features: [
        "Devis ou réservation en ligne",
        "Connexion à vos outils (email, réseaux)",
        "Statistiques de visites",
        "Assistance et modifications rapides"
      ],
      gradientTop: "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
      gradientBullet: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Des services concrets pour faire évoluer votre activité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous créons des sites accessibles, beaux et efficaces, pensés pour les entrepreneurs, commerçants et artisans.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServiceItem, ServicesItem };
