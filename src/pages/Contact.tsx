import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Send, Upload, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';

export default function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="bg-brand-black">
      <SEO 
        title="Contact & Free Quote" 
        description="Get a free estimate for tree removal, trimming, or emergency services in Clarksville, TN. Contact Jared Huskey today." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://lh3.googleusercontent.com/geougc-cs/ABOP9ptcu8bxwVCQxGqES3fThAfFmhoEQPpjgWM71G_NHdsybYlJHAVj1f6WBJYtl_jSPJgdSvnMNQ-NdWQrNXO4qeINloKaS-fiSUvEbmjPVoRjaucTDqXf7Fvno4UlR_oNuFglN2Zl0YSe7u_X" alt="Tree work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl mb-6"
          >
            Get A <span className="text-brand-orange">Quote</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Ready to command your canopy? Fill out the form below or call Jared directly for immediate assistance.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Column */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-3xl mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Call or Text</p>
                      <a href="tel:931-241-2515" className="text-2xl font-display hover:text-brand-orange transition-colors">931-241-2515</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                      <a href="mailto:thehuskeytreeservice@gmail.com" className="text-lg font-medium hover:text-brand-orange transition-colors break-all">thehuskeytreeservice@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Our Location</p>
                      <p className="text-lg font-medium text-gray-300">1730 Woodlawn Road,<br />Woodlawn, TN 37191</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Mon - Fri</span>
                    <span className="text-white font-bold">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Saturday</span>
                    <span className="text-white font-bold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sunday</span>
                    <span className="text-brand-orange font-bold">Emergency Only</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-brand-gray rounded-2xl border border-white/5">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-brand-orange" />
                  Fully Insured
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We carry comprehensive liability and workers' comp insurance for your peace of mind. Certificates available upon request.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-brand-gray p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jared Huskey" 
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="931-241-2515" 
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Type</label>
                    <select className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 focus:border-brand-orange outline-none transition-all appearance-none">
                      <option>Tree Removal</option>
                      <option>Tree Trimming</option>
                      <option>Emergency Service</option>
                      <option>Stump Grinding</option>
                      <option>Lot Clearing</option>
                      <option>Firewood</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Address / Area</label>
                    <input 
                      required
                      type="text" 
                      placeholder="123 Main St, Clarksville, TN" 
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Best Time to Call</label>
                    <div className="flex gap-4">
                      {['AM', 'PM', 'Anytime'].map((time) => (
                        <label key={time} className="flex-1">
                          <input type="radio" name="time" className="hidden peer" />
                          <div className="text-center py-3 border border-white/10 rounded-lg cursor-pointer peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all text-sm font-bold">
                            {time}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Photo Upload (Optional)</label>
                    <div className="relative">
                      <input type="file" className="hidden" id="photo-upload" />
                      <label 
                        htmlFor="photo-upload" 
                        className="flex items-center justify-center gap-2 w-full bg-brand-black border border-white/10 border-dashed rounded-lg px-4 py-3.5 cursor-pointer hover:border-brand-orange transition-all text-sm text-gray-400"
                      >
                        <Upload size={18} /> Upload Photo
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message / Project Details</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your trees..." 
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 focus:border-brand-orange outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand-orange text-white py-5 rounded-xl font-display text-2xl hover:bg-white hover:text-brand-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>Send Quote Request <Send size={24} /></>
                      )}
                    </button>
                    <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-widest">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section className="bg-brand-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Service <span className="text-brand-orange">Area</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Based in Woodlawn, TN, we serve a 50-mile radius surrounding Clarksville.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { name: 'Clarksville', state: 'TN', zip: '37040' },
              { name: 'Springfield', state: 'TN', zip: '37172' },
              { name: 'Hopkinsville', state: 'KY', zip: '42240' },
              { name: 'Fort Campbell', state: 'KY/TN', zip: '42223' },
              { name: 'Woodlawn', state: 'TN', zip: '37191' },
              { name: 'Dover', state: 'TN', zip: '37058' },
              { name: 'Erin', state: 'TN', zip: '37175' },
              { name: 'Adams', state: 'TN', zip: '37010' },
              { name: 'Pleasant View', state: 'TN', zip: '37146' },
              { name: 'White House', state: 'TN', zip: '37188' },
            ].map((city) => (
              <div key={city.name} className="flex items-center justify-between bg-brand-black p-5 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                  <span className="font-bold">{city.name}, {city.state}</span>
                </div>
                <span className="text-xs text-gray-500 font-bold tracking-wider">{city.zip}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-400">Don't see your city? If you're within 50 miles of Clarksville, we likely serve you. <a href="tel:931-241-2515" className="text-brand-orange font-bold hover:text-white transition-colors">Call to confirm →</a></p>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-brand-gray relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102434.3456789!2d-87.4833!3d36.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864d8!2sWoodlawn%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Huskey's Tree Service Location"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-brand-orange/5" />
      </section>
    </div>
  );
}
