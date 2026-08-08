import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="min-h-screen bg-sand px-4 py-20 text-center">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-12 shadow-lg">
        <p className="text-7xl font-bold text-brand-green">404</p>
        <h1 className="mt-5 text-3xl font-semibold">Page Not Found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-brand-green px-6 py-3 text-white transition hover:bg-emerald-700">
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
