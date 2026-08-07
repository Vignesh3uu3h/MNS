import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-4 inline-flex items-center">
              <div className="flex h-24 w-[220px] items-center overflow-hidden rounded-2xl">
                <img
                  src="/logo.png"
                  alt="MNS Coconut Trader logo"
                  className="h-full w-full scale-[1.7] object-cover object-center"
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
            <p className="text-sm text-slate-100/90">Phone: +91 98765 43210</p>
            <p className="text-sm text-slate-100/90">Email: contact@msntraders.com</p>
            <p className="text-sm text-slate-100/90">Business Hours: Mon - Sat, 9 AM - 6 PM</p>
            <div className="mt-4 flex items-center gap-3 text-white">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaWhatsapp />
            </div>
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
