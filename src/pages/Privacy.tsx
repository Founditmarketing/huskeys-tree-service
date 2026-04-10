import SEO from '../components/SEO';
import Section from '../components/Section';

export default function Privacy() {
  return (
    <div className="bg-brand-black">
      <SEO title="Privacy Policy" description="Privacy policy for Huskey's Tree Service." />
      
      <section className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl mb-10">Privacy <span className="text-brand-orange">Policy</span></h1>
          
          <div className="space-y-8 text-gray-400 leading-relaxed">
            <p className="text-xl">Your privacy is important to us. This policy explains how we handle your information at Huskey's Tree Service.</p>
            
            <div className="space-y-4">
              <h2 className="text-2xl text-white font-display">Information We Collect</h2>
              <p>We collect information you provide directly to us through our contact form, including your name, email address, phone number, and physical address. This information is used solely to provide you with tree service estimates and to perform requested services.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl text-white font-display">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Communicate with you about services, offers, and events.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl text-white font-display">Sharing of Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl text-white font-display">Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl text-white font-display">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="text-white font-bold">thehuskeytreeservice@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
