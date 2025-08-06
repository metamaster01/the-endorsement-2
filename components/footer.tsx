// "use client"

// import { useRef, useState } from "react"
// import Image from "next/image"
// import { motion, useInView } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import ConsultationDialog from "@/components/consultation-dialog"

// export default function FooterSection() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const sectionRef = useRef<HTMLElement>(null)
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About us", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Team", href: "#team" },
//     { name: "Contact", href: "#contact" },
//   ]

//   return (
//     <>
//       <footer
//         ref={sectionRef}
//         className="relative overflow-hidden pt-20"
//         style={{
//           minHeight: "600px",
//           backgroundColor: "#FFD600",
//         }}
//       >
//         {/* Main content */}
//         <div className="relative z-10 container mx-auto px-4 md:px-12 py-12 flex flex-col">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
//             {/* Left: Text + CTA */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8 }}
//               className="flex-1"
//             >
//               <h2 className="text-xl md:text-2xl font-semibold text-black mb-6 leading-snug">
//                 We would love to hear from you.{" "}
//                 <span className="block font-bold">
//                   LET’S WORK — TOGETHER
//                 </span>
//               </h2>
//               <Button
//                 onClick={() => setIsDialogOpen(true)}
//                 className="bg-black text-white hover:bg-gray-900 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-md"
//               >
//                 Book a consultation
//               </Button>
//             </motion.div>

//             {/* Center: Logo */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex-shrink-0"
//             >
//               <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-full border-4 border-black flex items-center justify-center shadow-xl">
//                 <Image
//                   src="/logo2.png"
//                   alt="Company Logo"
//                   width={140}
//                   height={140}
//                   className="rounded-full object-contain"
//                 />
//               </div>
//             </motion.div>

//             {/* Right: Navigation */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="flex-1 w-full flex justify-center lg:justify-end"
//             >
//               <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black text-base font-medium text-center lg:text-right">
//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     className="hover:text-gray-800 transition-colors duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                   >
//                     {link.name}
//                   </motion.a>
//                 ))}
//               </nav>
//             </motion.div>
//           </div>
//         </div>

//         {/* Full-width background image with no borders */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="relative w-full h-72 md:h-[400px]"
//         >
//           <Image
//             src="/footer-backimage.png"
//             alt="Footer Illustration"
//             fill
//             className="object-cover w-full h-full"
//             priority
//           />
//         </motion.div>

//         {/* Dialog */}
//         <ConsultationDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
//       </footer>
//     </>
//   )
// }


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

  return (
    <>
      <footer
        ref={sectionRef}
        className="relative overflow-hidden pt-20 min-h-[600px] bg-gradient-to-b from-[#0a0a0a] via-[#fef4b4] to-[#fffbea]"
      >
        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 md:px-12 py-12 flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
            {/* Left: Text + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-6 leading-snug">
                We would love to hear from you.{" "}
                <span className="block font-bold">LET’S WORK — TOGETHER</span>
              </h2>
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="bg-black text-white hover:bg-gray-900 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-md"
              >
                Book a consultation
              </Button>
            </motion.div>

            {/* Right: Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end w-full lg:w-auto"
            >
              <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-full border-4 border-black flex items-center justify-center shadow-xl">
                <Image
                  src="/logo2.png"
                  alt="Company Logo"
                  width={140}
                  height={140}
                  className="rounded-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-width background image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative w-full h-72 md:h-[400px]"
        >
          <Image
            src="/footer-backimage.png"
            alt="Footer Illustration"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        {/* Dialog */}
        <ConsultationDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </footer>
    </>
  )
}
