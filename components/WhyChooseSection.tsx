"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  startAnimation: boolean
}

function Counter({ end, duration = 2000, suffix = "", startAnimation }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, 800)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      clearTimeout(timeout)
    }
  }, [end, duration, startAnimation])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function CelebrityMarketingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [startCounters, setStartCounters] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      number: "01",
      title: "Exclusive Access",
      description: "Direct connections with top celebrities and influencers.",
    },
    {
      number: "02",
      title: "End-to-End Execution",
      description: "Complete management of endorsement deals from negotiation to execution.",
    },
    {
      number: "03",
      title: "Tailored Strategy",
      description: "Custom endorsement solutions aligned with brand goals.",
    },
    {
      number: "04",
      title: "Production Expertise",
      description: "High-quality video production, including commercial ads, brand films, and digital content.",
    },
    {
      number: "05",
      title: "Proven Success",
      description: "A strong track record of high-ROI partnerships.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setStartCounters(true)
          }, 1200)
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
      className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden"
    >
      {/* Textured Background Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 30%),
            linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%)
          `,
          backgroundSize: "200px 200px, 300px 300px, 150px 150px, 20px 20px, 20px 20px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-24 py-16 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-500 font-medium text-lg">Why choose us?</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 leading-tight">
            You trusted <span className="text-yellow-400">Celebrity Marketing</span> Partner
          </h1>
        </div>

        {/* Desktop Stats Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-20 h-[500px]">
          {/* Column 1: Tall Celebrity Partnership Card */}
          <Card
            className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white h-full ${
              isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -translate-x-20 -rotate-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
            <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                From reel to real impact—our tech solutions preserve film heritage and amplify celebrity presence in the
                digital era.
              </p>
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-800 mb-4">
                  <Counter end={50} suffix="+" startAnimation={startCounters} />
                </div>
                <p className="text-gray-600 font-medium text-lg">Celebrity Partnership</p>
              </div>
            </CardContent>
          </Card>

          {/* Column 2: Two stacked cards */}
          <div className="flex flex-col gap-6 h-full">
            <Card
              className={`group relative overflow-hidden bg-gray-100/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-gray-50 flex-1 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-16 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-6 text-center relative z-10 h-full flex flex-col justify-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  <Counter end={5} suffix="M+" startAnimation={startCounters} />
                </div>
                <p className="text-gray-600 font-medium">Combine reach</p>
              </CardContent>
            </Card>

            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 flex-1 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-0 relative z-10 h-full">
                <div className="relative h-full min-h-[220px]">
                  <Image
                    src="/choose-us01.png"
                    alt="Professional woman portrait"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 3: Tall Yellow Client Satisfaction Card */}
          <Card
            className={`group relative overflow-hidden bg-yellow-400/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-800 hover:scale-105 hover:bg-yellow-400 h-full ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-600 transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-600/20 transition-all duration-300"></div>
            <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-800 mb-4">
                  <Counter end={100} suffix="%" startAnimation={startCounters} />
                </div>
                <p className="text-gray-800 font-medium text-lg">Clients satisfied</p>
              </div>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                Trusted by stars and studios alike, our 100% satisfaction record speaks for itself.
              </p>
            </CardContent>
          </Card>

          {/* Column 4: Two stacked cards */}
          <div className="flex flex-col gap-6 h-full">
            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-white flex-1 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-16 scale-95"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-6 text-center relative z-10 h-full flex flex-col justify-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  <Counter end={10} suffix="+" startAnimation={startCounters} />
                </div>
                <p className="text-gray-600 font-medium">Brand served</p>
              </CardContent>
            </Card>

            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 flex-1 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-0 relative z-10 h-full">
                <div className="relative h-full min-h-[220px]">
                  <Image
                    src="/choose-us02.png"
                    alt="Professional photographer with cameras"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Funky Layout */}
        <div className="lg:hidden mb-20">
          {/* Mobile Stats Cards - Funky Circular Layout */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Celebrity Partnership - Top Left */}
            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white ${
                isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -translate-x-10 -rotate-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-4 text-center relative z-10">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <Counter end={50} suffix="+" startAnimation={startCounters} />
                </div>
                <p className="text-gray-600 font-medium text-sm">Celebrity Partnership</p>
              </CardContent>
            </Card>

            {/* Combine Reach - Top Right */}
            <Card
              className={`group relative overflow-hidden bg-gray-100/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-gray-50 ${
                isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-10 rotate-12"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-4 text-center relative z-10">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <Counter end={5} suffix="M+" startAnimation={startCounters} />
                </div>
                <p className="text-gray-600 font-medium text-sm">Combine reach</p>
              </CardContent>
            </Card>
          </div>

          {/* Yellow Card - Center Wide */}
          <Card
            className={`group relative overflow-hidden bg-yellow-400/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-800 hover:scale-105 hover:bg-yellow-400 mb-8 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-600 transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-600/20 transition-all duration-300"></div>
            <CardContent className="p-6 text-center relative z-10">
              <div className="text-5xl font-bold text-gray-800 mb-2">
                <Counter end={100} suffix="%" startAnimation={startCounters} />
              </div>
              <p className="text-gray-800 font-medium text-lg">Clients satisfied</p>
              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                Trusted by stars and studios alike, our 100% satisfaction record speaks for itself.
              </p>
            </CardContent>
          </Card>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Brand Served - Bottom Left */}
            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-white ${
                isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -translate-x-10 rotate-6"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-4 text-center relative z-10">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <Counter end={10} suffix="+" startAnimation={startCounters} />
                </div>
                <p className="text-gray-600 font-medium text-sm">Brand served</p>
              </CardContent>
            </Card>

            {/* Description Card - Bottom Right */}
            <Card
              className={`group relative overflow-hidden bg-gray-50/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-gray-50 ${
                isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-10 -rotate-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-4 text-center relative z-10 flex items-center justify-center">
                <p className="text-xs text-gray-500 leading-relaxed">
                  From reel to real impact—our tech solutions preserve film heritage.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Image Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-0 relative z-10">
                <div className="relative h-32">
                  <Image
                    src="/choose-us01.png"
                    alt="Professional woman portrait"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card
              className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-yellow-400/20 transition-all duration-300"></div>
              <CardContent className="p-0 relative z-10">
                <div className="relative h-32">
                  <Image
                    src="/choose-us02.png"
                    alt="Professional photographer with cameras"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features List - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Center the last feature on mobile, normal on desktop */}
          <div
            className={`group transition-all duration-600 md:col-span-2 lg:col-span-1 md:flex md:justify-center lg:block ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${800 + 4 * 100}ms` }}
          >
            <div className="flex items-start gap-4 md:max-w-md lg:max-w-none">
              <div className="text-yellow-400 font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {features[4].number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {features[4].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{features[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
