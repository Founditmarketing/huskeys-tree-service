import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
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
    title: 'When Is the Best Time to Trim Your Trees in Tennessee?',
    date: 'Oct 15, 2023',
    author: 'Jared Huskey',
    category: 'Tree Care',
    img: PHOTOS[0],
    content: [
      {
        heading: 'Timing Matters More Than You Think',
        text: 'One of the most common questions we get from homeowners in the Clarksville area is: "When should I trim my trees?" It seems like a simple question, but the answer can mean the difference between a thriving tree and one that struggles for years. In Middle Tennessee, our climate creates specific windows where pruning is most effective — and times where it can actually do more harm than good.'
      },
      {
        heading: 'Late Winter: The Gold Standard',
        text: 'For most hardwood species common to our area — including oak, maple, and hickory — late winter (January through early March) is the ideal pruning window. During this period, trees are fully dormant, meaning there\'s minimal sap flow and the tree won\'t "bleed" from the cut. Dormant pruning also reduces the risk of disease transmission, since most fungal spores and insects that spread tree diseases aren\'t active in cold weather. Additionally, without leaves on the tree, our crew can clearly see the branch structure and make more precise cuts.'
      },
      {
        heading: 'What About Summer Pruning?',
        text: 'Summer pruning isn\'t off the table, but it should generally be limited to corrective work. If you have a dead branch hanging over your driveway or a limb rubbing against your roof, you don\'t need to wait until January. Removing deadwood is safe any time of year because the tissue is already dead — there\'s nothing to harm. However, heavy pruning of live branches during the active growing season can stress the tree, especially during Tennessee\'s hot, dry August spells. The tree has to redirect energy to heal the wound at the same time it\'s trying to sustain all its foliage.'
      },
      {
        heading: 'Species-Specific Considerations',
        text: 'Not every tree follows the same rules. Oak trees in particular should only be pruned during the dormant season because of Oak Wilt, a devastating fungal disease that\'s spread by sap-feeding beetles attracted to fresh pruning wounds. If you have flowering trees like dogwoods or redbuds, the best time to prune is right after they finish blooming in early spring. Pruning them in late winter would remove the flower buds you\'ve been waiting all year to see. Evergreens like pines and cedars — very common in Montgomery County — are best pruned in late spring after the new growth (called "candles") has emerged but before it hardens off.'
      },
      {
        heading: 'The Bottom Line',
        text: 'If you\'re unsure about when to prune, the safest bet is to call a professional. At Huskey\'s Tree Service, we assess each tree individually, taking into account its species, health, and your goals for the property. A well-timed trim can improve your tree\'s structure, promote healthy growth, and prevent costly problems down the road. A poorly timed one can invite disease, weaken the tree, and even shorten its lifespan. If you\'re in the Clarksville or Woodlawn area and have trees that need attention, give us a call at 931-241-2515 for a free consultation.'
      }
    ]
  },
  {
    id: 2,
    title: '5 Signs Your Tree Might Be Hazardous',
    date: 'Sep 28, 2023',
    author: 'Jared Huskey',
    category: 'Safety',
    img: PHOTOS[1],
    content: [
      {
        heading: 'Don\'t Wait for a Storm to Find Out',
        text: 'Every year, homeowners across Middle Tennessee deal with property damage caused by falling trees and branches — damage that in many cases could have been prevented. After 30 years in the tree business, I\'ve learned to spot the warning signs that a tree is becoming dangerous long before it fails. Here are five things every homeowner should look for.'
      },
      {
        heading: '1. Dead or Hanging Branches',
        text: 'This is the most obvious sign, but it\'s also the most commonly ignored. Dead branches — sometimes called "widow makers" in the industry — can fall without warning, even on a calm day. Look up into your tree\'s canopy. If you see branches with no leaves during the growing season, peeling bark, or limbs that appear to be dangling but haven\'t fallen yet, those are immediate hazards. A single dead branch over a driveway or play area can cause serious injury or property damage.'
      },
      {
        heading: '2. Mushrooms or Fungal Growth at the Base',
        text: 'If you see mushrooms growing at the base of your tree or on the trunk, that\'s a strong indicator of internal decay. Fungi feed on dead and rotting wood, so their presence usually means the heartwood — the structural core of the tree — is compromised. A tree can look perfectly healthy on the outside while being completely hollow inside. This is why visual inspection alone isn\'t always enough. We use sounding techniques (tapping the trunk to listen for hollowness) and professional assessment to determine how far the decay has progressed.'
      },
      {
        heading: '3. Leaning That\'s Getting Worse',
        text: 'Many trees grow with a natural lean and are perfectly stable. The concern is when a tree that was previously straight starts leaning, or when an existing lean is getting more pronounced over time. This can indicate root failure — the underground anchoring system is giving way. Look at the ground on the side opposite the lean. If you see the soil heaving or lifting, or if exposed roots appear to be breaking, the tree could be in the early stages of uprooting. This is especially common after periods of heavy rain when saturated soil loses its grip on the root plate.'
      },
      {
        heading: '4. Cracks in the Trunk',
        text: 'Vertical cracks or splits in the main trunk are serious structural defects. A crack means the wood fibers have separated, and the tree\'s ability to support its own weight is compromised. Deep cracks that extend into the heartwood are particularly dangerous. Sometimes you\'ll also see what\'s called a "co-dominant stem" — where the trunk splits into two main leaders with a tight V-shaped union. This type of structure is prone to splitting during storms because the two stems are literally pushing each other apart as they grow.'
      },
      {
        heading: '5. Root Damage from Construction',
        text: 'This is the silent killer that many homeowners don\'t think about. If you\'ve had any construction, grading, or driveway work done near a mature tree in the past 3-5 years, the root system may have been seriously damaged. Tree roots extend far beyond the drip line — often 2-3 times the width of the canopy. Cutting through major roots, compacting soil with heavy equipment, or changing the grade around a tree can cause a slow decline that doesn\'t show symptoms for years. By the time the tree starts dropping branches or showing dieback in the crown, the root damage is often irreversible.'
      },
      {
        heading: 'What to Do If You Spot These Signs',
        text: 'If any of these describe a tree on your property, don\'t panic — but don\'t ignore it either. Call a professional for an assessment. At Huskey\'s Tree Service, we provide free hazard evaluations for homeowners in the Clarksville area. Sometimes the solution is strategic pruning to reduce weight. Other times, removal is the safest option. Either way, it\'s always better to address the problem on your terms rather than waiting for Mother Nature to make the decision for you. Call us at 931-241-2515.'
      }
    ]
  },
  {
    id: 3,
    title: 'The Benefits of Professional Stump Grinding',
    date: 'Sep 10, 2023',
    author: 'Jared Huskey',
    category: 'Services',
    img: PHOTOS[2],
    content: [
      {
        heading: 'That Stump Isn\'t Just Ugly — It\'s a Problem',
        text: 'After a tree is removed, the stump is easy to forget about. It\'s low to the ground, the immediate hazard is gone, and life moves on. But that leftover stump is more than just an eyesore in your yard. Over time, it can create real problems for your property that end up costing more than the grinding would have in the first place.'
      },
      {
        heading: 'Pest Magnet',
        text: 'A decaying stump is essentially an open invitation for pests. Termites, carpenter ants, and wood-boring beetles are attracted to rotting wood and will set up colonies in an old stump. The problem is that once they\'re established, they don\'t always stay in the stump. Termites in particular will forage outward through the soil, and if your home\'s foundation is within range, you could be looking at a much bigger infestation. We\'ve seen homeowners in the Clarksville area spend thousands on termite treatment that could have been avoided by grinding a $200 stump.'
      },
      {
        heading: 'Regrowth and Suckers',
        text: 'Many tree species — particularly hardwoods like maples, elms, and Bradford pears (which are everywhere in Tennessee) — will aggressively sprout new shoots from a stump. These "suckers" can produce dozens of small, weak stems that grow rapidly around the old stump. If left unchecked, you end up with a cluster of spindly trees instead of one good one. Grinding the stump below the soil line destroys the growth point and eliminates the problem entirely.'
      },
      {
        heading: 'Mowing and Landscaping Hassles',
        text: 'Anyone who has tried to mow around an old stump knows the frustration. You have to slow down, maneuver around it, and you\'re constantly at risk of hitting it with your mower blade — which can damage the mower and send debris flying. Stumps also make it impossible to landscape the area properly. Whether you want to plant new grass, put in a garden bed, or just have a clean, level yard, the stump has to go first.'
      },
      {
        heading: 'How Professional Grinding Works',
        text: 'Our stump grinding process uses a specialized machine with a high-speed carbide-tipped cutting wheel that chips away the stump and major surface roots. We typically grind 6-12 inches below the soil line, which is deep enough to prevent regrowth and allow you to cover the area with topsoil and grass seed. The wood chips produced during grinding can be used as mulch in your garden beds or hauled away — your choice. The entire process usually takes 30-60 minutes per stump depending on the size, and there\'s no heavy excavation required.'
      },
      {
        heading: 'Why Not DIY?',
        text: 'Stump grinder rentals are available at equipment rental stores, but there are good reasons to leave this to a professional. The machines are heavy (some weigh over 1,000 pounds), produce significant kickback, and throw debris at high velocity. They also require experience to operate efficiently — a first-timer might take all day on a stump that would take us an hour. More importantly, underground utilities, irrigation lines, and septic systems can all be damaged by grinding in the wrong spot. We know how to check for these hazards before we start cutting. If you have an old stump — or ten — give us a call at 931-241-2515 for a free estimate.'
      }
    ]
  },
  {
    id: 4,
    title: 'Preparing Your Trees for Winter Storms',
    date: 'Aug 22, 2023',
    author: 'Jared Huskey',
    category: 'Maintenance',
    img: PHOTOS[3],
    content: [
      {
        heading: 'Winter in Middle Tennessee Is No Joke',
        text: 'If you\'ve lived in the Clarksville area long enough, you know that our winters can throw just about anything at us — ice storms, heavy snow, high winds, and rapid temperature swings that stress trees to their limits. The ice storm of 2009 and the tornados that seem to hit every few years are proof that trees are often the first thing to fail during severe weather. The good news is that with a little preparation in the fall, you can significantly reduce the risk of storm damage to your trees and your property.'
      },
      {
        heading: 'Inspect Before the Cold Hits',
        text: 'Fall is the best time to walk your property and take a good look at your trees. With the leaves starting to thin out, it\'s easier to spot potential problems. Look for dead branches, especially in the upper canopy where they\'re hard to see during summer. Check for cracks in the trunk, mushroom growth at the base, and any branches that cross over and rub against each other (these create wound points that are vulnerable to breakage). If you see anything concerning, now is the time to address it — not during a January ice storm.'
      },
      {
        heading: 'Pruning for Wind Resistance',
        text: 'One of the most effective things you can do to prepare trees for winter is crown thinning. This involves selectively removing interior branches to reduce the density of the canopy. A thinned crown allows wind to pass through the tree rather than pushing against it like a sail. Think of it like the difference between a solid wall and a chain-link fence during a windstorm. We typically recommend removing no more than 15-20% of the live canopy in a single pruning session to avoid stressing the tree.'
      },
      {
        heading: 'Address Weak Branch Unions',
        text: 'V-shaped branch unions (where two branches meet at a tight, narrow angle) are one of the most common failure points during storms. The narrow angle creates a pocket of included bark — bark that gets trapped between the two stems instead of forming a strong connection. These unions can split apart under the weight of ice or snow. If your trees have obvious V-crotches, we can install structural support cables to hold the branches together, or in some cases, it\'s safer to remove one of the competing leaders entirely.'
      },
      {
        heading: 'Mulch and Water',
        text: 'This one surprises a lot of people: trees need water heading into winter. In Tennessee, fall weather can be dry, and trees that enter dormancy in a drought-stressed state are more brittle and more prone to breakage. Give your mature trees a deep soaking in late October or November to make sure the root zone is well-hydrated. A 3-4 inch layer of mulch around the base (pulled back a few inches from the trunk) helps insulate roots and retain moisture through freeze-thaw cycles.'
      },
      {
        heading: 'Know Your Risk Trees',
        text: 'Some tree species are simply more prone to storm damage than others. Bradford pears are notorious for splitting — their branch structure is inherently weak and they should never have been planted as street trees (but they were, all over Clarksville). Silver maples grow fast but have soft, brittle wood. Pines can be top-heavy and are prone to uprooting in saturated soil. If you have any of these "risk species" near your home, driveway, or power lines, they deserve extra attention before winter. If you want a professional assessment of your trees before winter sets in, call Huskey\'s Tree Service at 931-241-2515. A free fall inspection could save you thousands in storm damage repair.'
      }
    ]
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="bg-brand-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-display mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-brand-orange font-bold uppercase tracking-widest hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = posts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="bg-brand-black">
      <SEO 
        title={post.title} 
        description={post.content[0].text.slice(0, 160)} 
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-8">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-orange" /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} className="text-brand-orange" /> {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl md:text-3xl mb-4 text-white">{section.heading}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </motion.article>

          {/* CTA */}
          <div className="mt-20 bg-brand-gray p-10 md:p-16 rounded-3xl border border-white/5 text-center">
            <h3 className="text-3xl md:text-4xl mb-4">Need Help With Your Trees?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Jared offers free on-site consultations and estimates for homeowners in the Clarksville area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-orange text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:931-241-2515"
                className="bg-brand-gray border-2 border-white/20 text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-all"
              >
                Call 931-241-2515
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <Link
                to={`/blog/${prevPost.id}`}
                className="group bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-3">
                  <ArrowLeft size={14} /> Previous Article
                </span>
                <span className="text-xl group-hover:text-brand-orange transition-colors">{prevPost.title}</span>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}`}
                className="group bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all md:text-right md:ml-auto"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-3 md:justify-end">
                  Next Article <ArrowRight size={14} />
                </span>
                <span className="text-xl group-hover:text-brand-orange transition-colors">{nextPost.title}</span>
              </Link>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
