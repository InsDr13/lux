import React from 'react';
import { Award, Users, CheckCircle2 } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">À Propos de Nous</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Depuis notre création, La Maison LUXURYS s'est imposée comme un leader dans le domaine
                de l'architecture et de la construction de luxe à Abidjan. Notre engagement envers
                l'excellence et notre passion pour l'innovation nous ont permis de réaliser les rêves
                de nos clients les plus exigeants.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-gold-600" />
                  <span>Plus de 15 ans d'excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-gold-600" />
                  <span>Une équipe de 50+ experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold-600" />
                  <span>100+ projets réalisés</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
                alt="Notre équipe"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre vision est de redéfinir les standards de l'architecture de luxe en Côte d'Ivoire
              en créant des espaces qui allient esthétique, fonctionnalité et durabilité. Nous nous
              efforçons de dépasser les attentes de nos clients en leur offrant des solutions
              sur mesure qui reflètent leur personnalité et leur style de vie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;