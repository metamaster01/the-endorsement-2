"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const teamMembers = [
    {
      name: "Robin Francis",
      role: "Founder & CEO",
      image: "/teams/team01.png",
      delay: 0.1,
    },
    {
      name: "Heet Thakkar",
      role: "Co- Founder",
      image : "/teams/team02.png",
      delay: 0.2,
    },
    {
      name: "Pranav pillai",
      role: "Creative Head",
      image: "/teams/team03.png",
      delay: 0.3,
    },
    {
      name: "Umesh S Nair",
      role: "Film Director",
      image: "/teams/team04.png",
      delay: 0.4,
    },
    {
      name: "Nagarjun Arya",
      role: "Marketing Head",
      image: "/teams/team05.png",
      delay: 0.5,
    },
    {
      name: "Isha Uikey",
      role: "Creative Assistance",
      image: "/teams/team06.png",
      delay: 0.6,
    },
    {
      name: "Rohan Poddar",
      role: "Editor",
      image: "/teams/team07.png",
      delay: 0.7,
    },
    {
      name: "Sharanya Shetty",
      role: "Sales Executive",
      image: "/teams/team08.png",
      delay: 0.8,
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef} id="team"
      className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-50 to-white relative overflow-hidden"
    >
      {/* Decorative Curved Arrow Image */}
      <div className="absolute hidden lg:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.2, delay: 0.8, ease: "easeOut" },
                }
              : {}
          }
          className="relative"
          style={{
            width: "450px",
            height: "350px",
            top: "0",
            left: "957.16px",
            transform: "rotate(52deg)",
          }}
        >
          <Image src="/image.png" alt="Decorative arrow" fill className="object-contain" />
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/10 rounded-lg rotate-45"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 border-2 border-yellow-400/20 rounded-full"></div>

      <div className="container mx-auto px-4 lg:px-24 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-3 h-3 bg-yellow-400 rounded-full"
            ></motion.div>
            <span className="text-yellow-500 font-medium text-lg">Our team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 leading-tight mb-8">
            Meet the <span className="text-yellow-400">Industry Experts</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Our diverse team combines creative vision with strategic expertise to deliver exceptional celebrity
            marketing campaigns.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col items-center group"
            >
              <motion.div variants={hoverVariants} className="relative mb-4">
                <Card
                  className="relative bg-gray-900 border-0 shadow-xl group-hover:shadow-2xl transition-all duration-500 w-full max-w-[300px] h-[300px] mx-auto"
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  <CardContent className="p-0 relative h-full w-full">
                    {/* Yellow Circular Background - Smaller */}
                    <div
                      className="absolute bg-yellow-400 z-10"
                      style={{
                        width: "220px",
                        height: "220px",
                        borderRadius: "50%",
                        top: "50px",
                        left: "30px",
                      }}
                    ></div>

                    {/* Team Member Image - Fits within card, head in yellow circle */}
                    <div className="relative z-20 h-full w-full flex items-end justify-center">
                      <div
                        className="relative"
                        style={{
                          width: "280px",
                          height: "300px",
                        }}
                      >
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                            objectPosition: "center top",
                          }}
                        />
                      </div>
                    </div>

                    {/* Hover Overlay Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent z-30"
                      style={{ borderRadius: "24px" }}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Member Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: member.delay + 0.3 }}
                className="text-center"
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 group-hover:text-yellow-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {member.role}
                </p>
              </motion.div>

              {/* Interactive Glow Effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.3 }}
                className="absolute inset-0 bg-yellow-400 rounded-full blur-xl -z-10"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          {/* <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/10 rounded-full border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors duration-300 cursor-pointer">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 bg-yellow-400 rounded-full"
            />
            <span className="text-gray-700 font-medium">Ready to work with experts?</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
