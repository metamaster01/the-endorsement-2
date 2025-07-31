
import React from 'react';
import { CheckCircle, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Exclusive Access",
      description: "Direct connections with top celebrities and influencers."
    },
    {
      icon: TrendingUp,
      title: "Tailored Strategy",
      description: "Custom endorsement solutions aligned with brand goals."
    },
    {
      icon: Shield,
      title: "Proven Success",
      description: " A strong track record of high-ROI partnerships."
    },
    {
      icon: Zap,
      title: "End-to-End Execution",
      description: "Complete management of endorsement deals from negotiation to execution."
    },
    {
      icon: Globe,
      title: "Production Expertise",
      description: "High-quality video production, including commercial ads, brand films, and digital content."
    }
  ];

  const stats = [
    { number: "50+", label: "Celebrity Partnerships" },
    { number: "5M+", label: "Combined Reach" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "10+", label: "Brands Served" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/DeWatermark.ai.jpeg')] bg-cover bg-center bg-no-repeat opacity-85"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-merkurie-background/85 rounded-full text-merkurie-accent text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold text-black mb-6 font-poppins">
            Your Trusted <span className="text-merkurie-accent bg-merkurie-background/85 rounded-full px-4 py-2  ">Celebrity Marketing</span> Partner
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 py-2">
              <div className="flex items-center justify-center">
                <div className="bg-merkurie-background/80 w-16 h-16 rounded-xl flex items-center justify-center px-2 py-1">
                  <span className="text-2xl font-bold text-merkurie-accent">{stat.number}</span>
                </div>
              </div>
              <div className="text-merkurie-background/70 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>


        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-merkurie-background/80 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-merkurie-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-black/70 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
