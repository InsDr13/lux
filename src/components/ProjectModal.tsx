import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function ProjectModal({ isOpen, onClose, images, title }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-6xl mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 p-2 rounded-full"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-white text-2xl font-bold mb-4 text-center">{title}</h2>
        
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-white"></span>`;
            }
          }}
          effect="fade"
          loop={true}
          onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
          className="w-full rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video bg-black">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-prev !text-white hover:!text-gold-600 transition-colors after:!text-3xl">
            <ChevronLeft size={32} className="bg-black bg-opacity-50 p-1 rounded-full" />
          </div>
          <div className="swiper-button-next !text-white hover:!text-gold-600 transition-colors after:!text-3xl">
            <ChevronRight size={32} className="bg-black bg-opacity-50 p-1 rounded-full" />
          </div>
        </Swiper>
        
        <div className="text-white text-center mt-4">
          Image {currentImageIndex + 1} sur {images.length}
        </div>
      </div>
    </div>
  );
}