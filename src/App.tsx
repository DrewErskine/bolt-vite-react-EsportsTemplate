import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import LeagueOfLegends from './pages/LeagueOfLegends';
import RocketLeague from './pages/RocketLeague';
import Valorant from './pages/Valorant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/league-of-legends" element={<LeagueOfLegends />} />
          <Route path="/games/rocket-league" element={<RocketLeague />} />
          <Route path="/games/valorant" element={<Valorant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;