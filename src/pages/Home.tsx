import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedGames } from '../components/FeaturedGames';
import { Stats } from '../components/Stats';
import { CallToAction } from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <Stats />
      <CallToAction />
    </>
  );
}