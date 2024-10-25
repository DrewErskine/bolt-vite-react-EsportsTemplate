import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Gamepad2 className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">HSGL</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="hover:text-blue-400 transition">Games</button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/games/league-of-legends" className="block px-4 py-2 hover:bg-gray-700 rounded-t-xl">League of Legends</Link>
              <Link to="/games/rocket-league" className="block px-4 py-2 hover:bg-gray-700">Rocket League</Link>
              <Link to="/games/valorant" className="block px-4 py-2 hover:bg-gray-700 rounded-b-xl">Valorant</Link>
            </div>
          </div>
          <Link to="/schedule" className="hover:text-blue-400 transition">Schedule</Link>
          <Link to="/teams" className="hover:text-blue-400 transition">Teams</Link>
          <Link to="/rankings" className="hover:text-blue-400 transition">Rankings</Link>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}