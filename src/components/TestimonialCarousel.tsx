import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Davy D",
    location: "Google Review",
    text: "I needed a tree removed so I call them and within the hour they were here, gave me a quote which was half the price of the other guys. I literally went to use the bathroom and when I was out, the tree was out of the ground and in the wood chipper. To say I was impressed is an understatement.",
    rating: 5
  },
  {
    name: "Constanze Mendoza",
    location: "Google Review",
    text: "Jared and his crew did an amazing job cutting down this monster. It was over solar panels, AC unit, she shed and a wooden privacy fence. Went to work in the morning and when I came home it was gone. Not a branch or leaf in sight.",
    rating: 5
  },
  {
    name: "Paul McLaughlin",
    location: "Google Review",
    text: "I have used Huskey's Tree Service several times since 2020 and will not use any other tree service company. Jared is prompt, professional, and reasonably priced. The owner has always been on site with his crew to ensure everything is done properly.",
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
