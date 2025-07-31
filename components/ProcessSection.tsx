
import React from 'react';
import { MessageCircle, Search, Handshake, Lightbulb, Edit, Truck, BarChart } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Understanding your brand goals, target audience, and campaign objectives"
    },
    {
      icon: Search,
      title: "Research & Strategy",
      description: "Identifying the perfect celebrity match and developing comprehensive campaign strategy"
    },
    {
      icon: Handshake,
      title: "Negotiation & Contracts",
      description: "Securing favorable terms and managing all contractual agreements"
    },
    {
      icon: Lightbulb,
      title: "Development",
      description: "Creating compelling campaign concepts, scripts, and content strategy"
    },
    {
      icon: Edit,
      title: "Revisions",
      description: "Refining content based on feedback and ensuring brand alignment"
    },
    {
      icon: Truck,
      title: "Final Delivery",
      description: "Executing the campaign across all planned channels and platforms"
    },
    {
      icon: BarChart,
      title: "Tracking & Optimization",
      description: "Monitoring performance metrics and optimizing for maximum results"
    }
  ];

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/DeWatermark.ai.jpeg')] bg-cover bg-center bg-no-repeat opacity-85"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-b/10 rounded-full bg-merkurie-background/70 text-sm font-semibold mb-4">
            Our Process
          </div>
          <h2 className="text-4xl font-bold text-black mb-6 font-poppins">
            From Concept to <span className="text-merkurie-accent bg-merkurie-background/70 rounded-full px-4 py-2  ">Campaign Success</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Our proven 7-step process ensures every campaign is strategically planned,
            flawlessly executed, and delivers measurable results.
          </p>
        </div>

        <div className="relative">
          {/* Curved dotted path */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-80" viewBox="0 0 1200 400">
            <path
              d="M100 200 Q300 100 500 150 T900 120 Q1000 100 1100 150"
              stroke="#FBD009"
              strokeWidth="8"
              strokeDasharray="10,10"
              fill="none"
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-merkurie-background/70 rounded-full flex items-center justify-center mx-auto group-hover:bg-merkurie-background/90 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-merkurie-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-merkurie-accent text-black text-xs rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-black/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
