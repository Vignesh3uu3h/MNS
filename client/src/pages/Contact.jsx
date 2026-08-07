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
    <main className="bg-sand px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-10 shadow-xl">
        <div className="mb-10 text-center">
          <p className="section-title">Contact Us</p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Send your inquiry and our team will connect with you to discuss supply and farmer partnerships.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          {['name', 'phone', 'email', 'location', 'businessType'].map((field) => (
            <div key={field} className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">{field === 'businessType' ? 'Business Type' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900"
              />
            </div>
          ))}
          <div className="md:col-span-2 space-y-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="inline-flex rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Send Inquiry
            </button>
            <p className="text-sm text-slate-600">{status}</p>
          </div>
        </form>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-brand-green text-white p-6">
            <p className="font-semibold">Location</p>
            <p className="mt-3 text-sm">Kerala, India</p>
          </div>
          <div className="rounded-3xl bg-brand-green text-white p-6">
            <p className="font-semibold">Phone</p>
            <p className="mt-3 text-sm">+91 98765 43210</p>
          </div>
          <div className="rounded-3xl bg-brand-green text-white p-6">
            <p className="font-semibold">Email</p>
            <p className="mt-3 text-sm">contact@msntraders.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
