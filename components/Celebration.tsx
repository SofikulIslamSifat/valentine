
import React from 'react';

interface CelebrationProps {
  onClose: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-rose-900/95 backdrop-blur-xl animate-in fade-in zoom-in duration-500 p-4">
      <div className="text-center max-w-2xl animate-in slide-in-from-bottom-12 duration-1000 delay-200">
        <div className="text-8xl mb-8 animate-bounce">💖</div>
        <h2 className="text-5xl md:text-7xl font-romantic text-white mb-6">
          I knew you'd say yes!
        </h2>
        <p className="text-rose-200 text-xl md:text-2xl font-light mb-12 leading-relaxed italic">
          "You have made me the happiest person in the world, Mim. Every second with you is a gift, and I can't wait to make more beautiful memories together."
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-12 opacity-80">
          <div className="text-4xl">🌹</div>
          <div className="text-4xl">✨</div>
          <div className="text-4xl">🥂</div>
        </div>

        <button 
          onClick={onClose}
          className="bg-white text-rose-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          Back to our story
        </button>
      </div>

      {/* Extra floating hearts for the celebration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-rose-400 opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            ❤
          </div>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
