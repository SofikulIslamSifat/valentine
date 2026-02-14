
import React, { useState } from 'react';
import { generateRomanticPoem } from '../services/geminiService';
import { PoemResponse } from '../types';

const RomanticAiPoem: React.FC = () => {
  const [poemData, setPoemData] = useState<PoemResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState('soulful');

  const handleGenerate = async () => {
    setLoading(true);
    const data = await generateRomanticPoem(mood);
    setPoemData(data);
    setLoading(false);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto bg-rose-900 text-rose-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/3 p-10 bg-rose-800 flex flex-col justify-center border-b md:border-b-0 md:border-r border-rose-700">
          <h2 className="text-3xl font-serif-elegant mb-6">Ask the Universe for a Poem</h2>
          <p className="text-rose-200 text-sm mb-8">Choose a vibe and let the AI muses write something special for Mim.</p>
          
          <div className="space-y-3">
            {['Whimsical', 'Passionate', 'Deep', 'Sweet'].map((m) => (
              <button
                key={m}
                onClick={() => setMood(m.toLowerCase())}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${mood === m.toLowerCase() ? 'bg-rose-500 text-white' : 'hover:bg-rose-700 text-rose-300'}`}
              >
                {m}
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="mt-10 bg-white text-rose-900 px-6 py-3 rounded-xl font-bold hover:bg-rose-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-rose-900 border-t-transparent"></span>
            ) : '✨ Generate Poem'}
          </button>
        </div>
        
        <div className="md:w-2/3 p-10 relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] min-h-[400px] flex items-center justify-center">
          {poemData ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-300 text-xs rounded-full mb-4 uppercase tracking-widest">{poemData.theme}</span>
              <div className="whitespace-pre-line text-rose-50 text-xl md:text-2xl leading-relaxed font-sans">
                {poemData.poem}
              </div>
            </div>
          ) : (
            <div className="text-center text-rose-300 italic opacity-60">
              <p className="text-6xl mb-4">🖋️</p>
              <p className="text-lg">Select a mood and click generate to reveal a verse for Mim.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RomanticAiPoem;
