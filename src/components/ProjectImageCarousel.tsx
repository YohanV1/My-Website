"use client";

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import OptimizedImage from './OptimizedImage';

interface ProjectImageCarouselProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectImageCarousel({ images, projectTitle }: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Auto-advance carousel every 10 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length, goToNext, goToPrevious]);

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (event.key) {
        case 'Escape':
          setIsModalOpen(false);
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, goToNext, goToPrevious]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (images.length === 0) {
    return (
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
        <div className="text-gray-400 dark:text-gray-500 text-sm z-10">No Images Available</div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-300 dark:to-gray-600 opacity-20"></div>
      </div>
    );
  }

  const modalContent = isModalOpen ? (
    <div 
      className="fixed inset-0 bg-white/60 backdrop-blur-xs z-[9999] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs hover:bg-white/90 text-gray-800 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image container */}
        <div 
          className="relative max-w-7xl w-full h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div style={{ maxHeight: '85vh', maxWidth: '95vw' }}>
                <OptimizedImage
                  src={image}
                  alt={`${projectTitle} - Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl rounded-lg"
                  sizes="(max-width: 768px) 95vw, 85vw"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows for modal */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-xs hover:bg-white/90 text-gray-800 p-4 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-xs hover:bg-white/90 text-gray-800 p-4 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image counter for modal */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-xs text-gray-800 px-4 py-2 rounded-full z-10 shadow-lg">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden rounded-t-lg group cursor-pointer" onClick={openModal}>
        {/* Image Container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <OptimizedImage
                src={image}
                alt={`${projectTitle} - Image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Render modal using portal */}
      {typeof document !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
} 