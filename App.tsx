
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import MemoryGrid from './components/MemoryGrid';
import RomanticAiPoem from './components/RomanticAiPoem';
import ReasonCards from './components/ReasonCards';
import HeartParticles from './components/HeartParticles';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    document.title = "To My Valentine, Mim";
  }, []);

  const scrollToSection = (id: string, openLetter: boolean = false) => {
    if (openLetter) setIsLetterOpen(true);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative selection:bg-rose-200 selection:text-rose-900">
      <HeartParticles />
      
      {/* Celebration Overlay */}
      {hasAccepted && <Celebration onClose={() => setHasAccepted(false)} />}
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-romantic text-2xl font-bold text-rose-600">Always Mim</div>
          <div className="hidden md:flex gap-8 text-rose-800 font-medium text-sm">
            <button 
              onClick={() => scrollToSection('letter', true)} 
              className="hover:text-rose-500 transition-colors"
            >
              Letter
            </button>
            <button 
              onClick={() => scrollToSection('memories')} 
              className="hover:text-rose-500 transition-colors"
            >
              Our Journey
            </button>
            <button 
              onClick={() => scrollToSection('reasons')} 
              className="hover:text-rose-500 transition-colors"
            >
              Why I Love You
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-rose-500 animate-pulse">❤️</span>
          </div>
        </div>
      </nav>

      <main>
        <Hero 
          onReadLetter={() => scrollToSection('letter', true)} 
          onShowJourney={() => scrollToSection('memories')}
        />
        
        <div className="max-w-5xl mx-auto my-12 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
        </div>

        <LoveLetter isOpen={isLetterOpen} setIsOpen={setIsLetterOpen} />
        
        <RomanticAiPoem />

        <MemoryGrid />

        <div id="reasons">
          <ReasonCards />
        </div>

        <section className="py-32 bg-rose-900 text-white text-center relative overflow-hidden">
          <div className="relative z-10 px-4">
            <h2 className="text-5xl font-romantic mb-8">Will you be my Valentine, Mim?</h2>
            <p className="text-rose-200 max-w-lg mx-auto mb-12 text-lg">
              Because my heart only beats in your direction.
            </p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={() => setHasAccepted(true)}
                className="bg-rose-500 hover:bg-rose-400 text-white px-12 py-4 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-110 active:scale-95"
              >
                YES!
              </button>
              <button 
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  const x = Math.random() * 200 - 100;
                  const y = Math.random() * 200 - 100;
                  btn.style.transform = `translate(${x}px, ${y}px)`;
                }}
                className="bg-transparent border-2 border-rose-500/50 text-rose-300 px-12 py-4 rounded-full font-bold text-xl transition-all"
              >
                Maybe
              </button>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-rose-100 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-rose-100 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-rose-100 rotate-45"></div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-rose-50 border-t border-rose-100 text-center">
        <p className="text-rose-400 font-light">&copy; 2024 Created with Love for Mim</p>
      </footer>
    </div>
  );
};

export default App;
