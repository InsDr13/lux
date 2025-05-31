import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { Camera } from 'lucide-react';

const projects = [
  {
    id: 'villa-moderne',
    title: 'Villa Moderne',
    description: 'Une villa contemporaine avec vue sur la lagune',
    thumbnail: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg'
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
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
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
      'https://images.pexels.com/photos/1643390/pexels-photo-1643390.jpeg',
      'https://images.pexels.com/photos/1643391/pexels-photo-1643391.jpeg',
      'https://images.pexels.com/photos/1643392/pexels-photo-1643392.jpeg'
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
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 bg-gold-600 hover:bg-gold-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Camera size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gold-600 text-white px-6 py-3 rounded hover:bg-gold-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Camera size={20} />
                    <span>Voir les photos ({project.images.length})</span>
                  </button>
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