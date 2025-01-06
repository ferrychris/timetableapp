import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Smart Timetable Generation for Modern Schools
        </h1>
        <p className="text-xl text-purple-200 mb-12">
          Automate your school's timetable creation process with AI-powered scheduling that considers all constraints and preferences.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full flex items-center space-x-2 transition">
            <span>Try Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-purple-400 hover:bg-purple-800/30 px-8 py-3 rounded-full transition">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;