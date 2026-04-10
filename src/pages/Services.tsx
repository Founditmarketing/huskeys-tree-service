import { motion } from 'motion/react';
import { 
  Trees, 
  Scissors, 
  CircleDot, 
  Trash2, 
  Flame,
  CheckCircle2,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'removal',
    title: 'Tree Removal',
    icon: <Trees size={48} />,
    desc: 'Sometimes, removal is the only safe option. Whether a tree is dead, diseased, or posing a structural threat to your property, we have the equipment and expertise to take it down safely.',
    features: ['Hazardous Tree Assessment', 'Precision Felling', 'Technical Rigging', 'Complete Cleanup'],
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'trimming',
    title: 'Tree Trimming & Pruning',
    icon: <Scissors size={48} />,
    desc: 'Proper trimming is essential for tree health and property safety. We remove deadwood, thin out dense canopies, and shape trees to enhance their natural beauty and longevity.',
    features: ['Crown Thinning', 'Deadwood Removal', 'Structural Pruning', 'Aesthetic Shaping'],
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Service',
    icon: <AlertTriangle size={48} />,
    desc: 'Storms don\'t wait for business hours. When a tree falls on your home, car, or power lines, our crew is ready to respond immediately to mitigate damage and restore safety.',
    features: ['Storm Damage Response', 'Hazardous Limb Removal', 'Insurance Claim Assistance', 'Rapid Mobilization'],
    img: 'https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'stump',
    title: 'Stump Grinding',
    icon: <CircleDot size={48} />,
    desc: 'Don\'t let old stumps ruin your curb appeal or attract pests. We use high-powered grinders to turn stumps into mulch, allowing you to replant or regrass the area.',
    features: ['Deep Root Grinding', 'Surface Root Removal', 'Mulch Backfilling', 'Site Restoration'],
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'clearing',
    title: 'Lot Clearing',
    icon: <Trash2 size={48} />,
    desc: 'Preparing for new construction or just want to reclaim your backyard? We clear brush, small trees, and debris to give you a clean slate for your next project.',
    features: ['Underbrush Removal', 'Selective Clearing', 'Debris Hauling', 'Grading Preparation'],
    img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'firewood',
    title: 'Seasoned Firewood',
    icon: <Flame size={48} />,
    desc: 'We supply premium hardwood firewood that has been seasoned to ensure a clean, hot burn. Available for delivery or pickup throughout the Clarksville area.',
    features: ['Hardwood Mix', 'Seasoned 6-12 Months', 'Custom Split Sizes', 'Delivery Available'],
    img: 'https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Services() {
  return (
    <div className="bg-brand-black">
      <SEO 
        title="Professional Tree Services" 
        description="Expert tree removal, trimming, stump grinding, and emergency services in Clarksville, TN. 30 years of experience." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2000" alt="Forest" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl mb-6"
          >
            Our <span className="text-brand-orange">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We provide comprehensive tree care solutions for residential and commercial properties, backed by three decades of boots-on-the-ground experience.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
        {services.map((service, i) => (
          <div key={service.id}>
            <Section className="py-0 md:py-0">
              <div className={cn(
                "flex flex-col lg:flex-row items-center gap-16",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}>
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-4 text-brand-orange">
                  <div className="p-4 bg-brand-orange/10 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.3em]">Service 0{i + 1}</span>
                </div>
                <h2 className="text-4xl md:text-5xl">{service.title}</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="text-brand-orange" size={20} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all"
                  >
                    Get A Quote For This <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 border-2 border-brand-orange/20 rounded-2xl group-hover:border-brand-orange/50 transition-colors duration-500" />
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </Section>
        </div>
      ))}
    </div>

      {/* CTA Section */}
      <Section className="bg-brand-gray border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl mb-8">Not Sure What You Need?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Jared offers free on-site consultations to assess your trees and provide expert recommendations.
          </p>
          <Link 
            to="/contact" 
            className="bg-brand-orange text-white px-12 py-5 rounded font-display text-2xl hover:bg-white hover:text-brand-black transition-all shadow-2xl"
          >
            Schedule A Free Consultation
          </Link>
        </div>
      </Section>
    </div>
  );
}
