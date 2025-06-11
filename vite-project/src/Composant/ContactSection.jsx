import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // "success" | "error"

  const sendEmail = (data) => {
    setStatusMessage(null);
    emailjs
      .send(
        "service_4phonfy",         // Ton service ID EmailJS
        "template_mgqku7a",        // Ton template ID EmailJS
        {
          nom: data.nom,
          email: data.email,
          message: data.message,
        },
        "CaEGymB6UNH4G0NCW"        // Clé publique EmailJS
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
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bloc Contact Infos */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Contactez <span className="text-blue-600">GDK Connect</span>
              </h2>
              <p className="text-xl text-gray-300">
                Prêt à concrétiser votre projet ? Discutons ensemble de vos besoins.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white">contact@gdkconnect.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Téléphone</p>
                  <p className="text-white">07 84 86 45 39</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Adresse</p>
                  <p className="text-white">20 rue du Champ Blanc, Mazieres-en-Mauges, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire EmailJS */}
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="bg-gray-800 rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Nom complet</label>
              <input
                type="text"
                {...register("nom", { required: true })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                {...register("message", { required: true })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Envoyer le message
            </button>

            {statusMessage && (
              <p
                className={`text-sm mt-2 font-medium ${
                  statusType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
