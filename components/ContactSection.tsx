"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, MessageCircle, Send, Sparkles, ArrowRight } from 'lucide-react'
import { getSupabaseClient } from "@/lib/supabase"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in name, email, and message.")
      return
    }

    setIsSubmitting(true)
    const supabase = getSupabaseClient()
    try {
      const { error: insertError } = await supabase.from("contact").insert([
        {
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || null,
          message: message.trim(),
        },
      ])
      if (insertError) {
        setError("Failed to send. Please try again.")
        console.error(insertError)
        return
      }
      setSubmitted(true)
    } catch (err) {
      console.error("Unexpected error:", err)
      setError("Unexpected error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumber = "9730733996" // 91 (India) + 98881554403
  const whatsappText = encodeURIComponent("Hello! I would like to discuss a celebrity/influencer consultation.")

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-black pb-56"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-yellow-300/5 blur-3xl rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 border border-yellow-500/15 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full text-yellow-400 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Let's discuss how we can elevate your brand with the perfect celebrity partnership. Get in touch for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form - Yellow component on black background */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl p-8 border border-yellow-600/40 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 shadow-[0_8px_30px_rgba(253,224,71,0.25)]"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-black/10 border border-black/20 mx-auto mb-4 flex items-center justify-center">
                  <Send className="w-7 h-7 text-gray-900" />
                </div>
                <p className="text-gray-900 text-lg font-medium">Thanks! Your message has been sent.</p>
                <p className="text-gray-800/80">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <Label htmlFor="contact-name" className="text-gray-900">Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/70 border-black/10 text-gray-900 placeholder:text-gray-700 focus-visible:ring-yellow-600"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <Label htmlFor="contact-email" className="text-gray-900">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/70 border-black/10 text-gray-900 placeholder:text-gray-700 focus-visible:ring-yellow-600"
                    />
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Label htmlFor="contact-company" className="text-gray-900">Company</Label>
                  <Input
                    id="contact-company"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-white/70 border-black/10 text-gray-900 placeholder:text-gray-700 focus-visible:ring-yellow-600"
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Label htmlFor="contact-message" className="text-gray-900">Message</Label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-white/70 border border-black/10 rounded-md text-gray-900 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                </motion.div>

                {error && <p className="text-red-700 text-sm">{error}</p>}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Other options reflected below the form */}
                <div className="pt-6">
                  <h4 className="text-base font-semibold text-gray-900 mb-3">Other ways to reach us</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href="mailto:theendorsementco@gmail.com" className="group">
                      <div className="rounded-lg border border-black/10 bg-white/80 px-4 py-3 flex items-center gap-3 transition-all group-hover:shadow-md">
                        <Mail className="w-5 h-5 text-gray-900" />
                        <span className="text-sm font-medium text-gray-900">Email</span>
                      </div>
                    </a>
                    <a href="tel:+919881554403" className="group">
                      <div className="rounded-lg border border-black/10 bg-white/80 px-4 py-3 flex items-center gap-3 transition-all group-hover:shadow-md">
                        <Phone className="w-5 h-5 text-gray-900" />
                        <span className="text-sm font-medium text-gray-900">Call</span>
                      </div>
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="rounded-lg border border-black/10 bg-white/80 px-4 py-3 flex items-center gap-3 transition-all group-hover:shadow-md">
                        <MessageCircle className="w-5 h-5 text-gray-900" />
                        <span className="text-sm font-medium text-gray-900">WhatsApp</span>
                      </div>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info - stays white on black for contrast */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in touch</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/15 rounded-lg flex items-center justify-center border border-yellow-500/30">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/70">theendorsementco@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/15 rounded-lg flex items-center justify-center border border-yellow-500/30">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-white/70">9881554403 / 9821581619</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/15 rounded-lg flex items-center justify-center border border-yellow-500/30">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Website</div>
                    <div className="text-white/70">elohimfilmproduction.com</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Connect</h4>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg h-48 border border-white/10 overflow-hidden"
            >
              <iframe
                title="Mumbai Location"
                src={"https://www.google.com/maps?q=Mumbai%2C%20Maharashtra&z=11&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
