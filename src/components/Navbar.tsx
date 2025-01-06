import React from 'react';
import { Calendar } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6" />
          <span className="text-xl font-bold">TimeTable Pro</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-purple-300 transition">Features</a>
          <a href="#benefits" className="hover:text-purple-300 transition">Benefits</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Log in</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;