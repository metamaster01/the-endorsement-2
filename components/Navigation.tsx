
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
          <a href="#home" className="text-white text-sm font-medium hover:text-merkurie-accent transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-sm font-medium hover:text-merkurie-accent transition-colors">
            About
          </a>
          <a href="#services" className="text-white text-sm font-medium hover:text-merkurie-accent transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-white text-sm font-medium hover:text-merkurie-accent transition-colors">
            Portfolio
          </a>
          <a href="#team" className="text-white text-sm font-medium hover:text-merkurie-accent transition-colors">
            Team
          </a>
          <a href="#contact" className="text-white text-sm font-medium hover:text-merkurie-accent transition-colors">
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
