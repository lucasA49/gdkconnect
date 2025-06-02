import React from 'react';

const RealizationsSection = () => {
  const projects = [
    {
      title: "Site vitrine - Start-up Tech",
      description: "Développement d'un site vitrine moderne pour une start-up technologique avec animations et design responsive.",
      image: "🚀",
      tags: ["React", "Tailwind", "Animation"]
    },
    {
      title: "Application mobile - E-commerce",
      description: "Application mobile complète pour une boutique en ligne avec paiement intégré et gestion des commandes.",
      image: "📱",
      tags: ["React Native", "API", "Paiement"]
    },
    {
      title: "Plateforme web - SaaS",
      description: "Plateforme SaaS complète avec tableau de bord, gestion d'utilisateurs et analytics avancés.",
      image: "💼",
      tags: ["Vue.js", "Node.js", "Database"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-blue-800">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div
                  className={`text-6xl transition-transform duration-700 ease-out ${
                    index === 0
                      ? 'hover:translate-x-8 hover:-translate-y-8 hover:rotate-12 hover:drop-shadow-[0_10px_15px_rgba(255,100,0,0.6)]'
                      : index === 1
                      ? 'hover:rotate-[360deg]'
                      : ''
                  }`}
                >
                  {project.image}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealizationsSection;
