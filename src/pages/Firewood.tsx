import { motion } from 'motion/react';
import { Flame, Truck, Clock, CheckCircle2, Phone, ShoppingCart } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';

const products = [
  {
    title: 'Face Cord',
    price: '$125',
    desc: 'Perfect for occasional weekend fires. A face cord is 4ft high by 8ft long, one log deep (approx 16").',
    features: ['Seasoned Hardwood', 'Easy to Stack', 'Pickup or Delivery'],
    img: 'https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Full Cord',
    price: '$350',
    desc: 'The standard for winter heating. A full cord is 4ft high by 4ft wide by 8ft long (128 cubic feet).',
    features: ['Best Value', 'Bulk Discount', 'Free Local Delivery'],
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Pickup Load',
    price: '$75',
    desc: 'Fill your own truck bed. We\'ll help you load it up at our Woodlawn location.',
    features: ['No Delivery Fee', 'Choose Your Logs', 'Quick & Easy'],
    img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Firewood() {
  return (
    <div className="bg-brand-black">
      <SEO 
        title="Seasoned Firewood for Sale - Clarksville TN" 
        description="High-quality seasoned hardwood firewood. Cut, split, and ready for delivery or pickup in Woodlawn and Clarksville, TN." 
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=2000" alt="Firewood Stack" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl mb-6"
          >
            Premium <span className="text-brand-orange">Firewood</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-medium"
          >
            Seasoned, split, and ready to burn. We provide the highest quality hardwood mix in Middle Tennessee.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <Section className="py-12 md:py-20 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-brand-black">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shadow-xl">
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-display">Seasoned 6+ Months</h3>
            <p className="font-medium opacity-80 text-sm uppercase tracking-wider">Low moisture for a clean, hot burn.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shadow-xl">
              <Truck size={32} />
            </div>
            <h3 className="text-2xl font-display">Local Delivery</h3>
            <p className="font-medium opacity-80 text-sm uppercase tracking-wider">Fast delivery to Clarksville & Woodlawn.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shadow-xl">
              <Flame size={32} />
            </div>
            <h3 className="text-2xl font-display">100% Hardwood</h3>
            <p className="font-medium opacity-80 text-sm uppercase tracking-wider">Oak, Hickory, and Ash mix.</p>
          </div>
        </div>
      </Section>

      {/* Products Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray rounded-3xl overflow-hidden border border-white/5 flex flex-col group hover:border-brand-orange/30 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-display">{product.title}</h3>
                    <span className="text-2xl font-display text-brand-orange">{product.price}</span>
                  </div>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="space-y-3 mb-10 mt-auto">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-300">
                        <CheckCircle2 className="text-brand-orange" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:931-241-2515" 
                    className="w-full bg-brand-orange text-white py-4 rounded-xl font-display text-xl text-center hover:bg-white hover:text-brand-black transition-all flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={20} /> Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Info Section */}
      <Section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">Why Our <span className="text-brand-orange">Wood?</span></h2>
              <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                <p>
                  Not all firewood is created equal. Freshly cut "green" wood contains up to 50% moisture, making it difficult to light and prone to excessive smoke and creosote buildup.
                </p>
                <p>
                  At Huskey's, we only sell seasoned hardwood. Our wood is cut and split months in advance, allowing it to dry naturally to a moisture content below 20%. This means you get more heat, less smoke, and a much safer fire for your chimney.
                </p>
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-6 p-6 bg-brand-black rounded-2xl border border-white/5">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                    <Phone size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Call Jared to Order</p>
                    <a href="tel:931-241-2515" className="text-2xl font-display hover:text-brand-orange transition-colors">931-241-2515</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-brand-orange/20 rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=1000" 
                alt="Firewood Stack" 
                className="relative z-10 rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
