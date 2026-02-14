
import React from 'react';
import { REASONS_TO_LOVE, HeartIcon } from '../constants';

const ReasonCards: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-rose-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif-elegant text-rose-900 text-center mb-16">6 Reasons Why I'm Yours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASONS_TO_LOVE.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
              <div className="text-rose-500 flex-shrink-0 mt-1">
                <HeartIcon />
              </div>
              <p className="text-rose-800 text-lg leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonCards;
