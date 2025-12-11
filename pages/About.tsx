import React from 'react';
import { ArrowRight, Target, ShieldCheck, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Hero Section */}
      <motion.section
        {...fadeIn}
        className="relative min-h-[70vh] flex items-center justify-center"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-20 flex flex-col items-start justify-center gap-12">
          <div className="max-w-[900px]">
            <h1 className="font-sans font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8">
              We Architect <br />
              <span className="text-neutral-400">Success.</span>
            </h1>
            <div className="w-24 h-[2px] bg-black mb-8"></div>
            <p className="text-xl md:text-2xl font-light text-neutral-600 max-w-[600px] leading-relaxed">
              Premium strategic consultancy for the modern enterprise. Defining excellence through precision, vision, and unyielding standards.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded text-base font-bold tracking-wide transition-all min-w-[200px]">
              Explore Our Ethos
            </button>
            <button className="border border-neutral-200 hover:bg-neutral-50 px-8 py-4 rounded text-base font-medium transition-all min-w-[200px]">
              View Case Studies
            </button>
          </div>
        </div>
        
        {/* Abstract Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30%] h-[80%] opacity-5 hidden lg:block pointer-events-none overflow-hidden">
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
           <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </motion.section>

      {/* Stats Strip */}
      <motion.section
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="border-y border-neutral-100 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { val: '10+', label: 'Years of Experience' },
              { val: '$500M', label: 'Value Created' },
              { val: '50+', label: 'Fortune 500 Clients' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-6xl md:text-7xl font-serif font-medium tracking-tight">{stat.val}</span>
                <span className="text-sm font-bold uppercase tracking-wider text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* The Narrative */}
      <motion.section
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] w-full bg-neutral-100 overflow-hidden rounded-sm relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEpj4aatCN4NjGG38ADQyOKa-uewe1dCdaZPvXl3Iv3NUKizywdy7utinZPxyMsvkbsgpsP96R8m8HT1DY3__dtM8kvn-OLVAeca5cd7Oqjqr3kXCrM-QHElysl2Ma8_UoTehaJX3upqqUz8Tu6x3RdFoxwGKMg7b-tBdVNmF_jqDDMYvUvr1pRgrF_gZrvNnWAlXqDoTKp2gXbdXe8dasJZvq2j0FFfxVRexjKkW59o9u3FLX2R0pbKZzg_9_mq3Ae9VJ6goJqGc" 
                  alt="Abstract architectural perspective"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-neutral-100 -z-10 hidden md:block"></div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">The Narrative</h2>
              <h3 className="font-serif text-4xl md:text-5xl leading-tight">
                Bridging the gap between <span className="italic font-light">ambition</span> and <span className="italic font-light">reality</span>.
              </h3>
              <div className="space-y-6 text-neutral-600 font-light text-lg leading-relaxed">
                <p>
                  ConsultyPro was born from a singular vision: to strip away the noise and focus purely on impact. We exist to provide clarity in complex markets.
                </p>
                <p>
                  Our dedication to precision and results has defined our journey for over a decade. We don't just advise; we partner with you to construct the future of your enterprise, brick by strategic brick.
                </p>
              </div>
              <div className="pt-4">
                <a href="#" className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-neutral-600 transition-colors">
                  Read Our Full Story <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="py-24 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 border-b border-neutral-200 pb-6 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="font-sans font-black text-4xl md:text-5xl tracking-tighter">Why Choose Us</h2>
            <p className="text-neutral-500 max-w-sm text-right md:text-left">The pillars that uphold our standard of excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              { icon: <Target size={24} />, title: "Precision", text: "We execute with exacting standards, ensuring every strategy is data-driven and flawless. No guesswork, only calibrated actions." },
              { icon: <ShieldCheck size={24} />, title: "Integrity", text: "Transparency and honesty form the bedrock of our client relationships. We operate as an extension of your own ethical framework." },
              { icon: <Eye size={24} />, title: "Vision", text: "We anticipate market shifts before they happen, positioning you for future dominance through forward-thinking analysis." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 210, damping: 18 }}
                className="bg-white p-10 md:p-12 flex flex-col gap-6 group hover:bg-neutral-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-4 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-neutral-600 font-light leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl italic">The Minds</h2>
            <p className="text-neutral-500 font-light">Leadership that defines the industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "James Sterling", role: "Managing Partner", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0QVZWrqxJy-OmW83dolnOikJk_ei6EheKCbM2hq3Y30IoICEUhdCT-RqUpndTHnAcl17mhQI7FeO7oFjla6r1tWOtp8AHuei2x6yIX0ndgi0_f2zA0fHmB_vdQ4fk5cAG-Lx9OFwEZQjlus_PadAGUddE7noJBIqwKuwMrY9YLnQnK4LWAy0Hp5rdDbVbZVmO13qF5gaaBUy64CIXgYSjuNkUErmQumTyOuPayWhdMI2zakcK2vCnEtSkw50pIN21YWnY0KNbR8" },
              { name: "Elena Vance", role: "Head of Strategy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3onG5bYOSzRS2Nzep7vjtjjA-DczI-uuiQE2ZElSKhtQ8U0iohLZrLwhgd5sMUseyuZXGfVVP_dp0GkWIqjng3z0mJ3XTLOYc5Zd8ZBxGHEkDvmyjcBcbZaav2qrVzZxtodIvjKeSZ8buQlmEKD_7RQZaACoy0vuGiZdkmSVGoEfL5zypjNzTJbItXdT7m0ligEArp8lWLFuoEnxrrV4_0XPpzyg39saJwOld470n6bd-34CEsTru3Ybsyy2Jj7snWmJqk9dWjQ8" },
              { name: "Marcus Chen", role: "Lead Consultant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPjapswibDrR8F4omp-g0dq8J-koM-w_q490oBJy2MvmmmJhpTB_PICEK0byHOkV0DHdH4bQhuitILDpAHLFO4hHxT15gDHAjOWm2BtuGVtboA-KjBVhZZektK6owFxMsEi01dT7GMKjkrSWruzSZbAPUYvPsXIm-xGKPtGBACIJXJvLfaYXVVvLPbTSf7e8aznzpK-ksF2Sfy5ba3lKz7ko7Qb4XLpvpr7AancsddsfavuloHxAF3OzSx2x0aH4981WMGZH0g6B8" },
              { name: "Sarah Thorne", role: "Director of Operations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFLea7BCIBA3mX50G7czUapcej-jtUSxOQsad-WhaWVJLHUeR_MY2jC_I5L2JUCK52i7dO9_ascRyec_Qv0IlQcFItZzcuDfQfvdL6qKt06TJtVwDuKQ2-_NtdQsCDGx6kzu51pGQfStNIS3DAjydlzEIfl2l5fR70Y2t8YAkn9hPbIxKm5DOUKQegrtijSwGnvdWN4YdrCIgtgFVAF0Q_QcGFOhm-AjEBVDK7T1fnOUKTJVyAhzoA-lLgMM3_6J04Eq8D6nOdIhs" }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col gap-4"
              >
                <div className="aspect-[3/4] w-full bg-neutral-100 overflow-hidden relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold uppercase tracking-wide">{member.name}</h3>
                  <p className="text-sm text-neutral-500 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dark Footer CTA */}
      <motion.footer
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        className="bg-black text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-neutral-800 pb-16">
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="font-sans font-black text-5xl md:text-6xl tracking-tighter leading-[0.9]">
                Ready to elevate <br /> your business?
              </h2>
              <p className="text-neutral-400 font-light text-lg">Let's discuss how we can engineer your next breakthrough.</p>
              <div className="pt-4">
                <button className="bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded text-base font-bold transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Contact</span>
                <a href="mailto:hello@consultypro.com" className="text-2xl font-serif italic hover:text-neutral-300 transition-colors">hello@consultypro.com</a>
                <p className="text-neutral-400 font-light">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default About;