import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', businessType: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('/api/contact', form);
      setForm({ name: '', phone: '', email: '', location: '', businessType: '', message: '' });
      setStatus('Inquiry submitted successfully!');
    } catch (error) {
      setStatus('Unable to send inquiry. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-sand px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[1.75rem] bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:p-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-green">Contact Us</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Get in touch for coconut supply and partnership.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Share your requirements and our team will reach out quickly with details on quality, logistics, and pricing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          {[
            { name: 'name', label: 'Name', type: 'text' },
            { name: 'phone', label: 'Phone', type: 'tel' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'location', label: 'Location', type: 'text' },
            { name: 'businessType', label: 'Business Type', type: 'text' }
          ].map((field) => (
            <div key={field.name} className="space-y-2">
              <label htmlFor={field.name} className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
              />
            </div>
          ))}

          <div className="sm:col-span-2 space-y-2">
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Send Inquiry
            </button>
            <p className="text-sm text-slate-600 min-h-[1.5rem]">{status}</p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
