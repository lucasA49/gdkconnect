import React from 'react';

const NewsletterSection = () => (
  <section className="bg-blue-600 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à booster votre présence digitale ?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Recevez nos conseils et astuces pour optimiser votre stratégie digitale
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Votre email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            S'abonner
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
