import React from 'react';
import { Trophy, Users, Calendar } from 'lucide-react';

const stats = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    value: "50+",
    label: "Tournaments Hosted"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    value: "200+",
    label: "Active Schools"
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-400" />,
    value: "1000+",
    label: "Matches Played"
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-xl bg-gray-800">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}