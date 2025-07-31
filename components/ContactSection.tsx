
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-merkurie-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-merkurie-coral/10 rounded-full text-merkurie-accent text-sm font-semibold mb-4">
            Contact Us
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Ready to <span className="text-merkurie-accent">Get Started?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Let&#39;s discuss how we can elevate your brand with the perfect celebrity partnership.
            Get in touch for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-merkurie-surface/50 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="bg-merkurie-background/50 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-merkurie-background/50 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="company" className="text-white">Company</Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="bg-merkurie-background/50 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-3 py-2 bg-merkurie-background/50 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-merkurie-coral"
                />
              </div>
              <Button className="w-full  bg-merkurie-accent hover:text-merkurie-accent/90 text-black font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-merkurie-coral/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-merkurie-accent" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/70">theendorsementco@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-merkurie-coral/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-merkurie-accent" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-white/70">9881554403 / 9821581619</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-merkurie-coral/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-merkurie-accent" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Website</div>
                    <div className="text-white/70">elohimfilmproduction.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-merkurie-surface/30 rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Connect</h4>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="bg-merkurie-surface/30 rounded-lg h-48 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-merkurie-accent mx-auto mb-2" />
                <div className="text-white/70">Interactive Map</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
