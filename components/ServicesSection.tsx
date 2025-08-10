"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Film, Users, Calendar, Share2, Video } from "lucide-react"
import { GlowCard } from "@/components/ui/spotlight-card"

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const services = [
    {
      icon: Star,
      title: "Celebrity Endorsements",
      description:
        "We connect your brand with leading celebrities who truly resonate with your audience. From brand campaigns to ad shoots, we ensure every collaboration is meaningful and high-impact. ",
    },
    {
      icon: Film,
      title: "In-Film Branding",
      description:
        "Your brand, naturally placed where audiences are most engaged — in films, web series,and TV shows. We make sure your product gets noticed, not forced, with seamless integration into the storyline. ",
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description:
        "We partner with trusted social media influencers who can speak your brand's language authentically. Whether it's a lifestyle post, product review, or trend-led reel, we help you build real connections with real audiences.",
    },
    {
      icon: Calendar,
      title: "Event Appearances",
      description:
        "Need a star presence at your product launch or corporate event? We coordinate end to-end — from booking to logistics — to ensure your brand shines with the perfect celebrity appearance. ",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "From strategy to execution, we run digital campaigns that drive engagement and grow your brand's presence across platforms. Creative content, smart targeting, and consistent messaging, all handled by our team.",
    },
    {
      icon: Video,
      title: "Content Production",
      description:
        "We bring your brand stories to life through high-quality, engaging content tailored for every platform.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  return (
    <section id="services" className="py-20 bg-merkurie-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={headerVariants}
            className="inline-block px-4 py-2 bg-merkurie-coral/10 rounded-full text-merkurie-accent text-sm font-semibold mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2 variants={headerVariants} className="text-4xl font-bold text-white mb-6 font-poppins">
            Complete <span className="text-merkurie-accent">Celebrity Marketing</span> Solutions
          </motion.h2>
          <motion.p variants={headerVariants} className="text-xl text-white/70 max-w-3xl mx-auto">
            From A-list celebrity endorsements to strategic influencer partnerships, we craft comprehensive campaigns
            that align perfectly with your brand values and drive measurable business results.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} custom={index}>
              <GlowCard
                customSize={true}
                className="w-full h-auto min-h-[300px] bg-merkurie-surface/50 backdrop-blur-sm border border-white/10 hover:border-merkurie-coral/30 transition-all duration-300 hover:transform hover:scale-105 p-8"
                glowColor={index % 3 === 0 ? "merkurie-accent" : index % 3 === 1 ? "merkurie-coral" : "merkurie-teal"}
              >
                <div className="flex flex-col h-full">
                  <motion.div
                    className="w-12 h-12 bg-merkurie-coral/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-merkurie-coral/30 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-6 h-6 text-merkurie-accent" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 flex-grow">{service.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
