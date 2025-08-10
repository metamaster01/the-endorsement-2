"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Star, Zap, CheckCircle, X } from 'lucide-react'
import { getSupabaseClient } from "@/lib/supabase"

interface FormData {
  name: string
  company: string
  job: string
  phone: string
  email: string
  service: string
  budget: string
}

interface ConsultationDialogProps {
  isOpen: boolean
  onClose: () => void
  triggerButton?: React.ReactNode
  onSuccess?: () => void
}

function mapBudgetToNumber(label: string): number | null {
  switch (label) {
    case "₹50K-":
      return 50000
    case "₹50K-₹1L":
      return 100000
    case "₹1L-₹5L":
      return 500000
    case "₹5L-₹25L":
      return 2500000
    case "₹25L+":
      return 2500000
    default:
      return null
  }
}

export default function ConsultationDialog({ isOpen, onClose, triggerButton, onSuccess }: ConsultationDialogProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    job: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  const budgetOptions = [
    { value: "₹50K-", label: "₹50K-" },
    { value: "₹50K-₹1L", label: "₹50K-₹1L" },
    { value: "₹1L-₹5L", label: "₹1L-₹5L" },
    { value: "₹5L-₹25L", label: "₹5L-₹25L" },
    { value: "₹25L+", label: "₹25L+" },
  ]

  const serviceOptions = [
    "Celebrity Endorsement",
    "Influencer Marketing",
    "Brand Collaboration",
    "Social Media Campaign",
    "Event Management",
    "Content Creation",
  ]

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.job.trim()) newErrors.job = "Job title is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.service) newErrors.service = "Service type is required"
    if (!formData.budget) newErrors.budget = "Budget is required"

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    if (!validateForm()) return

    const supabase = getSupabaseClient()

    const numericPhone = Number(formData.phone.replace(/\D/g, ""))
    const numericBudget = mapBudgetToNumber(formData.budget)

    setIsSubmitting(true)
    try {
      const { error } = await supabase.from("consultation").insert([
        {
          name: formData.name.trim(),
          company: formData.company.trim(),
          job: formData.job.trim(),
          phone: isNaN(numericPhone) ? null : numericPhone,
          email: formData.email.trim(),
          service: formData.service,
          budget: numericBudget,
        },
      ])

      if (error) {
        setSubmitError("Failed to submit. Please try again.")
        console.error(error)
        return
      }

      setIsSubmitted(true)
      onSuccess?.()
    } catch (err) {
      console.error("Unexpected error:", err)
      setSubmitError("Unexpected error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      job: "",
      phone: "",
      email: "",
      service: "",
      budget: "",
    })
    setIsSubmitted(false)
    setErrors({})
    setSubmitError(null)
  }

  const closeDialog = () => {
    onClose()
    setTimeout(() => {
      resetForm()
    }, 300)
  }

  return (
    <>
      {triggerButton}

      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="sm:max-w-xl bg-transparent border-0 shadow-none p-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
                className="relative"
              >
                <motion.button
                  onClick={closeDialog}
                  className="absolute -top-3 -right-3 z-50 w-8 h-8 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4 text-black" />
                </motion.button>

                <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 border-yellow-500/30 shadow-2xl rounded-xl overflow-hidden">
                  <CardContent className="p-4">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6"
                      >
                        <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-3">Thank You!</h2>
                        <p className="text-gray-300 mb-6">
                          Your consultation request has been submitted successfully. We&apos;ll get back to you within 30
                          minutes!
                        </p>
                        <Button
                          onClick={resetForm}
                          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg"
                        >
                          Submit Another Request
                        </Button>
                      </motion.div>
                    ) : (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-center mb-4"
                        >
                          <div className="flex items-center justify-center mb-2">
                            <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            <h1 className="text-lg lg:text-xl font-bold text-white">Do You Own A Brand or Business?</h1>
                            <Star className="w-5 h-5 text-yellow-500 ml-2" />
                          </div>
                          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1.5 rounded-lg mb-2 font-semibold text-xs">
                            <Zap className="w-3 h-3 inline mr-1" />
                            Boost Your Brand&apos;s Reach with Top Celebrities & Influencers!
                          </div>
                          <p className="text-yellow-300 font-medium text-xs">Share Your Details & Get a Call Within 30 Mins!</p>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-1">
                              <Label htmlFor="name" className="text-white font-medium text-sm">
                                Name *
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                placeholder="Eg. Manav Arora"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="bg-white/10 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20 h-8"
                              />
                              {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-1">
                              <Label htmlFor="company" className="text-white font-medium text-sm">
                                Company Name *
                              </Label>
                              <Input
                                id="company"
                                type="text"
                                placeholder="Eg. TaxBuddy"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                className="bg-white/10 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20 h-8"
                              />
                              {errors.company && <p className="text-red-400 text-xs">{errors.company}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-1">
                              <Label htmlFor="job" className="text-white font-medium text-sm">
                                Job Title *
                              </Label>
                              <Input
                                id="job"
                                type="text"
                                placeholder="Eg. Marketing Head"
                                value={formData.job}
                                onChange={(e) => handleInputChange("job", e.target.value)}
                                className="bg-white/10 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20 h-8"
                              />
                              {errors.job && <p className="text-red-400 text-xs">{errors.job}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-1">
                              <Label htmlFor="phone" className="text-white font-medium text-sm">
                                Mobile Number *
                              </Label>
                              <div className="flex">
                                <div className="bg-white/10 border border-yellow-500/30 rounded-l-md px-2 py-2 text-white border-r-0 text-sm h-8 flex items-center">
                                  {'🇮🇳 +91'}
                                </div>
                                <Input
                                  id="phone"
                                  type="tel"
                                  placeholder="12345 67890"
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange("phone", e.target.value)}
                                  className="bg-white/10 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20 rounded-l-none h-8"
                                />
                              </div>
                              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-1">
                              <Label htmlFor="email" className="text-white font-medium text-sm">
                                Email ID *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="abc@example.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="bg-white/10 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20 h-8"
                              />
                              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-1">
                              <Label htmlFor="service" className="text-white font-medium text-sm">
                                Service Type *
                              </Label>
                              <Select
                                value={formData.service}
                                onValueChange={(value) => handleInputChange("service", value)}
                              >
                                <SelectTrigger className="bg-white/10 border-yellow-500/30 text-white focus:border-yellow-500 focus:ring-yellow-500/20 h-8">
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-900 border-yellow-500/30">
                                  {serviceOptions.map((service) => (
                                    <SelectItem key={service} value={service} className="text-white hover:bg-yellow-500/20">
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.service && <p className="text-red-400 text-xs">{errors.service}</p>}
                            </motion.div>
                          </div>

                          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-1">
                            <Label className="text-white font-medium text-xs">Budget *</Label>
                            <RadioGroup
                              value={formData.budget}
                              onValueChange={(value) => handleInputChange("budget", value)}
                              className="flex flex-wrap gap-1.5"
                            >
                              {budgetOptions.map((option, index) => (
                                <motion.div
                                  key={option.value}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.2 + index * 0.05 }}
                                  className="flex items-center"
                                >
                                  <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                                  <Label
                                    htmlFor={option.value}
                                    className={`px-3 py-1.5 rounded-full border-2 cursor-pointer transition-all duration-200 font-medium text-xs ${
                                      formData.budget === option.value
                                        ? "bg-yellow-500 text-black border-yellow-500 shadow-lg transform scale-105"
                                        : "bg-white/10 text-white border-yellow-500/30 hover:border-yellow-500/60 hover:bg-white/20"
                                    }`}
                                  >
                                    {option.label}
                                  </Label>
                                </motion.div>
                              ))}
                            </RadioGroup>
                            {errors.budget && <p className="text-red-400 text-xs">{errors.budget}</p>}
                          </motion.div>

                          {submitError && (
                            <p className="text-red-400 text-xs text-center pt-1">{submitError}</p>
                          )}

                          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-2">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-2 text-sm rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                                  Submitting...
                                </div>
                              ) : (
                                <>
                                  <Zap className="w-4 h-4 mr-2" />
                                  Talk To Us Now!
                                </>
                              )}
                            </Button>
                          </motion.div>

                          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center pt-1">
                            <p className="text-yellow-300 text-xs flex items-center justify-center">
                              <Shield className="w-3 h-3 mr-1" />
                              {'Your information is safe with us 🔒'}
                            </p>
                          </motion.div>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
