import { Phone, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function SocialBar() {
  return (
    <>
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>+225 07 07 07 07 07</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}