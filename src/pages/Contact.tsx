import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Contactez-Nous</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold">Adresse</h3>
                    <p className="text-gray-600">Cocody, Abidjan<br />Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold">Téléphone</h3>
                    <p className="text-gray-600">+225 07 07 07 07 07</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">contact@luxurys.ci</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold">Horaires d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 8h - 18h<br />
                      Samedi: Sur rendez-vous<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                ></textarea>
                <button className="bg-gold-600 text-white px-8 py-3 rounded hover:bg-gold-700 transition w-full">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;