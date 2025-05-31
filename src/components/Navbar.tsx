import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center" onClick={() => scrollToSection('home')}>
          <img src="/La maison de luxe.jpeg" alt="Luxurys Logo" className="h-16" />
        </a>
        
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 p-4 md:p-0 shadow-lg md:shadow-none`}>
          <a href="#home" className="text-gray-800 hover:text-gold-600 transition" onClick={() => scrollToSection('home')}>Accueil</a>
          <a href="#services" className="text-gray-800 hover:text-gold-600 transition" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#projects" className="text-gray-800 hover:text-gold-600 transition" onClick={() => scrollToSection('projects')}>Projets</a>
          <a href="#about" className="text-gray-800 hover:text-gold-600 transition" onClick={() => scrollToSection('about')}>À Propos</a>
          <a href="#contact" className="text-gray-800 hover:text-gold-600 transition" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}