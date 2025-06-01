import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { Camera, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'villa-moderne',
    title: 'Villa Moderne',
    description: 'Une villa contemporaine avec vue sur la lagune',
    thumbnail: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg'
    ]
  },
  {
    id: 'residence-luxe',
    title: 'Résidence de Luxe',
    description: 'Un complexe résidentiel haut de gamme',
    thumbnail: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      'https://images.pexels.com/photos/1643386/pexels-photo-1643386.jpeg',
      'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg',
      'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg'
    ]
  },
  {
    id: 'penthouse',
    title: 'Penthouse',
    description: 'Un penthouse avec finitions luxueuses',
    thumbnail: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
    images: [
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg'
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Nos Projets</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative group">
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-gold-600 text-white p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-gold-700"
                    >
                      <Camera size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gold-600 text-white px-6 py-3 rounded hover:bg-gold-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Camera size={20} />
                      <span>Voir les photos ({project.images.length})</span>
                    </button>
                    <button
                      className="w-full border-2 border-gold-600 text-gold-600 px-6 py-3 rounded hover:bg-gold-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        images={selectedProject?.images || []}
        title={selectedProject?.title || ''}
      />
    </div>
  );
}

export default Projects;