import React from "react";

const projects = [
  {
    title: "Site vitrine - Start-up Tech",
    description:
      "Développement d’un site vitrine moderne pour une start-up technologique, avec animations, responsive design et branding sur mesure.",
    image: "/images/startup-site.jpg", // à adapter
  },
  {
    title: "Application mobile - E-commerce",
    description:
      "Application mobile native iOS/Android avec gestion des paiements, des produits et des notifications en temps réel.",
    image: "/images/ecommerce-app.jpg",
  },
  {
    title: "Plateforme web - SaaS RH",
    description:
      "Plateforme SaaS RH avec gestion des employés, tableaux de bord analytiques et système de notifications.",
    image: "/images/saas-rh.jpg",
  },
  {
    title: "Portfolio Designer UX/UI",
    description:
      "Création d’un portfolio interactif pour une designer UX/UI avec animations, dark mode et galerie dynamique.",
    image: "/images/uxui-portfolio.jpg",
  },
];

const RealisationsPage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos <span className="text-blue-600">Réalisations</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Découvrez quelques projets récents réalisés pour nos clients.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsPage;
