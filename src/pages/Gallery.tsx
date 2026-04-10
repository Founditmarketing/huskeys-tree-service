import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { cn } from '../lib/utils';

const galleryItems = [
  { id: 1, category: 'Removal', img: 'https://picsum.photos/seed/rem1/800/1000', title: 'Large Oak Removal' },
  { id: 2, category: 'Trimming', img: 'https://picsum.photos/seed/trim1/800/600', title: 'Precision Canopy Pruning' },
  { id: 3, category: 'Emergency', img: 'https://picsum.photos/seed/em1/800/800', title: 'Storm Damage Cleanup' },
  { id: 4, category: 'Stump', img: 'https://picsum.photos/seed/stump1/800/600', title: 'Deep Stump Grinding' },
  { id: 5, category: 'Clearing', img: 'https://picsum.photos/seed/clear1/800/1000', title: 'Lot Clearing Project' },
  { id: 6, category: 'Removal', img: 'https://picsum.photos/seed/rem2/800/800', title: 'Hazardous Pine Removal' },
  { id: 7, category: 'Trimming', img: 'https://picsum.photos/seed/trim2/800/1000', title: 'Ornamental Shaping' },
  { id: 8, category: 'Removal', img: 'https://picsum.photos/seed/rem3/800/600', title: 'Tight Space Removal' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Removal', 'Trimming', 'Emergency', 'Stump', 'Clearing'];
  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex].id);
  };

  return (
    <div className="bg-brand-black">
      <SEO 
        title="Gallery - Our Work in Action" 
        description="See before and after photos of our tree removal, trimming, and lot clearing projects in Clarksville, TN." 
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
            Our <span className="text-brand-orange">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A visual record of our commitment to excellence and safety on every job site.
          </motion.p>
        </div>
      </section>

      {/* Before & After Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">The Power of <span className="text-brand-orange">Precision</span></h2>
            <p className="text-xl text-gray-400">Drag the slider to see the Huskey difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000" 
              afterImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000" 
            />
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000" 
              afterImage="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1000" 
            />
          </div>
        </div>
      </Section>

      {/* Filterable Gallery */}
      <Section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all border",
                  filter === cat 
                    ? "bg-brand-orange border-brand-orange text-white" 
                    : "bg-transparent border-white/10 text-gray-400 hover:border-brand-orange hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <Maximize2 className="text-brand-orange mb-4" size={32} />
                    <h3 className="text-xl font-display mb-2">{item.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-brand-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white hover:text-brand-orange transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={60} />
            </button>

            <button 
              className="absolute right-4 md:right-10 text-white hover:text-brand-orange transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={60} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-5xl w-full max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryItems.find(item => item.id === selectedImage)?.img} 
                alt="Selected" 
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-display mb-2">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <span className="text-brand-orange font-bold uppercase tracking-widest">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
