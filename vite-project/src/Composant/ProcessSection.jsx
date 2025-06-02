import React from "react";

const steps = [
  {
    step: "01",
    title: "Analyse",
    description: "Étude approfondie de vos besoins et objectifs",
  },
  {
    step: "02",
    title: "Conception",
    description: "Design et architecture de votre solution",
  },
  {
    step: "03",
    title: "Développement",
    description: "Réalisation avec les technologies adaptées",
  },
  {
    step: "04",
    title: "Livraison",
    description: "Déploiement et accompagnement",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Notre <span className="text-blue-600">Processus</span>
          </h2>
          <p className="text-xl text-gray-600">
            Une méthodologie éprouvée pour garantir la réussite de vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map(({ step, title, description }, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                {step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
