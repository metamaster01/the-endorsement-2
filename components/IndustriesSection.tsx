
import React from 'react';
import { ShoppingBag, Shirt, Smartphone, Heart, Car, Coffee, Home, Trophy, GraduationCap } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    { icon: ShoppingBag, name: "FMCG", color: "text-merkurie-accent" },
    { icon: Shirt, name: "Fashion & Lifestyle", color: "text-merkurie-coral" },
    { icon: Smartphone, name: "Technology & Electronics", color: "text-merkurie-teal" },
    { icon: Heart, name: "Health & Wellness", color: "text-merkurie-accent" },
    { icon: Car, name: "Automotive", color: "text-merkurie-coral" },
    { icon: Coffee, name: "Food & Beverage", color: "text-merkurie-teal" },
    { icon: Home, name: "Real Estate", color: "text-merkurie-accent" },
    { icon: Trophy, name: "Sports & Fitness", color: "text-merkurie-coral" },
    { icon: GraduationCap, name: "Education", color: "text-merkurie-teal" }
  ];

  return (
    <section className="py-20 bg-merkurie-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-merkurie-accent/10 rounded-full text-merkurie-accent text-sm font-semibold mb-4">
            Industries We Serve
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Expertise Across <span className="text-merkurie-accent">All Sectors</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our diverse industry experience ensures we understand the unique challenges and
            opportunities across all major market segments, from FMCG to technology.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 mx-auto bg-merkurie-surface/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-merkurie-surface transition-all duration-300 group-hover:scale-110">
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </div>
              <div className="text-white text-sm font-medium">{industry.name}</div>
            </div>
          ))}
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-merkurie-accent rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-merkurie-coral rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-merkurie-teal rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
