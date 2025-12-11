import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { LayoutGrid, Menu, X, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-neutral-200 py-3' : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleNav('/')}
          >
            <div className="size-8 bg-black text-white rounded flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
              <LayoutGrid size={20} strokeWidth={2} />
            </div>
            <h2 className="text-xl font-bold tracking-tight uppercase group-hover:text-neutral-600 transition-colors">ConsultyPro</h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-sm font-medium transition-all hover:text-black ${
                  location.pathname === link.path ? 'text-black font-bold' : 'text-neutral-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button className="bg-black text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-neutral-800 transition-all">
              Let's Talk
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-neutral-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 py-8 px-6 flex flex-col gap-6 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className="text-lg font-medium text-left text-neutral-800 hover:text-black"
                >
                  {link.label}
                </button>
              ))}
              <button className="bg-black text-white w-full py-4 rounded text-base font-bold">
                Let's Talk
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white pt-24 pb-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Brand */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="size-6 bg-black text-white flex items-center justify-center rounded-sm">
                  <LayoutGrid size={14} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">ConsultyPro</h3>
              </div>
              <p className="text-neutral-500 font-light leading-relaxed max-w-xs text-sm">
                Premier business consultancy focused on delivering high-impact strategies for global enterprises.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Links 1 */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Company</h4>
              {['About Us', 'Careers', 'Press', 'Partners'].map(item => (
                <a key={item} href="#" className="text-sm text-black hover:underline">{item}</a>
              ))}
            </div>

            {/* Links 2 */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Services</h4>
              {['Strategy', 'Consulting', 'Digital', 'Financial'].map(item => (
                <a key={item} href="#" className="text-sm text-black hover:underline">{item}</a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Subscribe</h4>
              <p className="text-sm text-neutral-500 font-light">Join our newsletter for the latest market insights.</p>
              <form className="flex w-full border-b border-neutral-300 focus-within:border-black transition-colors" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  required 
                  placeholder="Email Address" 
                  className="w-full py-3 bg-transparent border-none outline-none placeholder-neutral-400 text-black text-sm"
                />
                <button type="submit" className="text-black font-bold text-xs uppercase tracking-wide px-2 hover:opacity-70">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 gap-4">
            <p className="text-xs text-neutral-400">© 2024 ConsultyPro Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map(item => (
                <a key={item} href="#" className="text-xs text-neutral-400 hover:text-black transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;