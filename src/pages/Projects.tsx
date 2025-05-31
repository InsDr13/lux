import React from 'react';

function Projects() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Nos Projets</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                alt="Villa Moderne"
                className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-2">Villa Moderne</h3>
                <p className="text-center px-4">Une villa contemporaine avec vue sur la lagune</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
                alt="Résidence de Luxe"
                className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-2">Résidence de Luxe</h3>
                <p className="text-center px-4">Un complexe résidentiel haut de gamme</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg"
                alt="Penthouse"
                className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-2">Penthouse</h3>
                <p className="text-center px-4">Un penthouse avec finitions luxueuses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;