import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf } from 'react-icons/fa';

const products = [
  { title: 'Semi Husk Coconut', desc: 'Partially husked coconuts for processing and resale.', badge: 'Bulk', image: '/semi-husked.jpeg' },
  { title: 'Fully Husked Coconut', desc: 'Ready-to-use coconuts for traders and manufacturers.', badge: 'Premium', image: '/fully-husked.avif' },
  { title: 'Bulk Supply', desc: 'Large-volume deliveries with reliable logistics.', badge: 'Wholesale', image: '/large.jpg' }
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
      <section className="relative overflow-hidden bg-[#cce6ff] py-10 sm:py-14 lg:min-h-[calc(100vh-80px)] lg:py-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(198,227,255,0.22)_28%,_rgba(172,211,255,0.12)_70%)]"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(255,255,255,0)_90%)]"></div>

        <div className="site-shell relative">
          <div className="grid gap-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-center lg:gap-10 xl:gap-14">
            <div className="max-w-[44rem] lg:pr-4 xl:pr-8">
              <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand-green">
                  MSN Traders
                </p>
                <h1 className="max-w-[18ch] text-[clamp(2.25rem,5vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-slate-900 sm:max-w-[16ch]">
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

            <div className="relative w-full max-w-[32rem] overflow-hidden rounded-3xl border border-white/70 bg-white/40 shadow-[0_40px_120px_rgba(34,93,54,0.16)] backdrop-blur-3xl lg:justify-self-end lg:rounded-[2.5rem] xl:max-w-[36rem]">
              <video
                className="hero-video min-h-0"
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

      

      <section id="products" className="site-shell py-16 md:py-20 xl:py-24">
        <div className="mb-10 text-center">
          <p className="section-title">Products</p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">High-quality coconut products for traders, wholesalers, and exporters.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <motion.article key={product.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              whileHover={{ scale: 1.02 }}>
              <div className={`h-44 bg-cover bg-center ${product.image ? '' : "bg-[url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80')]"}`} style={product.image ? { backgroundImage: `url(${product.image})` } : undefined} />
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
            {['Direct Purchase from Farmers', 'Fair Pricing', 'Premium Quality', 'Fast Delivery', 'Bulk Orders Accepted', 'Experienced Team'].map((feature) => (
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

      <section id="about" className="site-shell py-16 md:py-20 xl:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-title">About MSN Traders</p>
            <p className="mt-6 max-w-2xl text-slate-700 leading-8">
              MSN Traders is India's coconut procurement specialist, sourcing premium coconuts directly from trusted growers. We apply strict quality grading, ethical pricing for farmers, and reliable logistics to ensure freshness and traceability across every shipment.
            </p>
            <p className="mt-4 max-w-2xl text-slate-700 leading-8">
              Our farm-first approach combines fair trade with scalable supply chains — helping farmers receive timely payments while delivering consistent quality to buyers and exporters.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">Trusted Farmers</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">Quality Grading</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">Reliable Delivery</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-full overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <img src="/Fresh-Raw-Coconut.jpg" alt="Fresh raw coconut" className="h-full w-full object-cover" />
            </div>
            <div className="h-full overflow-hidden rounded-[2rem] bg-white shadow-lg">
              <img src="/warhouse.jpg" alt="Warehouse" className="h-full w-full object-cover" />
            </div>
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
