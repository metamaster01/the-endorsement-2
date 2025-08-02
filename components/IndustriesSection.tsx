"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Shirt, Smartphone, Heart, Car, Coffee, Home, Trophy, GraduationCap } from "lucide-react"

interface MousePosition {
  x: number
  y: number
}

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const industries = [
    { icon: ShoppingBag, title: "FMCG", delay: "100ms" },
    { icon: Shirt, title: "Fashion & Lifestyle", delay: "200ms" },
    { icon: Smartphone, title: "Technology & Electronics", delay: "300ms" },
    { icon: Heart, title: "Health & wellness", delay: "400ms" },
    { icon: Car, title: "Automotive", delay: "500ms" },
    { icon: Coffee, title: "Food & Beverage", delay: "600ms" },
    { icon: Home, title: "Real Estate", delay: "700ms" },
    { icon: Trophy, title: "Sports & Fitness", delay: "800ms" },
    { icon: GraduationCap, title: "Education", delay: "900ms" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-300 via-amber-50 to-amber-100 relative overflow-hidden"
    >
      {/* Mouse Following Corner Elements - Hidden on mobile */}
      {/* <div
        className="hidden lg:block fixed w-4 h-4 bg-yellow-400/30 rounded-full pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      />
      <div
        className="hidden lg:block fixed w-2 h-2 bg-yellow-500/50 rounded-full pointer-events-none z-10 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x + 20,
          top: mousePosition.y - 20,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      />
      <div
        className="hidden lg:block fixed w-3 h-3 bg-yellow-300/40 rounded-full pointer-events-none z-10 transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y + 15,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      /> */}

      {/* Decorative Corner Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 border border-yellow-500/30 rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-yellow-300/20 rounded-full"></div>

      <div className="container mx-auto px-4 lg:px-24 py-20 relative z-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-500 font-medium text-lg">Industries we serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 leading-tight mb-8">
            Expertise Across{" "}
            <span className="text-yellow-400 relative">
              All Sectors
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Our diverse industry experience ensures we understand the unique challenges and opportunities across all
            major market segments, from FMCG to technology.
          </p>
        </div>

        {/* Desktop Industries Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.slice(0, 8).map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-3"
                }`}
                style={{ transitionDelay: industry.delay }}
              >
                <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                <CardContent className="p-6 relative z-10 flex items-center gap-4">
                  <Icon className="w-8 h-8 text-yellow-400 group-hover:text-gray-900 transition-colors duration-300 flex-shrink-0" />
                  <span className="text-white group-hover:text-gray-900 font-medium transition-colors duration-300">
                    {industry.title}
                  </span>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile Industries Grid - 2 Columns */}
        <div className="lg:hidden grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {industries.slice(0, 8).map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-3"
                }`}
                style={{ transitionDelay: industry.delay }}
              >
                <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                <CardContent className="p-4 relative z-10 flex flex-col items-center gap-3 text-center">
                  <Icon className="w-6 h-6 text-yellow-400 group-hover:text-gray-900 transition-colors duration-300 flex-shrink-0" />
                  <span className="text-white group-hover:text-gray-900 font-medium text-sm transition-colors duration-300">
                    {industry.title}
                  </span>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Education Card - Centered for both desktop and mobile */}
        <div className="flex justify-center mt-6">
          <Card
            className={`group relative overflow-hidden bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer w-full max-w-sm lg:max-w-sm ${
              isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-3"
            }`}
            style={{ transitionDelay: industries[8].delay }}
          >
            <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
            <CardContent className="p-4 lg:p-6 relative z-10 flex items-center gap-3 lg:gap-4 justify-center">
              <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 group-hover:text-gray-900 transition-colors duration-300 flex-shrink-0" />
              <span className="text-white group-hover:text-gray-900 font-medium text-sm lg:text-base transition-colors duration-300">
                {industries[8].title}
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Additional Interactive Elements */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <div className="inline-flex items-center gap-2 px-4 lg:px-6 py-3 bg-yellow-400/10 rounded-full border border-yellow-400/20">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-sm lg:text-base">Expanding across more industries</span>
          </div>
        </div>
      </div>
    </section>
  )
}
