"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import ConsultationDialog from "@/components/consultation-dialog"

export default function FooterSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <footer
        ref={sectionRef}
        className="relative overflow-hidden pt-24"
        style={{
          minHeight: "650px",
          background: `
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 35%, transparent 60%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 35%, transparent 60%),
            linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(31,41,55,0.95) 100%)
          `,
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Background image */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-0">
          <div className="relative h-full w-full">
            <Image
              src="/footer-backimage.png"
              alt="Footer background"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-600/40 to-transparent"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 md:px-12 py-16 flex flex-col">
          {/* CTA + Logo + Nav */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
            {/* Left: CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                We would love to hear from you.{" "}
                <span className="block">
                  LET'S WORK — <span className="underline decoration-yellow-400">TOGETHER</span>
                </span>
              </h2>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a consultation
                </Button>
              </motion.div>
            </motion.div>

            {/* Center: Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-white rounded-full border-4 border-gray-900 flex items-center justify-center shadow-xl mx-auto">
                <Image
                  src="/logo2.png"
                  alt="Company Logo"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
            </motion.div>

            {/* Right: Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 w-full flex justify-center lg:justify-end"
            >
              <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 text-center lg:text-right">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-900 font-medium text-base hover:text-yellow-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <p className="text-gray-700 text-sm">© 2024 The Endorsement Co. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Consultation Dialog */}
      <ConsultationDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
