import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <FAQ />
        <footer className="container mx-auto px-6 py-8 text-center text-purple-200">
          <p>© 2024 TimeTable Pro. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;