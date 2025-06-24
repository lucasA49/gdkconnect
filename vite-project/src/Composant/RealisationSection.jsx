import React from 'react';

const RealizationsSection = () => {
  const projects = [
    {
      title: "Site vitrine – Start-up technologique",
      description:
        "Création d’un site vitrine moderne et animé pour présenter les services d’une start-up, accessible sur tous les appareils.",
      image: "🚀",
      tags: ["Site vitrine", "Design moderne", "Compatible mobile"]
    },
    {
      title: "Application mobile – Boutique en ligne",
      description:
        "Application intuitive pour vendre des produits en ligne, avec paiements intégrés et suivi des commandes.",
      image: "📱",
      tags: ["Application mobile", "Paiement sécurisé", "Gestion facile"]
    },
    {
      title: "Plateforme en ligne – Outils professionnels",
      description:
        "Plateforme web pour entreprises, avec tableau de bord, comptes clients et suivi d’activité en temps réel.",
      image: "💼",
      tags: ["Espace client", "Tableau de bord", "Statistiques"]
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
            Voici quelques projets récents que nous avons réalisés
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
