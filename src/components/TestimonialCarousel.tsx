import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Robert Miller",
    location: "Clarksville, TN",
    text: "Jared and his crew did an amazing job removing a massive oak tree that was leaning over our house. Professional, fast, and left the yard cleaner than they found it.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    location: "Woodlawn, TN",
    text: "Best tree service in the area. They were out the next day for an emergency limb removal after a storm. Fair pricing and excellent communication.",
    rating: 5
  },
  {
    name: "David Thompson",
    location: "Sango, TN",
    text: "Huskey's Tree Service is the only company I trust. They've done trimming and stump grinding for us multiple times. 30 years of experience really shows.",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl px-4"
        >
          <div className="flex justify-center gap-1 mb-6 text-brand-orange">
            {[...Array(testimonials[index].rating)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <Quote className="mx-auto mb-6 text-brand-orange/20" size={48} />
          <p className="text-xl md:text-2xl italic text-gray-300 mb-8 leading-relaxed">
            "{testimonials[index].text}"
          </p>
          <div>
            <h4 className="font-display text-xl text-white">{testimonials[index].name}</h4>
            <p className="text-brand-orange text-sm font-bold uppercase tracking-widest">{testimonials[index].location}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
