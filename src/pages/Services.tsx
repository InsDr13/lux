import React from 'react';

function Services() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Nos Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Architecture Design</h3>
              <p className="text-gray-600 mb-4">
                Nous créons des designs architecturaux innovants et élégants qui reflètent votre vision.
                Notre équipe d'architectes expérimentés travaille en étroite collaboration avec vous pour
                donner vie à vos rêves.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Conception architecturale</li>
                <li>• Plans détaillés</li>
                <li>• Modélisation 3D</li>
                <li>• Études de faisabilité</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Construction de Luxe</h3>
              <p className="text-gray-600 mb-4">
                Spécialisés dans la construction haut de gamme, nous utilisons les meilleurs matériaux
                et techniques pour créer des espaces exceptionnels.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Villas de luxe</li>
                <li>• Appartements haut de gamme</li>
                <li>• Espaces commerciaux</li>
                <li>• Finitions premium</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Rénovation</h3>
              <p className="text-gray-600 mb-4">
                Transformez votre espace existant en un chef-d'œuvre moderne tout en préservant son
                caractère unique.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Rénovation complète</li>
                <li>• Modernisation</li>
                <li>• Extension</li>
                <li>• Optimisation d'espace</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;