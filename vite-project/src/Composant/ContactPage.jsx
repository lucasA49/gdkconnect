import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contactez <span className="text-blue-600">GDK Connect</span>
        </h1>
        <p className="text-lg text-gray-600">
          Une idée de projet ? Une question ? Nous sommes là pour vous accompagner.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Formulaire de contact */}
        <form className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Votre message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Envoyer
          </button>
        </form>

        {/* Informations de contact + Google Map */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="space-y-6 text-gray-700 mb-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span>Cholet, France</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span>contact@gdkconnect.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <p className="text-base">
              Notre équipe vous répondra dans les plus brefs délais. N’hésitez pas à détailler
              votre projet pour que nous puissions mieux vous orienter.
            </p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <iframe
              title="GDK Connect Localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.112010265123!2d-0.8731326844283194!3d47.06016677915085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878a4f47c52b1%3A0x9b69b013a3edacb7!2sCholet!5e0!3m2!1sfr!2sfr!4v1717400000000!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
