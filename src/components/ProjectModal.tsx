import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function ProjectModal({ isOpen, onClose, images, title }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-6xl mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-white text-2xl font-bold mb-4 text-center">{title}</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="swiper-button-prev text-white hover:text-gray-300 transition-colors">
          <ChevronLeft size={24} />
        </div>
        <div className="swiper-button-next text-white hover:text-gray-300 transition-colors">
          <ChevronRight size={24} />
        </div>
      </div>
    </div>
  );
}