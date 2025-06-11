import React from 'react';
import { Globe, Smartphone, Palette, Shield, Code, Database } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, features = [], gradientTop, gradientBullet }) => (
  <div className={`rounded-2xl shadow-xl overflow-hidden ${gradientTop} text-white p-0`}>
    <div className="p-8">
      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-md">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white/90 mb-6">{description}</p>
    </div>

    <div className="bg-white text-gray-800 p-6 rounded-t-3xl">
      <ul className="space-y-2 text-sm font-medium">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-3 ${gradientBullet}`}></div>
            {feature}
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
      title: "Création de site web",
      description: "Sites vitrines et e-commerce sur mesure avec des technologies modernes.",
      features: [
        "Design responsive et moderne",
        "Optimisation SEO avancée",
        "Performance et sécurité",
        "CMS intuitif"
      ],
      gradientTop: "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
      gradientBullet: "bg-pink-500"
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
      gradientTop: "bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500",
      gradientBullet: "bg-blue-500"
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
      gradientTop: "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600",
      gradientBullet: "bg-fuchsia-500"
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
      gradientTop: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500",
      gradientBullet: "bg-emerald-500"
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
      gradientTop: "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
      gradientBullet: "bg-indigo-500"
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
      
      gradientTop: "bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600",
      gradientBullet: "bg-sky-500"
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
