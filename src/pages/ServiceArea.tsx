import { motion } from 'motion/react';
import { MapPin, CheckCircle2, Navigation, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';

const cities = [
  { name: 'Clarksville', state: 'TN', zip: '37040', desc: 'Our primary service hub. We handle everything from historic downtown properties to new developments in Sango.' },
  { name: 'Springfield', state: 'TN', zip: '37172', desc: 'Serving Robertson County with expert tree removal and emergency storm response.' },
  { name: 'Hopkinsville', state: 'KY', zip: '42240', desc: 'Crossing the border to provide top-tier tree care for our Kentucky neighbors.' },
  { name: 'Fort Campbell', state: 'KY/TN', zip: '42223', desc: 'Proudly serving the military community and surrounding residential areas.' },
  { name: 'Woodlawn', state: 'TN', zip: '37191', desc: 'Our home base. We are the most trusted name for tree service in Woodlawn.' },
  { name: 'Dover', state: 'TN', zip: '37058', desc: 'Expert tree trimming and lot clearing for properties near the Land Between the Lakes.' },
  { name: 'Erin', state: 'TN', zip: '37175', desc: 'Reliable tree care for Houston County residents and business owners.' },
  { name: 'Adams', state: 'TN', zip: '37010', desc: 'Professional tree removal and stump grinding for the Adams community.' },
  { name: 'Pleasant View', state: 'TN', zip: '37146', desc: 'Maintaining the beautiful canopies of Cheatham County properties.' },
  { name: 'White House', state: 'TN', zip: '37188', desc: 'Comprehensive tree services for the growing White House community.' },
];

export default function ServiceArea() {
  return (
    <div className="bg-brand-black">
      <SEO 
        title="Service Area - Clarksville & 50mi Radius" 
        description="We serve Clarksville, Springfield, Hopkinsville, Woodlawn, and surrounding areas within a 50-mile radius. Local tree experts." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://lh3.googleusercontent.com/geougc-cs/ABOP9psPo675ReW98BpA1szrUoq2TX-D_NIjAk7_dtMPJekoizICVTHJ5EEXJMwx-m6bQN2ZcX3w5LP14UMdWLHUt1nv2OD4RqzKbM_p98CXAOrI3NuRMQuUXZ455lUb-Sg7QRk9XhxMvyy7uU0J" alt="Tree work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl mb-6"
          >
            Service <span className="text-brand-orange">Area</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Based in Woodlawn, TN, we command the canopies across a 50-mile radius surrounding Clarksville.
          </motion.p>
        </div>
      </section>

      {/* Map & Radius Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-brand-gray rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102434.3456789!2d-87.4833!3d36.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864d8!2sWoodlawn%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
                className="grayscale opacity-60"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-brand-orange/40 rounded-full animate-pulse" />
                <div className="w-1/2 h-1/2 border-2 border-brand-orange/20 rounded-full animate-ping" />
                <div className="bg-brand-orange p-4 rounded-full shadow-2xl">
                  <MapPin size={32} className="text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">Where We <span className="text-brand-orange">Command.</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                We are strategically located in Woodlawn, TN, allowing us to quickly reach clients throughout Montgomery, Stewart, Robertson, and Cheatham counties in Tennessee, as well as Christian and Todd counties in Kentucky.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Montgomery County, TN',
                  'Stewart County, TN',
                  'Robertson County, TN',
                  'Cheatham County, TN',
                  'Christian County, KY',
                  'Todd County, KY',
                ].map((county) => (
                  <div key={county} className="flex items-center gap-3 bg-brand-gray p-4 rounded-lg border border-white/5">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    <span className="font-bold text-sm uppercase tracking-wider">{county}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                  Request Service in Your Area <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* City SEO Blocks */}
      <Section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">Cities We <span className="text-brand-orange">Serve</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Don't see your city? If you're within 50 miles of Clarksville, we likely serve you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div key={city.name} className="bg-brand-black p-10 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Navigation size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 tracking-widest">{city.zip}</span>
                </div>
                <h3 className="text-2xl mb-4">{city.name}, {city.state}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{city.desc}</p>
                <Link to="/contact" className="text-brand-orange text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                  Get A Quote <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call To Action */}
      <Section>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-8">
            <Phone size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl mb-8">Need Emergency Service?</h2>
          <p className="text-xl text-gray-400 mb-10">
            We prioritize emergency calls throughout our entire service area. If a tree has fallen on your property, call us immediately.
          </p>
          <a 
            href="tel:931-241-2515" 
            className="bg-brand-orange text-white px-12 py-5 rounded font-display text-2xl hover:bg-white hover:text-brand-black transition-all shadow-2xl"
          >
            Call 931-241-2515 Now
          </a>
        </div>
      </Section>
    </div>
  );
}
