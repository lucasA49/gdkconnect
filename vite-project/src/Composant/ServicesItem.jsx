// ServicesItem.jsx
import React from 'react';
import { Globe, Smartphone, Palette, Shield, Code, Database } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, features = [], gradient }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
    <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-6`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesItem = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de site web",
      description: "Sites vitrines et e-commerce sur mesure avec des technologies modernes.",
      features: [
        "Design responsive et moderne",
        "Optimisation SEO avancée",
        "Performance et sécurité",
        "CMS intuitif"
      ],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description: "Développement d'applications iOS et Android natives et hybrides.",
      features: [
        "Interface utilisateur intuitive",
        "Performance optimisée",
        "Intégration API complète",
        "Déploiement store"
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Webdesign & Graphisme",
      description: "Création d'identités visuelles marquantes et d'interfaces utilisateur intuitives.",
      features: [
        "Identité visuelle complète",
        "UI/UX Design",
        "Supports print et digital",
        "Charte graphique"
      ],
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Sécurité numérique",
      description: "Protection de vos données et systèmes avec les meilleures pratiques de cybersécurité.",
      features: [
        "Audit de sécurité",
        "Protection des données",
        "Sauvegarde automatique",
        "Monitoring 24/7"
      ],
      gradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Solutions personnalisées adaptées à vos besoins spécifiques.",
      features: [
        "Architecture scalable",
        "Technologies modernes",
        "Intégrations complexes",
        "Maintenance incluse"
      ],
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: Database,
      title: "Gestion des données",
      description: "Optimisation et gestion de vos bases de données pour de meilleures performances.",
      features: [
        "Architecture BDD optimisée",
        "Migration de données",
        "Analytics avancés",
        "Reporting automatisé"
      ],
      gradient: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Des solutions complètes pour accompagner votre transformation digitale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous mettons notre expertise au service de votre réussite avec des solutions innovantes et performantes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServiceItem, ServicesItem };
