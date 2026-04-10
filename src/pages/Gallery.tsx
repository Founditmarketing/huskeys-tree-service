import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import { cn } from '../lib/utils';

const PHOTOS = [
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvh6DhpokLOB7Q6CXVy-UW18W2yl9seRCNX4n1EN9JSgEJtGh-SIOVOme25gTfi2-T-1WQiVe5mzx2brLM8WR27o94AtGcA71C2Xcl9Lf3XKr-HqBEirKQN9usnGOdf3kI37V_grcHDrcqb',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9psPo675ReW98BpA1szrUoq2TX-D_NIjAk7_dtMPJekoizICVTHJ5EEXJMwx-m6bQN2ZcX3w5LP14UMdWLHUt1nv2OD4RqzKbM_p98CXAOrI3NuRMQuUXZ455lUb-Sg7QRk9XhxMvyy7uU0J',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9ptcu8bxwVCQxGqES3fThAfFmhoEQPpjgWM71G_NHdsybYlJHAVj1f6WBJYtl_jSPJgdSvnMNQ-NdWQrNXO4qeINloKaS-fiSUvEbmjPVoRjaucTDqXf7Fvno4UlR_oNuFglN2Zl0YSe7u_X',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9psKAhQRRZOmE2onXPlmFB4u6mkpW3Nj4Q1xGpp3mfZRMA5f331KSnR0If_3ABZqpiQfsAm74oogmLdxTHfwTe1YQ2yIsDycC0UzBkkeSO3htDx-qOJRovZhNVGiSrbKpfQrrtYc_eI_eGY',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9puLEUa6xvWZXDyHEvAv_IDDcZjBbl84OGBnI8DfqR6e1b79zPR-HZ-CbqvIaCDuSljmHh2UbVHGQdkUNjD_MbBosfddaWNA9S7vw5MKRD-5CdaRNfr0aXhLzYhC376Tl3keT115ESLlDDhr',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9ptsZP7ey6JJ7JkG0-_NUH9xi08X-_dvucL-nqvnm_koFinLyXFZobrzIEzKQ_L1qY4UBe6kq2_8uMrKG4bFGD124zi1Ywemf3R5gj0W6su09AY6pFUksXooKvPcg9gOIU8O8-l9',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvB8hp6jpWpPjnneoSR29d4orUv6QjLycl22C9fatAUiacAwOzegp7LPOxFN-ZfVXysisu8h2E5AxjeNbG3-YegWQvasSEmQ2cz9UG0E1ZiFipfv7FPC0lcMmpmzibNgw_SAm1Dcg',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvxv4lkTMcZ8ckRlsj6hwBM6iSxMl2Ke6skKDB5Cvolw0CtaHcGtSfXqsY5eapS-3v_JVrTuVQySu8d6ChyVb4W3O6eqVq1lE0ygogI4XfrFL4mx-UsUJCI9EPGQb3-_ggK5YUf',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvJLYxs28gUEPv3B1kP2u0aocdbG-hf4jIJJO2qB-D-iykGrQPegj3dvr92PB1aZxRTmkXPoTtZi2OrsWxh_Nmu2x6hPW-5zeuwcIx8Eh8jYZ4acYKNhzopcmgjYVUcCvt1lwKIzA',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % PHOTOS.length);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div className="bg-brand-black">
      <SEO 
        title="Gallery - Our Work in Action" 
        description="See photos of our tree removal, trimming, and lot clearing projects in Clarksville, TN." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={PHOTOS[0]} alt="Tree work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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

      {/* Photo Gallery */}
      <Section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                onClick={() => setSelectedImage(i)}
              >
                <img 
                  src={photo} 
                  alt="Huskey's Tree Service work" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-brand-orange" size={32} />
                </div>
              </motion.div>
            ))}
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
                src={PHOTOS[selectedImage]} 
                alt="Huskey's Tree Service work" 
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
