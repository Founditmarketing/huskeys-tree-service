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

const services = [
  {
    id: 'removal',
    title: 'Tree Removal',
    icon: <Trees size={48} />,
    desc: 'Sometimes, removal is the only safe option. Whether a tree is dead, diseased, or posing a structural threat to your property, we have the equipment and expertise to take it down safely.',
    features: ['Hazardous Tree Assessment', 'Precision Felling', 'Technical Rigging', 'Complete Cleanup'],
    img: PHOTOS[0]
  },
  {
    id: 'trimming',
    title: 'Tree Trimming & Pruning',
    icon: <Scissors size={48} />,
    desc: 'Proper trimming is essential for tree health and property safety. We remove deadwood, thin out dense canopies, and shape trees to enhance their natural beauty and longevity.',
    features: ['Crown Thinning', 'Deadwood Removal', 'Structural Pruning', 'Aesthetic Shaping'],
    img: PHOTOS[1]
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Service',
    icon: <AlertTriangle size={48} />,
    desc: 'Storms don\'t wait for business hours. When a tree falls on your home, car, or power lines, our crew is ready to respond immediately to mitigate damage and restore safety.',
    features: ['Storm Damage Response', 'Hazardous Limb Removal', 'Insurance Claim Assistance', 'Rapid Mobilization'],
    img: PHOTOS[2]
  },
  {
    id: 'stump',
    title: 'Stump Grinding',
    icon: <CircleDot size={48} />,
    desc: 'Don\'t let old stumps ruin your curb appeal or attract pests. We use high-powered grinders to turn stumps into mulch, allowing you to replant or regrass the area.',
    features: ['Deep Root Grinding', 'Surface Root Removal', 'Mulch Backfilling', 'Site Restoration'],
    img: PHOTOS[3]
  },
  {
    id: 'clearing',
    title: 'Lot Clearing',
    icon: <Trash2 size={48} />,
    desc: 'Preparing for new construction or just want to reclaim your backyard? We clear brush, small trees, and debris to give you a clean slate for your next project.',
    features: ['Underbrush Removal', 'Selective Clearing', 'Debris Hauling', 'Grading Preparation'],
    img: PHOTOS[4]
  },
  {
    id: 'firewood',
    title: 'Seasoned Firewood',
    icon: <Flame size={48} />,
    desc: 'We supply premium hardwood firewood that has been seasoned to ensure a clean, hot burn. Available for delivery or pickup throughout the Clarksville area.',
    features: ['Hardwood Mix', 'Seasoned 6-12 Months', 'Custom Split Sizes', 'Delivery Available'],
    img: PHOTOS[5]
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
          <img src={PHOTOS[6]} alt="Tree work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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

      {/* Firewood Section */}
      <Section className="bg-brand-gray border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-orange/10 rounded-full text-brand-orange mb-8">
            <Flame size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl mb-4">Premium <span className="text-brand-orange">Firewood</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Seasoned, split, and ready to burn. We offer face cords, full cords, and pickup loads of premium hardwood mix — Oak, Hickory, and Ash.
          </p>
          <p className="text-gray-500 mb-10">Available for delivery or pickup at our Woodlawn location.</p>
          <a 
            href="tel:931-241-2515" 
            className="bg-brand-orange text-white px-12 py-5 rounded font-display text-2xl hover:bg-white hover:text-brand-black transition-all shadow-2xl inline-flex items-center gap-3"
          >
            Call for Pricing
          </a>
        </div>
      </Section>

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
