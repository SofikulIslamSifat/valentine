
import React, { useEffect, useState } from 'react';

const HeartParticles: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newParticle = {
        id,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * (30 - 10) + 10}px`,
        duration: `${Math.random() * (10 - 5) + 5}s`
      };
      
      setParticles(prev => [...prev, newParticle]);

      // Remove after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 10000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="heart-particle"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.duration,
            bottom: '-50px'
          }}
        >
          ❤
        </div>
      ))}
    </>
  );
};

export default HeartParticles;
