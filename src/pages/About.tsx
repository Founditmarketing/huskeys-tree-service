import { motion } from 'motion/react';
import { Shield, Clock, User, Award, CheckCircle2, Facebook } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Counter from '../components/Counter';

export default function About() {
  return (
    <div className="bg-brand-black">
      <SEO 
        title="About Jared Huskey" 
        description="Learn about the 30 years of experience and family values behind Huskey's Tree Service in Woodlawn, TN." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000" alt="Forest" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl mb-6"
          >
            Our <span className="text-brand-orange">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Built on integrity, powered by experience, and dedicated to the Clarksville community since 2003.
          </motion.p>
        </div>
      </section>

      {/* Owner Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-8 border-l-8 border-brand-orange z-10" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Jared Huskey" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-orange p-10 rounded-2xl shadow-2xl">
                <span className="font-display text-5xl block leading-none">JARED HUSKEY</span>
                <span className="text-brand-black font-bold uppercase tracking-[0.2em] text-sm">Founder & Lead Arborist</span>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl leading-tight">
                30 Years of <span className="text-brand-orange">Commanding the Canopy.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                <p>
                  Tree work isn't just a job for Jared Huskey—it's a calling. With over three decades of experience in the industry, Jared has seen it all. From the most technical removals in tight residential quarters to large-scale commercial lot clearing, his approach remains the same: safety first, integrity always.
                </p>
                <p>
                  In 2003, Jared founded Huskey's Tree Service in Woodlawn, TN, with a simple mission: to provide the Clarksville area with professional tree care that homeowners could actually trust.
                </p>
                <p>
                  Today, Huskey's remains a tight-knit, two-person crew. This allows Jared to be on every single job site, ensuring that the "Huskey Standard" is met every time the chainsaw starts.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                    <Shield size={24} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-sm">Fully Insured</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                    <Award size={24} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-sm">Expert Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">The Huskey <span className="text-brand-orange">Standard</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our business is built on four core pillars that define every job we take on.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Safety First", desc: "We use professional-grade rigging and safety gear to protect your property and our crew." },
              { title: "Honest Pricing", desc: "No hidden fees or surprise costs. We provide clear, written estimates before work begins." },
              { title: "Local Authority", desc: "We know Tennessee trees. We understand the local climate and common species better than anyone." },
              { title: "Complete Cleanup", desc: "We don't just cut trees; we restore your yard. We leave every job site cleaner than we found it." },
            ].map((value, i) => (
              <div key={i} className="bg-brand-black p-10 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-all group">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-lg flex items-center justify-center mb-6 font-display text-2xl group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-orange rounded-3xl p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 text-brand-black">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl mb-4">By The Numbers</h2>
              <p className="text-xl font-medium opacity-80">Decades of dedication to the Clarksville community.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-display mb-2">
                  <Counter end={30} suffix="+" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-display mb-2">
                  <Counter end={2003} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Community Section */}
      <Section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">Born & Raised in <span className="text-brand-orange">Tennessee.</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                We aren't a national franchise. We're your neighbors. We live in Woodlawn, work in Clarksville, and shop in Springfield. When you hire Huskey's, you're supporting a local family business that cares about the beauty and safety of our shared community.
              </p>
              <ul className="space-y-4">
                {['Montgomery County', 'Stewart County', 'Robertson County', 'Cheatham County', 'Christian County (KY)'].map((county) => (
                  <li key={county} className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-orange" size={24} />
                    {county}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <a 
                  href="https://www.facebook.com/HuskeysTreeService" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-gray px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-orange transition-all"
                >
                  <Facebook size={20} /> Follow Our Work
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tn1/600/800" alt="Tennessee Landscape" className="rounded-xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/tn2/600/800" alt="Tree Work" className="rounded-xl aspect-[3/4] object-cover mt-12" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
