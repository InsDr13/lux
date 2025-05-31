import { useEffect } from 'react';
import { Building2, Phone, Mail, MapPin, Clock, Award, Users, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const partners = [
  { name: 'Architect Studio', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
  { name: 'Design Co', logo: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg' },
  { name: 'Build Pro', logo: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg' },
];

const team = [
  {
    name: 'Jean Dupont',
    role: 'Architecte Principal',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg'
  },
  {
    name: 'Marie Claire',
    role: 'Designer d\'Intérieur',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg'
  },
  {
    name: 'Paul Martin',
    role: 'Chef de Projet',
    image: 'https://images.pexels.com/photos/5668860/pexels-photo-5668860.jpeg'
  },
];

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Propriétaire Villa Azur",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    text: "La Maison LUXURYS a transformé notre vision en réalité. Leur attention aux détails et leur professionnalisme sont exceptionnels."
  },
  {
    name: "Marc Dubois",
    role: "CEO, Groupe Immobilier Elite",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    text: "Une équipe remarquable qui comprend vraiment les besoins de ses clients. Le résultat final a dépassé toutes nos attentes."
  },
  {
    name: "Claire Moreau",
    role: "Architecte d'intérieur",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    text: "Collaborer avec La Maison LUXURYS a été une expérience enrichissante. Leur expertise technique est impressionnante."
  }
];

const faq = [
  {
    question: 'Quelle est la durée moyenne d\'un projet ?',
    answer: 'La durée varie selon la complexité du projet, généralement entre 6 et 18 mois.'
  },
  {
    question: 'Travaillez-vous sur des projets à l\'international ?',
    answer: 'Oui, nous réalisons des projets dans toute l\'Afrique de l\'Ouest.'
  },
  {
    question: 'Quels types de projets réalisez-vous ?',
    answer: 'Nous réalisons des villas de luxe, des immeubles résidentiels et des projets commerciaux haut de gamme.'
  },
];

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                alt="Luxury Home 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                alt="Luxury Home 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
                alt="Luxury Home 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">La Maison LUXURYS</h1>
              <p className="text-2xl mb-8">Architectes & Constructeurs de Luxe à Abidjan</p>
              <p className="text-xl mb-12">Excellence et raffinement dans chaque détail de votre projet immobilier</p>
              <button className="bg-gold-600 text-white px-8 py-3 rounded hover:bg-gold-700 transition">
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-gold-600" />
            <span>+225 07 07 07 07 07</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-gold-600" />
            <span>contact@luxurys.ci</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-gold-600" />
            <span>Cocody, Abidjan</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="text-gold-600" />
            <span>Lun - Ven: 8h - 18h</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos Services</h2>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos Projets</h2>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">À Propos de Nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Notre Histoire</h3>
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
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/your-video-id"
                title="Présentation La Maison LUXURYS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Passion pour l'Excellence</h2>
              <p className="text-gray-600 mb-6">
                Découvrez l'univers de La Maison LUXURYS à travers notre vidéo de présentation.
                Plongez dans notre processus créatif et découvrez comment nous transformons vos
                rêves en réalité.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold-600" />
                  <span>Design architectural innovant</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold-600" />
                  <span>Matériaux haut de gamme</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold-600" />
                  <span>Finitions luxueuses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Notre Vision</h2>
            <p className="text-gray-600 text-lg mb-12">
              Nous aspirons à redéfinir les standards de l'architecture de luxe en Côte d'Ivoire.
              Notre vision est de créer des espaces exceptionnels qui transcendent les attentes
              et inspirent les générations futures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <Building2 className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Repousser les limites de l'architecture moderne</p>
              </div>
              <div className="p-6">
                <HomeIcon className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Un engagement sans compromis vers la qualité</p>
              </div>
              <div className="p-6">
                <Users className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-600">Partenariat étroit avec nos clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-32 h-32 object-cover mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Témoignages Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <span className="text-xl font-semibold">{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contactez-Nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <p className="text-gray-600">Cocody, Abidjan<br />Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Téléphone</h4>
                    <p className="text-gray-600">+225 07 07 07 07 07</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">contact@luxurys.ci</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Horaires d'ouverture</h4>
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
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/La maison de luxe.jpeg" alt="Luxurys Logo" className="h-16 mb-4" />
              <p className="text-gray-400">
                Excellence dans l'architecture et la construction de luxe à Abidjan
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Cocody, Abidjan</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+225 07 07 07 07 07</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@luxurys.ci</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Architecture Design</li>
                <li>Construction de Luxe</li>
                <li>Rénovation</li>
                <li>Conseil & Expertise</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Horaires</h3>
              <p className="text-gray-400">
                Lundi - Vendredi: 8h - 18h<br />
                Samedi: Sur rendez-vous<br />
                Dimanche: Fermé
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 La Maison LUXURYS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}