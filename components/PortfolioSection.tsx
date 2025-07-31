'use client'
import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Mood Indigo Festival Aftermovie",
      category: "tech",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      type: "video",
      description: " For IIT Bombay"
    },
    {
      title: " Groom Groom Balloon",
      category: "education",
      industry: "Education",
      image: "moodi.webp",
      type: "campaign",
      description: "For Meta x Rayban"
    },
    {
      title: "Heema Dattani",
      category: "fashion",
      industry: "Beauty",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=250&fit=crop",
      type: "video",
      description: "For Mermade Hair"
    },
    {
      title: "Podcast show with Coach Neelu Taneja",
      category: "media",
      industry: "Entertainment",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
      type: "video",
      description: "Ft. Hiten Tejwani"
    },
    {
      title: "Swaad aur Sitare with Delnaaz Irani",
      category: "fmcg",
      industry: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      type: "campaign",
      description: " Season 1"
    },
    {
      title: " Maternity Bra Awareness",
      category: "fashion",
      industry: "Fashion",
      image: "mmd folio.webp",
      type: "campaign",
      description: " For MMD India"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'video', label: 'Video Content' },
    { key: 'campaign', label: 'Campaigns' },
    { key: 'tech', label: 'Technology' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'education', label: 'Education' },
    { key: 'media', label: 'Media' },
    { key: 'fmcg', label: 'FMCG' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project =>
      project.category === filter ||
      project.type === filter
    );

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/DeWatermark.ai.jpeg')] bg-cover bg-center bg-no-repeat opacity-85"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-merkurie-background/70 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-4xl font-bold text-black mb-6 font-poppins drop-shadow-lg">
            Featured <span className="text-merkurie-accent bg-merkurie-background/70 rounded-full px-4 py-2  ">Portfolio</span>
          </h2>
          <p className="text-xl text-black/90 max-w-3xl mx-auto drop-shadow-md">
             We bring brands closer to their audiences through powerful storytelling, strategic marketing, and meaningful
            celebrity endorsements. Whether it&apos;s launching a campaign, building buzz, or shaping perception, our team
            knows how to make moments that move the market.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${filter === filterOption.key
                ? 'bg-merkurie-background/85 text-merkurie-accent shadow-lg'
                : 'bg-merkurie-background/90 text-white hover:text-black hover:bg-merkurie-accent/60 border border-white/30 hover:border-merkurie-accent/50 hover:scale-105'
                }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-merkurie-background/85 backdrop-blur-sm rounded-lg overflow-hidden border border-merkurie-background/20 hover:border-merkurie-accent/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image.startsWith('http') ? project.image : `/${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.type === 'video' ? (
                    <Play className="w-12 h-12 text-white" />
                  ) : (
                    <ExternalLink className="w-12 h-12 text-white" />
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-merkurie-accent text-merkurie-background px-2 py-1 rounded text-xs font-semibold">
                  {project.industry}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;