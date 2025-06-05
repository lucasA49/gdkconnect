import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "./Header";

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // "success" | "error"

  const sendEmail = (data) => {
    setStatusMessage(null); // reset le message
    emailjs
      .send(
        "service_4phonfy",
        "template_mgqku7a",
        {
          nom: data.nom,
          email: data.email,
          telephone: data.telephone,
          message: data.message,
        },
        "CaEGymB6UNH4G0NCW"
      )
      .then(() => {
        setStatusType("success");
        setStatusMessage("✅ Votre message a bien été envoyé !");
        reset();
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        setStatusType("error");
        setStatusMessage("❌ Une erreur est survenue : " + error.text);
      });
  };

  return (
    <>
      <Header />
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
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                {...register("nom", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Votre email"
                {...register("email", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                {...register("telephone", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Votre message"
                {...register("message", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Envoyer
            </button>

            {statusMessage && (
              <p
                className={`text-sm font-medium mt-2 ${
                  statusType === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>

          {/* Bloc de contact + Google Map */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="space-y-6 text-gray-700 mb-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600 w-6 h-6" />
                <span>20 Rue du Champ Blanc, 49280 Mazières-en-Mauges</span>
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

            <div className="overflow-hidden rounded-lg border border-gray-200">
              <iframe
                title="GDK Connect - Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.1136956011933!2d-0.8042409999999999!3d47.05762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480648ac81808a83%3A0xa25d97021566905a!2s20%20Rue%20du%20Champ%20Blanc%2C%2049280%20Mazi%C3%A8res-en-Mauges!5e0!3m2!1sfr!2sfr!4v1748986354619!5m2!1sfr!2sfr"
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
    </>
  );
};

export default ContactPage;
