import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Admin', href: '/admin' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const initialDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    window.localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg dark:border-slate-800 dark:bg-slate-950/95">
      <div className="site-shell flex items-center gap-4 py-4 xl:gap-6">
        <Link to="/" className="flex shrink-0 items-center">
          <div className="flex h-14 w-[132px] items-center overflow-hidden sm:h-16 sm:w-[152px]">
            <img
              src="/logo.png"
              alt="MNS Coconut Trader logo"
              className="h-full w-full scale-[1.9] object-cover object-center brightness-110 drop-shadow-[0_4px_10px_rgba(255,255,255,0.12)]"
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-5 xl:flex 2xl:gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-green dark:text-slate-200 dark:hover:text-brand-green 2xl:text-base">
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-base text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/contact" className="rounded-full bg-brand-green px-6 py-3 text-base font-medium text-white shadow-lg transition hover:bg-emerald-700">
            Contact
          </Link>
        </nav>

        <button
          className="ml-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-2xl text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`fixed inset-0 z-40 xl:hidden transition duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-[88vw] transform overflow-hidden rounded-l-[2rem] bg-white/95 px-6 py-8 shadow-2xl backdrop-blur-xl transition duration-300 dark:bg-slate-950/95 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="flex h-16 w-[152px] items-center overflow-hidden">
              <img
                src="/logo.png"
                alt="MNS Coconut Trader logo"
                className="h-full w-full scale-[1.9] object-cover object-center"
              />
            </div>
            <button className="text-3xl text-slate-700 dark:text-slate-200" onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX />
            </button>
          </div>

          <nav className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-3xl border border-slate-200 bg-sand px-5 py-4 text-lg font-semibold text-slate-900 transition hover:border-brand-green hover:bg-brand-green/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-brand-green/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />} Toggle theme
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
