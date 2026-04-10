import { motion } from 'motion/react';
import { Star, Quote, ExternalLink, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';

const reviews = [
  {
    id: 1,
    name: "Kimberly Binkley",
    location: "Google Review",
    text: "I would highly recommend these guys they went above and beyond an did a fantastic job at removing over 10 trees on my property including a huge elephant tree in the middle of my house they were very professional an careful an respectful of my property they did a great job.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 2,
    name: "Jason Keatts",
    location: "Google Review",
    text: "Outright amazing job. I hired this crew to trim enough weight off of both sides of a tree, so that the tree might not collapse during the potential ice storms of the winter. They showed up on time. Did the job at a fair and competitive price. They also did it quickly. Very courteous and prompt guys to deal with as well. I highly recommend them.",
    rating: 5,
    date: "6 months ago"
  },
  {
    id: 3,
    name: "Constanze Mendoza",
    location: "Google Review",
    text: "Jared and his crew did an amazing job cutting down this monster. Mind you. It was over solar panels, AC unit, she shed and a wooden privacy fence. Was I scared. You bet. Did I need to be. No sir. Went to work in the morning and when I came home it was gone. Not a branch or leaf in sight. Cleaned up and took everything with them.",
    rating: 5,
    date: "11 months ago"
  },
  {
    id: 4,
    name: "Davy D",
    location: "Google Review",
    text: "I needed a tree removed so I call them and within the hour they were here, gave me a quote which was half the price of the other guys. I literally went to use the bathroom and when I was out, the tree was out of the ground and in the wood chipper. To say I was impressed is an understatement. I HIGHLY recommend these guys they're efficient, friendly, and very safe. 10/10.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 5,
    name: "Paul McLaughlin",
    location: "Google Review",
    text: "I have used Huskey's Tree Service several times since 2020 and will not use any other tree service company. Jared is prompt, professional, and reasonably priced. Something else that is very important to me is that Jared (the owner) has always been on site with his crew to ensure everything is done properly.",
    rating: 5,
    date: "5 months ago"
  },
  {
    id: 6,
    name: "Shelby Gorden",
    location: "Google Review",
    text: "I highly recommend Huskey's Tree Service. Jared was super responsive and kind during our estimate and all through our scheduled work. The crew was professional, did amazing work and left our property cleaner than before they started. We had several large trees removed and stumps ground and they made sure that all of the debris was gone.",
    rating: 5,
    date: "11 months ago"
  },
  {
    id: 7,
    name: "Thanh Hutcheson",
    location: "Google Review",
    text: "Highly recommend Jared! He was incredibly professional, kind, and fair with his pricing. He arrived when he said he would, and was done in a very timely manner. He was very safe with his cutting and the clean up was top-notch—he left our yard better than he found it.",
    rating: 5,
    date: "4 months ago"
  },
  {
    id: 8,
    name: "Donny Petrie",
    location: "Google Review",
    text: "The team from Huskey's removed two large Maples and one very large oak, lifted the rest of our trees, ground all of our stumps, and left the site neat and clean. They were very professional, extremely hard working, communicated well and offered a fair price for all of the work.",
    rating: 5,
    date: "5 months ago"
  },
  {
    id: 9,
    name: "Roger G",
    location: "Google Review",
    text: "Awesome! I could not be happier. Two men did in 40 minutes what I thought would take 2 hours to complete. They removed the tree and the debris in minutes. Jared and Skyler were very polite and respectful. Thank you guys.",
    rating: 5,
    date: "10 months ago"
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
          <img src="https://lh3.googleusercontent.com/geougc-cs/ABOP9pvh6DhpokLOB7Q6CXVy-UW18W2yl9seRCNX4n1EN9JSgEJtGh-SIOVOme25gTfi2-T-1WQiVe5mzx2brLM8WR27o94AtGcA71C2Xcl9Lf3XKr-HqBEirKQN9usnGOdf3kI37V_grcHDrcqb" alt="Tree work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
