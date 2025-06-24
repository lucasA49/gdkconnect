const projects = [
  {
    title: "Site vitrine – Rénovation & Isolation",
    description:
      "Création d’un site vitrine haut de gamme pour une entreprise spécialisée en rénovation de toiture, ravalement de façade et isolation thermique par l’extérieur, conçu avec des technologies de pointe et un design responsive sur mesure.",
    image: "/globalreno.png",
  },
  {
    title: "Site e-commerce – Vente en ligne & paiement sécurisé",
    description:
      "Développement d’un site e-commerce complet avec gestion des produits, système de paiement sécurisé et interface utilisateur optimisée pour tous les appareils.",
    image: "/retro2.png",
  },
  {
    title: "Application web – Localisation d’eau potable et sanitaires",
    description:
      "Développement d’une application web interactive permettant aux utilisateurs de trouver en temps réel des points d’eau potable et des toilettes publiques à proximité, grâce à la géolocalisation. Interface responsive, carte dynamique et technologies web modernes pour une expérience fluide et accessible sur tous les appareils.",
    image: "/Walterwater.jpeg",
  },
  {
    title: "Site vitrine – Rénovation & Isolation",
    description:
      "Conception d’un site vitrine professionnel pour une entreprise spécialisée dans la rénovation de toiture, le ravalement de façade et l’isolation thermique par l’extérieur. Site responsive, branding sur mesure et intégration des dernières technologies web pour une navigation fluide et une image de marque moderne.",
    image: "/siteconstruction.png",
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
              <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
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
