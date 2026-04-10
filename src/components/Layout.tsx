import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, MapPin, Menu, X, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black selection:bg-brand-orange selection:text-white">
      {/* Top Bar */}
      <div className="bg-brand-orange text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:931-241-2515" className="flex items-center gap-2 hover:text-brand-black transition-colors">
              <Phone size={14} /> 931-241-2515
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Woodlawn, TN & 50mi Radius
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/HuskeysTreeService" target="_blank" rel="noreferrer" className="hover:text-brand-black transition-colors">
              <Facebook size={16} />
            </a>
            <Link to="/contact" className="bg-brand-black px-4 py-1 rounded text-xs uppercase tracking-wider hover:bg-white hover:text-brand-black transition-all">
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-brand-black/95 backdrop-blur-md py-3 shadow-xl border-b border-brand-orange/20" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl leading-none text-white group-hover:text-brand-orange transition-colors">
                HUSKEY'S
              </span>
              <span className="font-display text-lg md:text-xl leading-none text-brand-orange group-hover:text-white transition-colors">
                TREE SERVICE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest font-bold transition-all hover:text-brand-orange relative py-2",
                  location.pathname === link.href ? "text-brand-orange" : "text-white"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white hover:text-brand-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-3xl font-display uppercase tracking-wider",
                    location.pathname === link.href ? "text-brand-orange" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="mt-4 bg-brand-orange text-white py-4 text-center font-display text-xl rounded shadow-lg shadow-brand-orange/20"
              >
                Get A Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex flex-col">
                <span className="font-display text-3xl leading-none text-white">HUSKEY'S</span>
                <span className="font-display text-xl leading-none text-brand-orange">TREE SERVICE</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional tree care since 2003. Serving Clarksville, TN and surrounding areas with expert removal, trimming, and emergency services.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/HuskeysTreeService" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center hover:bg-brand-orange transition-all">
                <Facebook size={20} />
              </a>
              <div className="flex items-center gap-1 text-brand-orange">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="ml-2 text-white font-bold">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-orange flex items-center gap-2 transition-colors">
                    <ChevronRight size={14} className="text-brand-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-8 text-white">Our Services</h3>
            <ul className="space-y-4">
              {['Tree Removal', 'Tree Trimming', 'Emergency Service', 'Stump Grinding', 'Lot Clearing', 'Firewood'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-brand-orange flex items-center gap-2 transition-colors">
                    <ChevronRight size={14} className="text-brand-orange" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-8 text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-orange shrink-0" />
                <span className="text-gray-400">1730 Woodlawn Road,<br />Woodlawn, TN 37191</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-orange shrink-0" />
                <a href="tel:931-241-2515" className="text-gray-400 hover:text-white transition-colors">931-241-2515</a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-orange shrink-0" />
                <a href="mailto:thehuskeytreeservice@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">thehuskeytreeservice@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Huskey's Tree Service. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Phone Bar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-brand-orange p-4 flex justify-between items-center shadow-2xl"
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-brand-black">Call Jared Today</span>
              <span className="font-display text-xl leading-none">931-241-2515</span>
            </div>
            <a 
              href="tel:931-241-2515" 
              className="bg-brand-black text-white px-6 py-2 rounded-full font-bold flex items-center gap-2"
            >
              <Phone size={18} /> CALL NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
