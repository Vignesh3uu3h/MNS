import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf } from 'react-icons/fa';

const products = [
  { title: 'Fresh Coconut', desc: 'Handpicked fresh coconuts for local supply and markets.', badge: 'Popular' },
  { title: 'Semi Husk Coconut', desc: 'Partially husked coconuts for processing and resale.', badge: 'Bulk' },
  { title: 'Fully Husked Coconut', desc: 'Ready-to-use coconuts for traders and manufacturers.', badge: 'Premium' },
  { title: 'Tender Coconut', desc: 'Hydrating tender coconuts sourced directly from growers.', badge: 'Fresh' },
  { title: 'Export Quality Coconut', desc: 'Carefully graded coconuts for overseas export.', badge: 'Export' },
  { title: 'Bulk Supply', desc: 'Large-volume deliveries with reliable logistics.', badge: 'Wholesale' }
];

const stats = [
  { value: '500+', label: 'Farmers Connected' },
  { value: '10,000+', label: 'Tons Traded' },
  { value: '100+', label: 'Business Clients' },
  { value: '10+', label: 'Years Experience' }
];

const timeline = ['Farmers', 'Collection', 'Quality Check', 'Sorting', 'Packing', 'Transportation', 'Wholesale Buyers', 'Export'];

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#cce6ff] py-16 sm:py-20 lg:min-h-[calc(100vh-88px)] lg:py-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(198,227,255,0.22)_28%,_rgba(172,211,255,0.12)_70%)]"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(255,255,255,0)_90%)]"></div>

        <div className="site-shell relative">
          <div className="grid gap-10 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:items-center lg:gap-16">
            <div className="max-w-[56rem] lg:pr-6 xl:pr-12">
              <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand-green">
                  MSN Traders
                </p>
                <h1 className="max-w-[14ch] text-4xl font-bold leading-[0.98] text-slate-900 sm:text-5xl lg:text-6xl xl:text-[5.5rem]">
                  Coconut Wholesale Supply across India and Global Markets
                </h1>
                <p className="mt-6 max-w-[48rem] text-base leading-8 text-slate-700 sm:text-lg">
                  Premium coconuts sourced directly from farmers, graded with quality controls, and delivered with reliable logistics for domestic and export buyers.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-700">
                    Contact Us
                  </a>
                  <a href="#products" className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/90 px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100">
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/40 shadow-[0_40px_120px_rgba(34,93,54,0.16)] backdrop-blur-3xl lg:justify-self-end lg:max-w-[46rem]">
              <video
                className="hero-video min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]"
                src="/coconut-vidio2.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/coconut-tree.jpg"
              />
              <div className="hero-video-overlay" />
              <div className="hero-video-glow" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="site-shell py-16 md:py-20 xl:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-title">About MSN Traders</p>
            <p className="mt-6 max-w-2xl text-slate-700 leading-8">
              MSN Traders is a coconut-only specialist focused on sourcing premium coconuts directly from farmers and delivering them with care across India.
            </p>
            <p className="mt-4 max-w-2xl text-slate-700 leading-8">
              We grade, pack, and supply coconuts with farm-first quality standards, ensuring every shipment is fresh, reliable, and coconut-centric.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">Company Image</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">Warehouse Image</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">Farmer Image</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-full overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1519741496659-0cdd1b1e4ad2?auto=format&fit=crop&w=900&q=80" alt="Farmers" className="h-full w-full object-cover" />
            </div>
            <div className="grid gap-4">
              <div className="h-60 overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1583820288368-1370bbeeb8ae?auto=format&fit=crop&w=900&q=80" alt="Warehouse" className="h-full w-full object-cover" />
              </div>
              <div className="h-60 overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1530224264768-7ff8c1789d79?auto=format&fit=crop&w=900&q=80" alt="Coconut Farm" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="site-shell py-16 md:py-20 xl:py-24">
        <div className="mb-10 text-center">
          <p className="section-title">Products</p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">High-quality coconut products for traders, wholesalers, and exporters.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <motion.article key={product.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              whileHover={{ scale: 1.02 }}>
              <div className="h-44 bg-[url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1 text-sm font-semibold text-brand-green">
                  {product.badge}
                </div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-3 text-slate-600">{product.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="why" className="bg-brand-green/5 py-16 md:py-20 xl:py-24">
        <div className="site-shell">
          <div className="mb-10 text-center">
            <p className="section-title">Why Choose MSN Traders</p>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">Choose the coconut-only partner that delivers premium harvests with secure sourcing and farm-first ethics.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {['Direct Purchase from Farmers', 'Fair Pricing', 'Premium Quality', 'Honest Business', 'Fast Delivery', 'Bulk Orders Accepted', 'Experienced Team', 'Trusted by Traders', 'Reliable Supply'].map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white">
                  <FaCheckCircle />
                </div>
                <h3 className="text-lg font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 xl:py-24">
        <div className="site-shell">
          <div className="mb-10 text-center">
            <p className="section-title">Business Process Timeline</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-8">
            {timeline.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-sand p-6 text-center">
                <p className="font-semibold text-brand-green">{step}</p>
                {index < timeline.length - 1 && <p className="mt-2 text-sm text-slate-500">↓</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-16 md:py-20 xl:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-brand-green text-white p-8 shadow-lg">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Home;
