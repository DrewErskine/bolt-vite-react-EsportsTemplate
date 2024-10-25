import React from 'react';
import { Trophy, Users2, Swords, Clock } from 'lucide-react';

export default function RocketLeague() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90">
          <img
            src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80"
            alt="Rocket League"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Rocket League</h1>
            <p className="text-xl text-gray-300">
              Soccer meets racing in this high-octane 3v3 competition. Show off your aerial skills
              and team coordination.
            </p>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <Trophy className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Prize Pool</h3>
            <p className="text-gray-400">$3,000 per season</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Users2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Size</h3>
            <p className="text-gray-400">3 players + 1 sub</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Swords className="w-8 h-8 text-red-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Format</h3>
            <p className="text-gray-400">Double Elimination</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Clock className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Season Length</h3>
            <p className="text-gray-400">10 weeks</p>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Matches</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((match) => (
              <div key={match} className="bg-gray-800 p-6 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="font-bold">Boost Masters</div>
                    <div className="text-sm text-gray-400">South High</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">VS</div>
                  <div className="text-center">
                    <div className="font-bold">Aerial Aces</div>
                    <div className="text-sm text-gray-400">North High</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">March {match + 18}, 2024</div>
                  <div className="text-sm text-gray-400">5:00 PM EST</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules & Requirements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Rules</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                Standard arena settings only
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                5 minute matches
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                Best of 5 series
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                1 timeout per series
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Requirements</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full"></span>
                Gold rank or higher
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full"></span>
                Cross-platform play enabled
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full"></span>
                Discord for communication
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full"></span>
                Working microphone
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}