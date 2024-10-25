import React from 'react';
import { MessageSquare, Twitch } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Compete?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of other schools in the most exciting high school esports league.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-full transition">
            <MessageSquare className="w-5 h-5" />
            Join Discord
          </a>
          <a href="#" className="flex items-center gap-2 bg-[#6441a5] hover:bg-[#7d5bbe] px-6 py-3 rounded-full transition">
            <Twitch className="w-5 h-5" />
            Follow on Twitch
          </a>
        </div>
      </div>
    </section>
  );
}