import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, 
  Clock, 
  Truck, 
  Zap, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  Trees, 
  Scissors, 
  Flame, 
  Maximize, 
  Trash2,
  MapPin,
  Phone,
  Mail,
  User
} from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Counter from '../components/Counter';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { cn } from '@/src/lib/utils';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const characters = text.split("");
  return (
    <span className="inline-block">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + i * 0.05,
            ease: "easeIn",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Home" 
        description="Huskey's Tree Service - 30 years of experience serving Clarksville, TN. We don't just trim trees. We command them." 
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-32 overflow-hidden bg-black">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000" 
              alt="Tree work background" 
              className="w-full h-full object-cover animate-ken-burns"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
          <div className="absolute inset-0 bg-brand-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              damping: 12, 
              stiffness: 100,
              delay: 0.5 
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display leading-[0.9] mb-6">
              We Don't Just Trim Trees.<br />
              <span className="text-brand-orange text-shadow-glow">
                <TypewriterText text="We Command Them." delay={1.5} />
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium"
          >
            30 years of experience serving Clarksville and surrounding Tennessee communities.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link 
              to="/contact" 
              className="group relative bg-brand-orange text-white px-10 py-5 rounded font-display text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-orange/20"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </Link>
            <Link 
              to="/gallery" 
              className="px-10 py-5 rounded border-2 border-white/30 text-white font-display text-xl hover:bg-white hover:text-brand-black transition-all hover:border-white"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: <Clock className="text-brand-orange" />, text: "30 Yrs Experience" },
              { icon: <Shield className="text-brand-orange" />, text: "Fully Insured" },
              { icon: <Truck className="text-brand-orange" />, text: "Res. & Comm." },
              { icon: <Zap className="text-brand-orange" />, text: "Free Estimates" },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                {badge.icon}
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Google Review Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="mt-12 inline-flex items-center gap-3 bg-brand-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
          >
            <div className="flex gap-1 text-brand-orange">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-bold">5.0 GOOGLE RATING</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-brand-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Years Experience", value: 30, suffix: "+" },
            { label: "Service Radius", value: 50, suffix: "mi" },
            { label: "Trees Commanded", value: 5000, suffix: "+" },
            { label: "Happy Clients", value: 2500, suffix: "+" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-7xl font-display text-brand-orange mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 1. SERVICES MINI */}
      <Section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl mb-4">Everything Your Trees Need — <span className="text-brand-orange">Done Right.</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl">From precision trimming to complete removals, we handle every job with the same standard of excellence.</p>
            </div>
            <Link to="/services" className="group flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest hover:text-white transition-colors">
              View All Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tree Removal", icon: <Trees size={40} />, desc: "Safe and efficient removal of trees of any size, even in tight spaces." },
              { title: "Tree Trimming", icon: <Scissors size={40} />, desc: "Professional pruning to enhance health, safety, and aesthetic appeal." },
              { title: "Emergency Service", icon: <Zap size={40} />, desc: "24/7 storm damage response to protect your property when it matters most." },
              { title: "Stump Grinding", icon: <Maximize size={40} />, desc: "Complete removal of unsightly stumps to reclaim your landscape." },
              { title: "Lot Clearing", icon: <Trash2 size={40} />, desc: "Large-scale clearing for new construction or property expansion." },
              { title: "Firewood", icon: <Flame size={40} />, desc: "Premium seasoned firewood, cut and split for your convenience." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-brand-gray p-10 rounded-xl border border-white/5 hover:border-brand-orange/50 hover:shadow-[0_0_30px_rgba(232,80,0,0.1)] transition-all"
              >
                <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 2. FREE QUOTE MINI */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl text-brand-black mb-4">Get Your Free Estimate Today.</h2>
              <p className="text-xl text-brand-black/80 font-medium">No obligations, just honest pricing from local experts.</p>
            </div>
            <div className="lg:w-1/2 w-full">
              <form className="bg-brand-black p-8 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="bg-brand-gray border border-white/10 rounded px-4 py-3 focus:border-brand-orange outline-none transition-colors" />
                <input type="tel" placeholder="Phone Number" className="bg-brand-gray border border-white/10 rounded px-4 py-3 focus:border-brand-orange outline-none transition-colors" />
                <select className="bg-brand-gray border border-white/10 rounded px-4 py-3 focus:border-brand-orange outline-none transition-colors md:col-span-2">
                  <option>Select Service Type</option>
                  <option>Tree Removal</option>
                  <option>Tree Trimming</option>
                  <option>Emergency Service</option>
                  <option>Stump Grinding</option>
                  <option>Lot Clearing</option>
                  <option>Firewood</option>
                </select>
                <button className="md:col-span-2 bg-brand-orange text-white py-4 rounded font-display text-xl hover:bg-white hover:text-brand-black transition-all">
                  Send Quote Request
                </button>
                <Link to="/contact" className="md:col-span-2 text-center text-xs uppercase tracking-widest text-gray-500 hover:text-brand-orange transition-colors">
                  Full Quote Form →
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALLERY MINI */}
      <Section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">See the Work. <span className="text-brand-orange">Trust the Results.</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real results from real jobs in the Clarksville area.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-sm">01</span>
                Before & After Precision
              </h3>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000" 
                afterImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { img: "https://picsum.photos/seed/tree1/600/600", label: "Tree Removal" },
                { img: "https://picsum.photos/seed/tree2/600/600", label: "Trimming" },
                { img: "https://picsum.photos/seed/tree3/600/600", label: "Stump Grinding" },
                { img: "https://picsum.photos/seed/tree4/600/600", label: "Lot Clearing" },
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="text-white font-display text-xl text-center">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-brand-gray px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-orange transition-all">
              Browse Full Gallery <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 4. REVIEWS MINI */}
      <Section className="bg-brand-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-[20rem] font-display">"</div>
          <div className="absolute bottom-10 right-10 text-[20rem] font-display">"</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>GOOGLE GUARANTEED SERVICE</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-4">Don't Take Our Word For It.</h2>
            <p className="text-xl text-gray-400">Hundreds of satisfied customers across Middle Tennessee.</p>
          </div>

          <TestimonialCarousel />

          <div className="mt-16 text-center">
            <Link to="/reviews" className="text-brand-orange font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
              Read All Reviews <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. SERVICE AREA MINI */}
      <Section className="bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8">Serving Clarksville & <span className="text-brand-orange">50 Miles Around.</span></h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Based in Woodlawn, TN, we provide expert tree services to homeowners and businesses throughout Montgomery County and beyond. If you're within 50 miles of Clarksville, we've got you covered.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Clarksville', 'Springfield', 'Hopkinsville', 'Fort Campbell', 'Erin', 'Dover'].map((city) => (
                  <div key={city} className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                    <span>{city}, TN/KY</span>
                  </div>
                ))}
              </div>

              <Link to="/service-area" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                See If We Serve Your Area <ChevronRight size={20} />
              </Link>
            </div>

            <div className="relative aspect-square bg-brand-gray rounded-full flex items-center justify-center overflow-hidden border border-white/10">
              {/* Sonar Ping Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                  className="absolute w-1/2 h-1/2 border-2 border-brand-orange rounded-full"
                />
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                  className="absolute w-1/2 h-1/2 border-2 border-brand-orange rounded-full"
                />
              </div>
              
              <div className="relative z-10 text-center">
                <MapPin size={64} className="text-brand-orange mx-auto mb-4" />
                <span className="font-display text-4xl block">WOODLAWN, TN</span>
                <span className="text-brand-orange font-bold uppercase tracking-widest">Service Hub</span>
              </div>

              {/* Ticker */}
              <div className="absolute bottom-0 left-0 w-full bg-brand-orange py-3 overflow-hidden">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-12 whitespace-nowrap text-brand-black font-bold uppercase tracking-widest text-sm"
                >
                  {[...Array(10)].map((_, i) => (
                    <span key={i}>Clarksville • Springfield • Hopkinsville • Fort Campbell • Erin • Dover • Adams • Pleasant View • White House</span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. ABOUT MINI */}
      <Section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-orange z-10" />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Jared Huskey" 
                className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange p-8 rounded-xl shadow-2xl">
                <span className="font-display text-4xl block leading-none">JARED HUSKEY</span>
                <span className="text-brand-black font-bold uppercase tracking-widest text-sm">Owner & Operator</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl mb-8">30 Years. One Family. <span className="text-brand-orange">One Standard.</span></h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Since 2003, Jared Huskey has been providing the Clarksville area with tree services that prioritize safety, integrity, and results. What started as a small family operation has grown into the region's most trusted tree command center.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Est. 2003", icon: <Clock size={20} /> },
                  { label: "30 Yrs Exp", icon: <User size={20} /> },
                  { label: "Fully Insured", icon: <Shield size={20} /> },
                ].map((badge, i) => (
                  <div key={i} className="bg-brand-black p-4 rounded-lg text-center border border-white/5">
                    <div className="text-brand-orange flex justify-center mb-2">{badge.icon}</div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{badge.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                Meet Jared & the Crew <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FIREWOOD MINI */}
      <section className="relative py-32 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=2000" 
            alt="Firewood background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-6">Seasoned Firewood — <span className="text-brand-orange">Cut, Split & Ready.</span></h2>
            <p className="text-xl text-gray-300 mb-10">
              Don't get caught in the cold. We provide high-quality, seasoned hardwood firewood delivered right to your door or available for pickup.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {['Face Cord', 'Full Cord', 'Pickup Load'].map((product) => (
                <div key={product} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm">
                  {product}
                </div>
              ))}
            </div>

            <Link to="/firewood" className="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-5 rounded font-display text-xl hover:bg-white hover:text-brand-black transition-all">
              Order Firewood <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BLOG MINI */}
      <Section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl mb-4">Tree Tips <span className="text-brand-orange">From the Pros.</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl">Stay informed about tree health, safety, and seasonal maintenance.</p>
            </div>
            <Link to="/blog" className="group flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest hover:text-white transition-colors">
              Read the Blog <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "When is the Best Time to Trim Your Trees?", 
                date: "Oct 12, 2025", 
                excerpt: "Understanding the seasonal cycles of your Tennessee trees can save you money and prevent disease.",
                img: "https://picsum.photos/seed/blog1/800/600"
              },
              { 
                title: "5 Signs Your Tree is a Safety Hazard", 
                date: "Nov 05, 2025", 
                excerpt: "Don't wait for the next storm. Learn how to spot internal rot and structural weakness before it's too late.",
                img: "https://picsum.photos/seed/blog2/800/600"
              },
              { 
                title: "The Benefits of Professional Stump Grinding", 
                date: "Dec 20, 2025", 
                excerpt: "More than just aesthetics—removing stumps prevents pests and improves your property value.",
                img: "https://picsum.photos/seed/blog3/800/600"
              },
            ].map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-brand-gray rounded-xl overflow-hidden border border-white/5 hover:border-brand-orange/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 block">{post.date}</span>
                  <h3 className="text-2xl mb-4 group-hover:text-brand-orange transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-brand-orange transition-colors">
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Banner with Floating Particles */}
      <section className="relative py-24 bg-brand-orange overflow-hidden">
        {/* Floating Particles (Simplified) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={{ 
                y: [null, "-100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl text-brand-black mb-8">Ready to Command Your Canopy?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-brand-black text-white px-12 py-5 rounded font-display text-2xl hover:bg-white hover:text-brand-black transition-all shadow-2xl">
              Get A Free Quote
            </Link>
            <a href="tel:931-241-2515" className="bg-white text-brand-black px-12 py-5 rounded font-display text-2xl hover:bg-brand-black hover:text-white transition-all shadow-2xl">
              Call 931-241-2515
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
