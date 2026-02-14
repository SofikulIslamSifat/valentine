
import React from 'react';
import { MEMORIES } from '../constants';

const MemoryGrid: React.FC = () => {
  return (
    <section id="memories" className="py-24 px-4 bg-gradient-to-b from-transparent to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif-elegant text-rose-900 mb-4">Our Beautiful Journey</h2>
          <p className="text-rose-600 max-w-xl mx-auto">Some moments are etched in my heart forever. Here are just a few of them.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMORIES.map((memory) => (
            <div key={memory.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={memory.imageUrl} 
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-medium">Click to relive memory</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif-elegant font-bold text-rose-900 mb-2">{memory.title}</h3>
                <p className="text-rose-700 font-light">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGrid;
