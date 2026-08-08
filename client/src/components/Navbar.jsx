import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { isAdminUser } from '../utils/auth';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'About Us', href: '#about' }
];

function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAdmin(isAdminUser());
    const savedTheme = window.localStorage.getItem('theme');
    const initialDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  useEffect(() => {
    setIsAdmin(isAdminUser());
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    window.localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <div className="site-shell flex items-center gap-4 py-3 xl:gap-6">
        <Link to="/" className="flex shrink-0 items-center">
          <div className="flex h-8 w-[100px] items-center sm:h-10 sm:w-[120px] md:h-12 md:w-[140px] xl:h-14 xl:w-[160px]">
            <img
              src="/logo.png"
              alt="MNS Coconut Trader logo"
              className="h-full w-full object-contain object-left brightness-110 drop-shadow-[0_4px_10px_rgba(255,255,255,0.12)]"
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-5 xl:flex 2xl:gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-green dark:text-slate-200 dark:hover:text-brand-green 2xl:text-base">
              {item.label}
            </a>
          ))}
          {isAdmin && (
            <Link to="/admin" className="text-sm font-medium text-slate-700 transition hover:text-brand-green dark:text-slate-200 dark:hover:text-brand-green 2xl:text-base">
              Admin
            </Link>
          )}
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
          className="relative z-[60] ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-2xl text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      </header>

      <div className={`fixed inset-0 z-[70] xl:hidden transition duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-[88vw] transform overflow-y-auto rounded-l-[2rem] bg-white/95 px-6 py-8 shadow-2xl backdrop-blur-xl transition duration-300 dark:bg-slate-950/95 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="flex h-16 w-[170px] items-center">
              <img
                src="/logo.png"
                alt="MNS Coconut Trader logo"
                className="h-full w-full object-contain object-left"
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
            {isAdmin && (
              <Link
                to="/admin"
                className="block rounded-3xl border border-slate-200 bg-sand px-5 py-4 text-lg font-semibold text-slate-900 transition hover:border-brand-green hover:bg-brand-green/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-brand-green/10"
                onClick={() => setOpen(false)}
              >
                Admin
              </Link>
            )}
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
    </>
  );
}

export default Navbar;
