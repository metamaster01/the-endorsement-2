
import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const team = [
    {
      name: "Robin Francis",
      role: "Founder & CEO",
      image: "rf.webp"
    },
    {
      name: "Heet Thakkar",
      role: "Co-Founder",
      image: "ht.webp"
    },
    {
      name: "Pranav Pillai",
      role: "Creative Head",
      image: "pp.webp",
    },
    {
      name: "Umesh S Nair",
      role: "Film Director",
      image: "usn.webp",
    },
    {
      name: "Nagarjun Arya",
      role: "Marketing Head",
      image: "na.webp"
    },
    {
      name: "Isha Uikey",
      role: "Creative Assistant",
      image: "iu.webp"
    },
    {
      name: "Rohan Poddar",
      role: "Editor",
      image: "rp.webp"
    },
    {
      name: "Sharanya Shetty",
      role: "Sales Executive",
      image: "ss.webp"
    }
  ];

  return (
    <section id="team" className="py-20 bg-merkurie-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-merkurie-teal/10 rounded-full text-merkurie-accent text-sm font-semibold mb-4">
            Our Team
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Meet the <span className="text-merkurie-accent">Industry Experts</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our diverse team combines creative vision with strategic expertise to deliver
            exceptional celebrity marketing campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={member.image.startsWith('http') ? member.image : `/${member.image}`}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 rounded-xl"
                  width={400}
                  height={256}
                />
                <div className="absolute inset-0 bg-merkurie-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-merkurie-accent text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
