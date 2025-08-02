
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <div className="text-2xl font-bold font-poppins tracking-wide">
            THE ENDORSEMENT COMPANY
          </div>
          <div className="text-xs text-merkurie-accent font-medium">
            Powered by Elohim Film Production Pvt. Ltd.
          </div>
        </div>

        {/* Navigation Menu */}
<div className="hidden md:flex items-center space-x-8">
  <a href="#home" className="relative group text-white text-sm font-medium transition-colors">
    <img
      src="/public/components/navhome.gif"
      alt="icon"
      className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    />
    Home
  </a>

  <a href="#about" className="relative group text-white text-sm font-medium transition-colors">
    <img
      src="/sparkle.gif"
      alt="icon"
      className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    />
    About
  </a>

  <a href="#services" className="relative group text-white text-sm font-medium transition-colors">
    <img
      src="/sparkle.gif"
      alt="icon"
      className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    />
    Services
  </a>

  <a href="#portfolio" className="relative group text-white text-sm font-medium transition-colors">
    <img
      src="/sparkle.gif"
      alt="icon"
      className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    />
    Portfolio
  </a>

  <a href="#team" className="relative group text-white text-sm font-medium transition-colors">
    <img
      src="/sparkle.gif"
      alt="icon"
      className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    />
    Team
  </a>

  <a href="#contact" className="relative group text-white text-sm font-medium transition-colors">
    <img
      src="/sparkle.gif"
      alt="icon"
      className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    />
    Contact
  </a>
</div>


        {/* Contact CTA */}
        <Button
          className="bg-merkurie-accent hover:bg-merkurie-accent/90 text-merkurie-background font-semibold px-6 py-2 rounded-md text-sm transition-all duration-200"
        >
          Book Consultation
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
