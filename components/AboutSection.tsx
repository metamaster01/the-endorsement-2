
import React from 'react';
import { Film, Star, Users, Award } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const features = [
    {
      icon: Film,
      title: "Legacy of Excellence",
      description: " With years of expertise in filmmaking, Elohim Film Production has built strong relationships with top-tier celebrities, directors, and influencers. This industry insight and access are now fuelling the growth of The Endorsement Co. "
    },
    {
      icon: Star,
      title: "Creative Synergy",
      description: " Leveraging the creative expertise of Elohim Film Production, The Endorsement Co. offers a unique blend of entertainment and marketing, producing high-quality content alongside influencer-driven campaigns."
    },
    {
      icon: Users,
      title: "Cross-Industry Power",
      description: "The partnership between Elohim Film Production and The Endorsement Co. ensures seamless integration of film production, celebrity endorsements, and digital marketing, creating a holistic approach to brand development   "
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/DeWatermark.ai.jpeg')] bg-cover bg-center bg-no-repeat opacity-85"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-merkurie-background/85 rounded-full text-merkurie-accent text-sm font-semibold mb-4">
            About Us
          </div>
          <h2 className="text-4xl font-bold text-black mb-6 font-poppins">
            Powered by <span className="text-merkurie-accent bg-merkurie-background/85 rounded-full px-4 py-2  ">Elohim Film Production Pvt. Ltd.</span>
          </h2>
          <p className="text-xl text-black/90 max-w-3xl mx-auto">
            The Endorsement Co. is a premier celebrity and influencer marketing agency, founded as a subsidiary of Elohim 
Film Production, a leading film production company. Together, we bridge the worlds of entertainment and 
marketing, offering unparalleled access to celebrity talent and influencer networks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-merkurie-background/85 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-merkurie-accent/30 transition-all duration-300">
              <div className="w-12 h-12 bg-merkurie-accent/20 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-merkurie-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-black">Our Story</h3>
            <div className="w-40 h-1 bg-merkurie-accent mb-4"></div>
            <p className="text-black/70 mb-4">
              Born from the creative powerhouse of Elohim Film Production, The Endorsement Co. bridges
              the gap between authentic storytelling and strategic brand marketing. Our parent company&#39;s
              legacy in film production gives us unparalleled access to talent and industry insights.
            </p>
            <p className="text-black/70">
              Our unique position in the entertainment ecosystem allows us to create campaigns that
              feel natural, engaging, and drive real business impact for brands across FMCG, fashion,
              technology, automotive, and beyond.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop"
              alt="Film production behind the scenes"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute -bottom-4 -right-4 bg-merkurie-accent text-merkurie-background px-4 py-2 rounded-lg font-semibold">
              <Award className="w-4 h-4 inline mr-2" />
              Industry Leaders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
