import React from 'react';
import { ArrowRight, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <motion.section
        {...fadeUp}
        className="relative w-full flex flex-col items-center justify-center pt-12 pb-32 overflow-hidden"
      >
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" 
             style={{
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}
        />
        
        <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col gap-8 text-center md:text-left md:items-start items-center">
          <h1 className="text-black text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
            Elevating Business <br className="hidden sm:block" /> Strategy.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start mt-4">
            <p className="text-charcoal text-lg sm:text-xl font-light leading-relaxed max-w-2xl border-l-2 border-black pl-6 text-left">
              Data-driven consultancy for the modern enterprise. We clarify the complex to reveal the path forward.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="flex items-center justify-center h-14 px-8 bg-black text-white text-base font-bold tracking-wide rounded hover:bg-neutral-800 transition-all hover:scale-105">
              Work With Us
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="flex items-center justify-center h-14 px-8 bg-transparent border border-neutral-300 text-black text-base font-bold tracking-wide rounded hover:border-black hover:bg-neutral-50 transition-all"
            >
              View Services
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full mt-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="relative w-full aspect-[21/9] bg-neutral-100 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD98h796prspXPuylHC_HiK5GFttzDmRba29w8HVKm7ARJLB9NahapAlOSS7yCOg6XVuVPIqWS3kK6ujiXpHTTuEXtoNpUQXc40h91aTfwYl47wNyikhr1efbc6zj5YKIdiUnTALwX-n-FxbWQwZciSSxIY2jemNreojARS8-_1Y3MJveWsR91yacwdKG8lEAbN0RYb5AmwLOzQI7yT3XifhqWpOQKFLvy7aY88EMRJlqMaZwwDofbC3gUcJquPMwin5MUDWmQfxm4" 
              alt="Skyscrapers looking up"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </motion.section>

      {/* Trust Bar */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        className="w-full py-12 border-y border-neutral-100 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-between opacity-60 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 whitespace-nowrap">Trusted By</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 w-full">
            {['ACME Corp', 'GlobalBank', 'Technius', 'VentureFlow', 'Strategix'].map((brand) => (
              <span key={brand} className="text-xl font-bold font-sans text-neutral-800">{brand}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        className="w-full py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-black py-16">
            {[
              { number: '500+', label: 'Active Clients' },
              { number: '1.2k', label: 'Projects Done' },
              { number: '15', label: 'Years Exp.' },
              { number: '40+', label: 'Global Partners' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-black tracking-tighter text-black">{stat.number}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="w-full py-24 bg-soft-gray"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-black text-4xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
            <p className="text-charcoal text-lg font-light">
              We provide bespoke strategic solutions tailored to your unique business challenges. Our approach is rigorous, data-backed, and results-oriented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <TrendingUp size={32} strokeWidth={1.5} />, 
                title: 'Strategy Consulting', 
                desc: 'Navigating market complexities with precision. We build roadmaps that turn ambiguity into actionable advantage.' 
              },
              { 
                icon: <BarChart3 size={32} strokeWidth={1.5} />, 
                title: 'Financial Advisory', 
                desc: 'Optimizing capital allocation for sustainable growth. We ensure your financial structures support your boldest ambitions.' 
              },
              { 
                icon: <Zap size={32} strokeWidth={1.5} />, 
                title: 'Digital Transformation', 
                desc: 'Modernizing infrastructure for the digital age. We integrate technology seamlessly into your core operations.' 
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="group flex flex-col justify-between h-full bg-white p-10 rounded-lg border border-transparent hover:border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <div className="size-16 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 text-black">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                    <p className="text-neutral-500 font-light leading-relaxed">{card.desc}</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-neutral-100">
                  <button onClick={() => navigate('/services')} className="inline-flex items-center text-sm font-bold text-black group-hover:underline">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="w-full py-32 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Unmatched precision in a <br /> chaotic market.
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-md">
              Ready to scale your enterprise? Connect with our experts today and start your journey.
            </p>
          </div>
          <div className="shrink-0">
            <button className="flex items-center justify-center h-16 px-10 bg-white text-black text-lg font-bold rounded hover:bg-neutral-200 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;