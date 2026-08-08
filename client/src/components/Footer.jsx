import { Link } from 'react-router-dom';
import { getUserInfo } from '../utils/auth';

function Footer() {
  const userInfo = getUserInfo();
  return (
    <footer className="bg-brand-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-4 inline-flex items-center">
              <div className="flex h-28 w-[240px] items-center justify-center overflow-hidden rounded-[1.5rem]">
                <img
                  src="/logo.png"
                  alt="MNS Coconut Trader logo"
                  className="max-h-full w-auto object-contain object-center"
                />
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-slate-100/90">
              Coconut-only sourcing and trading with premium quality, fair farmer rates, and trusted delivery across India.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-100/90">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <p className="text-sm text-slate-100/90">Phone: +91 63743 15663</p>
            <p className="text-sm text-slate-100/90">Email: vigneshvignesh1620@gmail.com</p>
            <p className="text-sm text-slate-100/90">Business Hours: Mon - Sat, 9 AM - 6 PM</p>
            { !userInfo && (
              <div className="mt-4 flex items-center gap-3 text-white">
                <Link to="/login" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                  Login
                </Link>
              </div>
            ) }
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-slate-100/80">
          &copy; 2026 MNS Coconut Trader. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
