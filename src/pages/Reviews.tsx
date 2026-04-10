import { motion } from 'motion/react';
import { Star, Quote, ExternalLink, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';

const reviews = [
  {
    id: 1,
    name: "Robert Miller",
    location: "Clarksville, TN",
    text: "Jared and his crew did an amazing job removing a massive oak tree that was leaning over our house. Professional, fast, and left the yard cleaner than they found it. Highly recommend Huskey's for any tree work.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Woodlawn, TN",
    text: "Best tree service in the area. They were out the next day for an emergency limb removal after a storm. Fair pricing and excellent communication throughout the process.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Sango, TN",
    text: "Huskey's Tree Service is the only company I trust. They've done trimming and stump grinding for us multiple times. 30 years of experience really shows in their precision.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Linda Williams",
    location: "Springfield, TN",
    text: "Very impressed with the lot clearing they did for our new build. They were efficient and the price was exactly as quoted. Great local business!",
    rating: 5,
    date: "4 months ago"
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "Fort Campbell, KY",
    text: "Excellent service. They removed three dead pines near my driveway. The crew was safe and professional. I'll definitely be calling them again for future work.",
    rating: 5,
    date: "5 months ago"
  },
  {
    id: 6,
    name: "Karen Smith",
    location: "Dover, TN",
    text: "Jared is a true professional. He explained exactly what needed to be done and why. The trimming they did on our maples looks fantastic.",
    rating: 5,
    date: "6 months ago"
  }
];

export default function Reviews() {
  return (
    <div className="bg-brand-black">
      <SEO 
        title="Customer Reviews - 5.0 Star Rating" 
        description="Read what our satisfied customers in Clarksville and Woodlawn have to say about Huskey's Tree Service." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000" alt="Forest" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-xl shadow-brand-orange/20"
          >
            <Star size={16} fill="currentColor" />
            <span>5.0 GOOGLE RATING</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-6"
          >
            Customer <span className="text-brand-orange">Reviews</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We take pride in every job we do. Here's what our clients have to say about the Huskey Standard.
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray p-10 rounded-3xl border border-white/5 relative group hover:border-brand-orange/30 transition-all"
              >
                <Quote className="absolute top-8 right-8 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors" size={64} />
                <div className="flex gap-1 text-brand-orange mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-display text-xl text-white">{review.name}</h4>
                    <p className="text-brand-orange text-xs font-bold uppercase tracking-widest">{review.location}</p>
                  </div>
                  <span className="text-gray-500 text-xs uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leave a Review CTA */}
      <Section className="bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-8">
            <MessageSquare size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl mb-8">Had a Great Experience?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Your feedback helps us grow and helps your neighbors find reliable tree care. Please consider leaving us a review on Google.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://share.google/SfKwOxkX9GZDBOIf1" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-orange text-white px-10 py-5 rounded font-display text-2xl hover:bg-white hover:text-brand-black transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              Leave A Google Review <ExternalLink size={24} />
            </a>
            <a 
              href="https://www.facebook.com/HuskeysTreeService" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-black text-white px-10 py-5 rounded font-display text-2xl hover:bg-white hover:text-brand-black transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              Review on Facebook <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
