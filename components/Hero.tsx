'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  id: number;
  title: string;
  highlight: string;
  description: string;
  cta: string;
  link: string;
  external?: boolean;
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'Bem-vindo ao',
    highlight: 'GRACE-USP',
    description: 'Grupo de Alunas de Ciências Exatas',
    cta: 'Saiba Mais',
    link: '#about',
  },
  {
    id: 2,
    title: 'Escola de Web para Meninas:',
    highlight: 'Processo Seletivo Aberto!',
    description:
      'As inscrições para novas alunas já estão abertas! Inscrições até 27/07 — resultado da 1ª chamada em 07/08. Desenvolva novas habilidades, aprenda programação e faça parte dessa jornada.',
    cta: 'Inscreva-se',
    link: '/escola-web',
  },
  {
    id: 3,
    title: 'Mais que um Grupo,',
    highlight: 'um Movimento.',
    description:
      'No GRACE, unimos educação e comunidade para transformar o futuro das ciências exatas, uma menina de cada vez.',
    cta: 'Conheça Nossa História',
    link: '#about',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Restarting on every currentSlide change means a manual click/arrow
  // always gets the full 5s before the next auto-advance, instead of
  // firing almost immediately because a stale timer was still running.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-800 max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
            >
              {slides[currentSlide].title}{' '}
              <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                {slides[currentSlide].highlight}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {slides[currentSlide].external ? (
                <a
                  href={slides[currentSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                >
                  {slides[currentSlide].cta}
                </a>
              ) : (
                <Link
                  href={slides[currentSlide].link}
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                >
                  {slides[currentSlide].cta}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-gray-400 hover:text-gray-600 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-gray-400 hover:text-gray-600 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave-animation opacity-30">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255,0.3)" />
          </g>
          <g className="wave-animation opacity-50" style={{ animationDelay: '0.5s' }}>
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255,0.5)" />
          </g>
          <g className="wave-animation opacity-70" style={{ animationDelay: '1s' }}>
            <use xlinkHref="#wave-path" x="50" y="9" fill="rgba(255,255,255,0.7)" />
          </g>
        </svg>
      </div>
    </section>
  );
}

