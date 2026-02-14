
import React from 'react';

interface HeroProps {
  onReadLetter: () => void;
  onShowJourney: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReadLetter, onShowJourney }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4">
      <div className="z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm mb-6 animate-bounce">
          Happy Valentine's Day
        </span>
        <h1 className="text-6xl md:text-8xl font-serif-elegant font-bold text-rose-900 mb-6 drop-shadow-sm">
          To My Dearest <span className="font-romantic italic">Mim</span>
        </h1>
        <p className="text-xl md:text-2xl text-rose-700 font-light max-w-2xl mx-auto leading-relaxed">
          I wanted to create something as beautiful and unique as you are. 
          A digital garden of my love, built just for you.
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <button 
            onClick={onReadLetter}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:scale-105"
          >
            Read My Letter
          </button>
          <button 
            onClick={onShowJourney}
            className="bg-white border-2 border-rose-200 text-rose-600 hover:border-rose-300 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center"
          >
            Our Journey
          </button>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
