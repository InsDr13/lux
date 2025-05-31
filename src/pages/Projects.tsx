import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

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
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-center px-4">{project.description}</p>
                  <button className="mt-4 px-6 py-2 bg-gold-600 text-white rounded hover:bg-gold-700 transition">
                    Voir les photos
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