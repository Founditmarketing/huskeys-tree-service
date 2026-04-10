import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';

const PHOTOS = [
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9pvh6DhpokLOB7Q6CXVy-UW18W2yl9seRCNX4n1EN9JSgEJtGh-SIOVOme25gTfi2-T-1WQiVe5mzx2brLM8WR27o94AtGcA71C2Xcl9Lf3XKr-HqBEirKQN9usnGOdf3kI37V_grcHDrcqb',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9psPo675ReW98BpA1szrUoq2TX-D_NIjAk7_dtMPJekoizICVTHJ5EEXJMwx-m6bQN2ZcX3w5LP14UMdWLHUt1nv2OD4RqzKbM_p98CXAOrI3NuRMQuUXZ455lUb-Sg7QRk9XhxMvyy7uU0J',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9ptcu8bxwVCQxGqES3fThAfFmhoEQPpjgWM71G_NHdsybYlJHAVj1f6WBJYtl_jSPJgdSvnMNQ-NdWQrNXO4qeINloKaS-fiSUvEbmjPVoRjaucTDqXf7Fvno4UlR_oNuFglN2Zl0YSe7u_X',
  'https://lh3.googleusercontent.com/geougc-cs/ABOP9psKAhQRRZOmE2onXPlmFB4u6mkpW3Nj4Q1xGpp3mfZRMA5f331KSnR0If_3ABZqpiQfsAm74oogmLdxTHfwTe1YQ2yIsDycC0UzBkkeSO3htDx-qOJRovZhNVGiSrbKpfQrrtYc_eI_eGY',
];

const posts = [
  {
    id: 1,
    title: 'When is the Best Time to Trim Your Trees in Tennessee?',
    excerpt: 'Timing is everything when it comes to tree health. Learn why late winter is often the ideal time for pruning in the Clarksville area.',
    date: 'Oct 15, 2023',
    author: 'Jared Huskey',
    category: 'Tree Care',
    img: PHOTOS[0]
  },
  {
    id: 2,
    title: '5 Signs Your Tree Might Be Hazardous',
    excerpt: 'Don\'t wait for a storm to find out your tree is unstable. Here are the warning signs every homeowner should watch for.',
    date: 'Sep 28, 2023',
    author: 'Jared Huskey',
    category: 'Safety',
    img: PHOTOS[1]
  },
  {
    id: 3,
    title: 'The Benefits of Professional Stump Grinding',
    excerpt: 'Leftover stumps are more than just an eyesore. Discover why professional grinding is essential for your property\'s health.',
    date: 'Sep 10, 2023',
    author: 'Jared Huskey',
    category: 'Services',
    img: PHOTOS[2]
  },
  {
    id: 4,
    title: 'Preparing Your Trees for Winter Storms',
    excerpt: 'Middle Tennessee winters can be unpredictable. Learn how to protect your property from ice and wind damage.',
    date: 'Aug 22, 2023',
    author: 'Jared Huskey',
    category: 'Maintenance',
    img: PHOTOS[3]
  }
];

export default function Blog() {
  return (
    <div className="bg-brand-black">
      <SEO 
        title="Tree Care Blog - Expert Advice from Huskey's" 
        description="Helpful tips and articles about tree removal, trimming, and maintenance in Clarksville and Woodlawn, TN." 
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
            The <span className="text-brand-orange">Canopy</span> Blog
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Expert insights, maintenance tips, and local tree care stories from the Huskey crew.
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-16">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-3xl mb-8 relative aspect-[16/9]">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-orange" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={16} className="text-brand-orange" /> {post.author}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-4 group-hover:text-brand-orange transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest hover:text-white transition-colors">
                    Read Full Article <ArrowRight size={20} />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Search */}
              <div className="bg-brand-gray p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl mb-6 font-display">Search Blog</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-all"
                  />
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-brand-gray p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl mb-6 font-display">Categories</h3>
                <div className="space-y-4">
                  {['Tree Care', 'Safety', 'Maintenance', 'Emergency', 'Stump Grinding'].map((cat) => (
                    <button key={cat} className="flex items-center justify-between w-full text-gray-400 hover:text-brand-orange transition-colors group">
                      <span className="flex items-center gap-3"><Tag size={16} /> {cat}</span>
                      <span className="text-xs bg-brand-black px-2 py-1 rounded border border-white/5 group-hover:border-brand-orange/30 transition-all">12</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-brand-orange p-8 rounded-3xl text-brand-black">
                <h3 className="text-2xl mb-4 font-display">Tree Care Tips</h3>
                <p className="font-medium mb-6 opacity-80">Get seasonal maintenance advice delivered to your inbox.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/20 border border-brand-black/10 rounded-xl px-6 py-4 placeholder:text-brand-black/50 focus:outline-none focus:bg-white transition-all"
                  />
                  <button className="w-full bg-brand-black text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </div>
  );
}
