import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-[#1ebe57]"
      >
        <FaWhatsapp /> WhatsApp
      </a>
      <a
        href="tel:+919876543210"
        className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-emerald-700"
      >
        <FaPhoneAlt /> Call Now
      </a>
    </div>
  );
}

export default WhatsAppButton;
