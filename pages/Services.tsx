import React from 'react';
import { LineChart, Terminal, Megaphone, Users, Scale, Rocket, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Services Hero */}
      <motion.section
        {...fade}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16 md:pt-24 md:pb-24 flex flex-col gap-8"
      >
        <div className="border-b border-black pb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Expertise &<br />Precision
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl text-charcoal">
            Tailored solutions for complex business challenges. We define the future of your enterprise through rigorous strategy and impeccable execution.
          </p>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Scroll to explore</span>
            <ArrowDown size={32} className="animate-bounce" />
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        {...fade}
        transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-200">
          {[
            { 
              id: '01', 
              icon: <LineChart size={28} />, 
              title: 'Business Strategy', 
              subtitle: 'Navigate with clarity.', 
              desc: 'We provide actionable roadmaps for market dominance, ensuring your long-term vision aligns with daily operations.',
              points: ['Market Analysis', 'Operational Efficiency', 'Risk Management']
            },
            { 
              id: '02', 
              icon: <Terminal size={28} />, 
              title: 'IT & Software', 
              subtitle: 'Digital backbone.', 
              desc: 'We architect enterprise-grade software solutions that are scalable, secure, and cutting-edge.',
              points: ['System Architecture', 'Cloud Migration', 'Cybersecurity']
            },
            { 
              id: '03', 
              icon: <Megaphone size={28} />, 
              title: 'Digital Branding', 
              subtitle: 'Amplify your voice.', 
              desc: 'Data-driven strategies to elevate your brand presence and connect meaningfully with your target audience.',
              points: ['Brand Positioning', 'SEO & Content', 'Performance Marketing']
            },
            { 
              id: '04', 
              icon: <Users size={28} />, 
              title: 'HR Advisory', 
              subtitle: 'Human capital optimized.', 
              desc: 'Building high-performance cultures through strategic talent acquisition and retention frameworks.',
              points: ['Talent Acquisition', 'Culture Development', 'Leadership Training']
            },
            { 
              id: '05', 
              icon: <Scale size={28} />, 
              title: 'Financial & Legal', 
              subtitle: 'Secure your assets.', 
              desc: 'Comprehensive consultancy on compliance, risk mitigation, and strategic fiscal planning for sustainability.',
              points: ['Risk Compliance', 'Mergers & Acquisitions', 'Fiscal Planning']
            },
            { 
              id: '06', 
              icon: <Rocket size={28} />, 
              title: 'Startup Growth', 
              subtitle: 'Scale rapidly.', 
              desc: 'End-to-end mentorship and strategy to take your venture from seed funding to successful IPO.',
              points: ['Seed Strategy', 'Growth Hacking', 'Investor Relations']
            }
          ].map((service) => (
            <motion.article
              key={service.id}
              whileHover={{ scale: 1.01, y: -8 }}
              transition={{ type: 'spring', stiffness: 210, damping: 18 }}
              className="group relative flex flex-col gap-8 p-10 border-r border-b border-neutral-200 hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer min-h-[450px]"
            >
              <div className="flex justify-between items-start">
                <div className="size-12 bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
                  {service.icon}
                </div>
                <span className="text-xs font-mono text-neutral-400 group-hover:text-white/60">{service.id}</span>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <h3 className="text-2xl font-bold uppercase tracking-tight">{service.title}</h3>
                <p className="text-lg italic font-light text-neutral-500 font-serif group-hover:text-neutral-400">{service.subtitle}</p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-sm font-light leading-relaxed opacity-80">
                  {service.desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <span className="h-px w-3 bg-current"></span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Services CTA */}
      <motion.section
        {...fade}
        transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
        className="w-full bg-black text-white py-24 px-6 md:px-12 flex justify-center"
      >
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Ready to elevate your enterprise?</h2>
          <p className="text-lg font-light text-neutral-400 max-w-xl">
            Schedule a consultation with our senior partners to discuss your specific needs and challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4 w-full justify-center">
            <button className="h-14 px-8 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-colors">
              Book Consultation
            </button>
            <button className="h-14 px-8 border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;