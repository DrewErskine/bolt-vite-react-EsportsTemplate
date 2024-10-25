import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  {
    title: "League of Legends",
    players: "5v5 Team Competition",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    path: "/games/league-of-legends"
  },
  {
    title: "Rocket League",
    players: "3v3 Team Competition",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80",
    path: "/games/rocket-league"
  },
  {
    title: "Valorant",
    players: "5v5 Team Competition",
    image: "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?auto=format&fit=crop&q=80",
    path: "/games/valorant"
  }
];

export function FeaturedGames() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link
              to={game.path}
              key={game.title}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-64 object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-300">{game.players}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}