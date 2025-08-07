"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Film } from 'lucide-react';
import { cn } from "@/lib/utils"
// Assuming StatisticsBadge is a separate component, not provided in the original snippet.
// If it's not needed or not defined, you might remove its import.
// import StatisticsBadge from './StatisticsBadge';

const HeroSection = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false); // New state for section hover

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsSectionHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setIsSectionHovered(false)} // Reset hover state on mouse leave
    >
      {/* Background: Vibrant yellow gradient with dark black shade, changes on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out" // Added transition
        style={{
          backgroundImage: isSectionHovered
            ? "url('/image6.png')" // Image on hover
            : "url('/b22625d1a84ca020da898b20de76efb1cde1293c.png')" // Default image
        }}
      ></div>
      {/* Top-right corner: Small floating box with "500+ Celebrity Partners" */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-8 right-8 z-20 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm flex flex-col items-center gap-2">
          <span className="font-semibold">500+ Celebrity Partners</span>
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="/placeholder.svg?height=32&width=32"
              alt="Celebrity Avatar 1"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="/placeholder.svg?height=32&width=32"
              alt="Celebrity Avatar 2"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="/placeholder.svg?height=32&width=32"
              alt="Celebrity Avatar 3"
            />
          </div>
        </div>
      </motion.div>
      {/* Imagery: Left side - DSLR Camera */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        src="/image1.png"
        alt="Hand holding DSLR camera"
        className="absolute left-0 top-0 w-[200px] md:w-[400px] lg:w-[500px] z-0 opacity-70 md:opacity-100"
      />
      {/* Imagery: Right side - Megaphone */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        src="/image2.png"
        alt="Hand holding megaphone"
        className="absolute right-0 top-0 md:top-1/2 md:-translate-y-1/2 w-[200px] md:w-[400px] lg:w-[500px] z-0 opacity-70 md:opacity-100"
      />
      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Celebrity Badge Above Main Heading */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 border border-yellow-500">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-black tracking-wide">Elohim Film Production Legacy</span>
            </div>
          </motion.div>
          {/* Main Heading */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight font-poppins mb-6">
              <span className="text-black flex items-center justify-center pl-10">
                Powering
                {/* Reverted this image to static as per new request for full background hover */}
                <img
                  src="/a3997575c1030617f980951377353654bb285f96.png"
                  alt="Brand Icon"
                  className="inline-block w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] object-contain align-middle mx-0"
                />
                Brand
              </span>
              <span className="italic text-white block leading-tight -mt-4">
                with star power
              </span>
            </h1>
          </motion.div>
          {/* Subtitle */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-light tracking-wide max-w-2xl mx-auto mb-8">
              From A-list celebrity endorsements to seamless film integrations, we bridge the gap between brands and star power. Backed by Elohim Film Production&apos;s legacy of excellence, we deliver campaigns that create lasting impact and drive measurable results.
            </p>
          </motion.div>
          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12"
          >
            <Button
              className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-200 flex items-center gap-2 group"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-black text-black hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-full text-base transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 bg-transparent"
            >
              <Play className="w-4 h-4 text-black" />
              Watch Showreel
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
