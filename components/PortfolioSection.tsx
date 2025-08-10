"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink, Filter } from "lucide-react"

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Mood Indigo Festival Aftermovie",
      category: "tech",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      type: "video",
      description: "For IIT Bombay",
    },
    {
      title: "Groom Groom Balloon",
      category: "education",
      industry: "Education",
      image: "/moodi.webp",
      type: "campaign",
      description: "For Meta x Rayban",
    },
    {
      title: "Heema Dattani",
      category: "fashion",
      industry: "Beauty",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=250&fit=crop",
      type: "video",
      description: "For Mermade Hair",
    },
    {
      title: "Podcast show with Coach Neelu Taneja",
      category: "media",
      industry: "Entertainment",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
      type: "video",
      description: "Ft. Hiten Tejwani",
    },
    {
      title: "Swaad aur Sitare with Delnaaz Irani",
      category: "fmcg",
      industry: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      type: "campaign",
      description: "Season 1",
    },
    {
      title: "Maternity Bra Awareness",
      category: "fashion",
      industry: "Fashion",
      image: "/mmd folio.webp",
      type: "campaign",
      description: "For MMD India",
    },
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "video", label: "Video Content" },
    { key: "campaign", label: "Campaigns" },
    { key: "tech", label: "Technology" },
    { key: "fashion", label: "Fashion" },
    { key: "education", label: "Education" },
    { key: "media", label: "Media" },
    { key: "fmcg", label: "FMCG" },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter || project.type === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-400/10 rounded-lg rotate-45"></div>
      <div className="absolute top-1/2 right-5 w-16 h-16 border-2 border-yellow-400/20 rounded-full"></div>

      <div className="container mx-auto px-4 lg:px-24 py-20 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-500 font-medium text-lg">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 leading-tight mb-8">
            Featured <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            We bring brands closer to their audiences through powerful storytelling, strategic marketing, and meaningful
            celebrity endorsements. Whether it's launching a campaign, building buzz, or shaping perception, our team
            knows how to make moments that move the market.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {filters.map((filterOption, index) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 ${
                filter === filterOption.key
                  ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/25"
                  : "bg-white/80 text-gray-700 hover:bg-yellow-400/20 hover:text-gray-900 border border-gray-200 hover:border-yellow-400/50 shadow-sm hover:shadow-md"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={`${filter}-${index}`}
              className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-1"
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${400 + index * 100}ms both` : "none",
              }}
            >
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>

              <CardContent className="p-0 relative">
                {/* Image Container */}
                <div className="relative overflow-hidden h-40 lg:h-48">
                  <Image
                    src={project.image.startsWith("http") ? project.image : project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.type === "video" ? (
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                          <ExternalLink className="w-8 h-8 text-gray-900" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Industry Tag */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {project.industry}
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.type === "video" ? "Video" : "Campaign"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Action Indicator */}
                  <div className="mt-4 flex items-center text-yellow-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter to see more projects.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/10 rounded-full border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">More projects coming soon</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) rotate(2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  )
}
