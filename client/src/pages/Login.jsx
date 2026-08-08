import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserInfo } from '../utils/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Logging in...');

    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      setUserInfo(data);
      setStatus('Login successful');
      navigate('/');
    } catch (error) {
      setStatus(error.response?.data?.message || 'Login failed. Please check your email and password.');
    }
  };

  return (
    <main className="min-h-screen bg-sand px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg rounded-[2rem] bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Login</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">Access your account</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Enter your email and password to sign in.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
            />
          </label>
          <button type="submit" className="w-full rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Login
          </button>
          {status && <p className="text-center text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </main>
  );
}

export default Login;
