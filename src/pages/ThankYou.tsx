import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="pt-32 min-h-[70vh] flex items-center justify-center">
      <SEO title="Thank You" description="Thank you for contacting Huskey's Tree Service." />
      <div className="text-center px-4">
        <CheckCircle size={80} className="text-brand-orange mx-auto mb-6" />
        <h1 className="text-5xl mb-4">Thank You!</h1>
        <p className="text-xl text-gray-400 mb-10">We've received your request and Jared will be in touch shortly.</p>
        <Link to="/" className="bg-brand-orange text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
