
import React from 'react';
import { Memory } from './types';

export const REASONS_TO_LOVE = [
  "Your laugh makes my darkest days bright.",
  "The way you look at me when you think I'm not looking.",
  "Your kindness is a superpower that heals everyone around you.",
  "Our late-night conversations that feel like they could last forever.",
  "How you always know exactly what I'm thinking without a word.",
  "The way you make the most ordinary moments feel magical."
];

export const MEMORIES: Memory[] = [
  {
    id: 1,
    title: "Our First Meeting",
    description: "The moment the world stopped and everything changed.",
    imageUrl: "https://picsum.photos/seed/love1/800/600"
  },
  {
    id: 2,
    title: "That Rainy Afternoon",
    description: "Finding warmth in your smile while the world was grey outside.",
    imageUrl: "https://picsum.photos/seed/love2/800/600"
  },
  {
    id: 3,
    title: "The Best Date Ever",
    description: "Laughter, good food, and realizing I never want to be anywhere else.",
    imageUrl: "https://picsum.photos/seed/love3/800/600"
  }
];

export const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
