import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-sand text-slate-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
