import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          alt="Esports Arena"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Level Up Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> School Spirit</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join the premier high school esports league. Compete in popular titles, develop teamwork skills, and represent your school with pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition flex items-center justify-center">
              Join a Team <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition flex items-center justify-center">
              Watch Matches
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}