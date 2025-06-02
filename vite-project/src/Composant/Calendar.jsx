import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      datetime: selectedDate.toLocaleString()
    };

    emailjs.send(
      'TON_SERVICE_ID',      // Remplace par ton EmailJS service ID
      'TON_TEMPLATE_ID',     // Remplace par ton EmailJS template ID
      payload,
      'TA_PUBLIC_KEY'        // Remplace par ta public key EmailJS
    )
    .then(() => {
      alert("Rendez-vous envoyé avec succès !");
      reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Erreur lors de l'envoi.");
    });
  };

  return (
    <section className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Prendre un rendez-vous</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            {...register("nom", { required: true })}
            placeholder="Votre nom"
            className="w-full p-3 border rounded"
          />

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Votre email"
            className="w-full p-3 border rounded"
          />

          <textarea
            {...register("message")}
            placeholder="Votre message"
            rows={4}
            className="w-full p-3 border rounded"
          />

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Date et heure :</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeIntervals={30}
              timeFormat="HH:mm"
              dateFormat="dd/MM/yyyy HH:mm"
              className="w-full p-3 border rounded"
              minDate={new Date()}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
};

export default Calendar;
