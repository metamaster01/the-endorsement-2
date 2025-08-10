"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Film, Star, Users } from "lucide-react"

  const cards = [
    {
      icon: Film,
      title: "Legacy of Excellence",
      description:
        "With years of expertise in filmmaking, Elohim Film Production has built strong relationships with top-tier celebrities, directors, and influencers. This industry insight and access are now fuelling the growth of The Endorsement Co.",
    },
    {
      icon: Star,
      title: "Creative Synergy",
      description:
        "Leveraging the creative expertise of Elohim Film Production, The Endorsement Co. offers a unique blend of entertainment and marketing, producing high-quality content alongside influencer-driven campaigns.",
    },
    {
      icon: Users,
      title: "Cross-Industry Power",
      description:
        "The partnership between Elohim Film Production and The Endorsement Co. ensures seamless integration of film production, celebrity endorsements, and digital marketing, creating a holistic approach to brand development.",
    },
  ];


const AboutSection = () => {
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isCardHovered, setIsCardHovered] = useState(false)

  const words = ["About Us", "Our Vision", "Our Mission", "About Us"]
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })
  const controls = useAnimation()

  // Mouse tracking for glow effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Typing animation effect
  useEffect(() => {
    if (!isInView) return

    const currentWord = words[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (typedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 50)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [typedText, isTyping, currentWordIndex, isInView, words])

  // Animation controls
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Smooth scroll to Our Story section
  const scrollToStory = () => {
    const storySection = document.getElementById("our-story")
    if (storySection) {
      storySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const storyVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6" id="about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Updated layout ratios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Left side - About Us (smaller area) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex items-start">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-3 h-3 rounded-full bg-v0yellow"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-base font-medium text-v0yellow">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  className="text-v0yellow"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Right side - Main content (larger area) */}
          <motion.div variants={itemVariants} className="lg:col-span-9 space-y-6">
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-gray-600">Powered by </span>
              <span className="text-v0yellow">Elohim Film Production Pvt. Ltd.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-900 max-w-4xl leading-relaxed">
              The Endorsement Co. is a premier celebrity and influencer marketing agency, founded as a subsidiary of
              Elohim Film Production, a leading film production company. Together, we bridge the worlds of entertainment
              and marketing, offering unparalleled access to celebrity talent and influencer networks.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                onClick={scrollToStory}
                className="bg-v0yellow text-black hover:bg-v0yellow/90 px-6 py-3 text-base font-medium rounded-full shadow-sm transform transition-all duration-300 hover:scale-105"
              >
                More About us
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature Cards Section - With yellow glow follow effect */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const [isHovered, setIsHovered] = useState(false);
          const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          };

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-gray-100 rounded-2xl p-6 overflow-hidden cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Yellow glow ball that follows mouse */}
              {isHovered && (
                <div
                  className="absolute w-32 h-32 bg-v0yellow/20 rounded-full blur-xl pointer-events-none transition-all duration-200 ease-out"
                  style={{
                    left: mousePos.x - 64,
                    top: mousePos.y - 64,
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col items-start space-y-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-v0yellow flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <card.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>

        {/* Our Story Section */}
        <motion.div
          id="our-story"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          <motion.div
            variants={storyVariants}
            className="bg-v0yellow text-black rounded-2xl p-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-base leading-relaxed mb-4">
              Born from the creative powerhouse of Elohim Film Production, The Endorsement Co. bridges the gap between
              authentic storytelling and strategic brand marketing. Our parent company&apos;s legacy in film production
              gives us unparalleled access to talent and industry insights.
            </p>
            <p className="text-base leading-relaxed">
              Our unique position in the entertainment ecosystem allows us to create campaigns that feel natural,
              engaging, and drive real business impact for brands across FMCG, fashion, technology, automotive, and
              beyond.
            </p>
          </motion.div>

          <motion.div variants={imageVariants} className="relative w-full h-80 md:h-auto rounded-2xl overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-full h-full">
              <Image
                src="/aboutus1.png"
                alt="Film production behind the scenes"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection
