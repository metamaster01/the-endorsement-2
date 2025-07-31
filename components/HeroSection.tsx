"use client"

import React from 'react';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from "@/lib/utils"
import StatisticsBadge from './StatisticsBadge';

// Animated geometric shapes component
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-merkurie-background to-merkurie-surface overflow-hidden flex items-center justify-center">
      {/* Enhanced background with animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-merkurie-accent/[0.05] via-transparent to-merkurie-coral/[0.05] blur-3xl" />

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-merkurie-accent/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-merkurie-coral/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-merkurie-teal/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-merkurie-accent/[0.20]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-merkurie-teal/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        {/* Original decorative dots */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-merkurie-accent rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-merkurie-coral rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-merkurie-teal rounded-full"></div>
        </div>
      </div>



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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm">
              <div className="w-2 h-2 bg-merkurie-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/70 tracking-wide">Elohim Film Production Legacy</span>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Powering Brands
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-merkurie-accent via-white/90 to-merkurie-coral">
                with Star Power
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
            <p className="text-base sm:text-lg md:text-xl text-white/40 leading-relaxed font-light tracking-wide max-w-2xl mx-auto mb-8">
              From A-list celebrity endorsements to seamless film integrations, we bridge the gap between brands and star power. Backed by Elohim Film Production&#39;s legacy of excellence, we deliver campaigns that create lasting impact and drive measurable results.
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
              className="bg-merkurie-accent hover:bg-merkurie-accent/90 text-merkurie-background font-semibold px-8 py-3 rounded-md text-base transition-all duration-200 flex items-center gap-2 group"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-merkurie-background font-semibold px-8 py-3 rounded-md text-base transition-all duration-200 flex items-center gap-2 bg-transparent"
            >
              <Play className="w-4 h-4" />
              Watch Showreel
            </Button>
          </motion.div>

          {/* Statistics Badge */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            className="flex justify-center"
          >
            <StatisticsBadge />
          </motion.div>

        </div>
      </div>

      {/* Enhanced accent decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-merkurie-accent to-transparent opacity-30"></div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-merkurie-background/20 via-transparent to-merkurie-background/10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
