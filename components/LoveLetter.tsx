
import React, { useState } from 'react';
import { generateLetterSpeech } from '../services/geminiService';

interface LoveLetterProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ isOpen, setIsOpen }) => {
  const [isReading, setIsReading] = useState(false);

  const letterText = `Dearest Mim, 
As I sit here writing this, I find it hard to put into words just how much you mean to me. 
Every day with you feels like a beautiful dream that I never want to wake up from.
You've changed my world in ways I never thought possible. Your kindness, your intelligence, 
and your radiant soul are the things I cherish most.
Thank you for being my partner, my best friend, and my greatest love. 
I promise to cherish you today, tomorrow, and every single day that follows.
Forever Yours.`;

  const handleListen = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isReading) return;
    
    setIsReading(true);
    try {
      const base64Audio = await generateLetterSpeech(letterText);
      if (base64Audio) {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        
        const decode = (base64: string) => {
          const binaryString = atob(base64);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          return bytes;
        };

        const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) => {
          const dataInt16 = new Int16Array(data.buffer);
          const frameCount = dataInt16.length / numChannels;
          const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
          for (let channel = 0; channel < numChannels; channel++) {
            const channelData = buffer.getChannelData(channel);
            for (let i = 0; i < frameCount; i++) {
              channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
            }
          }
          return buffer;
        };

        const audioBuffer = await decodeAudioData(decode(base64Audio), audioCtx, 24000, 1);
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.onended = () => setIsReading(false);
        source.start();
      } else {
        setIsReading(false);
      }
    } catch (err) {
      console.error("Speech error:", err);
      setIsReading(false);
    }
  };

  return (
    <section id="letter" className="py-24 bg-white/50 backdrop-blur-sm relative z-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif-elegant text-rose-900 text-center mb-16">A Message From My Heart</h2>
        
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative cursor-pointer transition-all duration-700 transform ${isOpen ? 'scale-100 rotate-0' : 'scale-90 hover:scale-95'}`}
        >
          {/* Envelope */}
          <div className="w-full h-[500px] bg-rose-50 border-2 border-rose-200 shadow-2xl rounded-lg flex items-center justify-center relative overflow-hidden group">
            {!isOpen && (
              <div className="text-center transition-all group-hover:scale-110">
                <div className="text-7xl mb-4">💌</div>
                <p className="text-rose-500 font-romantic text-3xl">Click to open, Mim</p>
                <p className="text-rose-300 text-sm mt-2">Especially for you</p>
              </div>
            )}
            
            {/* The Letter Content */}
            <div className={`absolute inset-0 p-10 transition-all duration-1000 bg-rose-50 rounded-lg overflow-y-auto ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95 pointer-events-none'}`}>
              <div className="flex justify-between items-start mb-8">
                <p className="text-rose-800 font-romantic text-4xl">Dearest Mim,</p>
                <button 
                  onClick={handleListen}
                  disabled={isReading}
                  className="bg-rose-100 hover:bg-rose-200 text-rose-600 p-3 rounded-full transition-all group flex items-center gap-2 disabled:opacity-50"
                  title="Listen to the letter"
                >
                  {isReading ? (
                    <>
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-rose-500 animate-bounce"></div>
                        <div className="w-1 h-4 bg-rose-500 animate-bounce delay-75"></div>
                        <div className="w-1 h-4 bg-rose-500 animate-bounce delay-150"></div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider">Reading...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-semibold uppercase tracking-wider">Listen</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="space-y-6 text-rose-950 leading-loose text-xl font-light italic font-serif">
                <p>As I sit here writing this, I find it hard to put into words just how much you mean to me.</p>
                <p>Every day with you feels like a beautiful dream that I never want to wake up from.</p>
                <p>You've changed my world in ways I never thought possible. Your kindness, your intelligence, and your radiant soul are the things I cherish most.</p>
                <p>Thank you for being my partner, my best friend, and my greatest love. I promise to cherish you today, tomorrow, and every single day that follows.</p>
              </div>
              <p className="mt-12 text-rose-800 font-romantic text-4xl">Forever Yours.</p>
            </div>
          </div>
          
          {/* Decorative Wax Seal Effect */}
          {!isOpen && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-rose-600 rounded-full shadow-lg flex items-center justify-center border-4 border-rose-500 z-20">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
