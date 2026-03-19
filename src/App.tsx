import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronRight, Brain, Shield, Network, Users, 
  Terminal, Globe, Lock, Cpu, BookOpen, FlaskConical, 
  CheckCircle2, Menu, X, Activity, Database, Workflow
} from 'lucide-react';

// --- TYPES & CONTEXT ---

type Page = 'home' | 'framework' | 'academy' | 'enrollment' | 'lab' | 'lab-apply' | 'community' | 'community-join' | 'os' | 'os-access' | 'assessment';

type SystemState = {
  currentPage: Page;
  navigate: (page: Page) => void;
};

const SystemContext = createContext<SystemState>({} as SystemState);

// --- COMPONENTS ---

const Navigation = () => {
  const { currentPage, navigate } = useContext(SystemContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'framework', label: 'Framework' },
    { id: 'academy', label: 'Academy' },
    { id: 'lab', label: 'Lab' },
    { id: 'community', label: 'Community' },
    { id: 'os', label: 'Matrix360 OS' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#E5E4E2]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => navigate('home')}
        >
          <div className="w-6 h-6 bg-[#141414] flex items-center justify-center">
            <div className="w-2 h-2 bg-[#F9F8F6]" />
          </div>
          <span className="text-[#141414] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Matrix360</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                currentPage === item.id ? 'text-[#141414]' : 'text-gray-400 hover:text-[#141414]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('assessment')}
            className="hidden sm:block bg-matrix-accent text-white px-6 py-2 rounded-none font-bold uppercase tracking-widest text-[11px] hover:opacity-90 transition-all"
          >
            Begin Assessment
          </button>
          <button 
            className="lg:hidden text-[#141414]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#F9F8F6] border-b border-[#E5E4E2] p-6 space-y-4"
          >
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => { navigate(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left text-[11px] font-bold uppercase tracking-widest text-[#141414]"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { navigate('assessment'); setIsMenuOpen(false); }}
              className="block w-full bg-matrix-accent text-white py-3 rounded-none font-bold uppercase tracking-widest text-[11px]"
            >
              Begin Assessment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) => (
  <div className="space-y-4 mb-8 md:mb-12">
    <div className="flex items-center gap-4">
      <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase">{number}</span>
      <div className="h-px flex-1 bg-[#E5E4E2]" />
    </div>
    <h2 className="text-2xl md:text-4xl font-bold text-[#141414]">{title}</h2>
    {subtitle && <p className="text-base md:text-lg text-gray-500 font-light max-w-2xl">{subtitle}</p>}
  </div>
);

const Footer = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <footer className="bg-[#141414] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#141414]" />
            </div>
            <span className="uppercase tracking-[0.4em] text-xs font-bold">Matrix360</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
            The global standard for Hybrid Intelligence.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Ecosystem</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><button onClick={() => navigate('framework')} className="hover:text-white transition-colors">Framework</button></li>
            <li><button onClick={() => navigate('academy')} className="hover:text-white transition-colors">Academy</button></li>
            <li><button onClick={() => navigate('lab')} className="hover:text-white transition-colors">Lab</button></li>
            <li><button onClick={() => navigate('os')} className="hover:text-white transition-colors">Matrix360 OS</button></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Network</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><button onClick={() => navigate('community')} className="hover:text-white transition-colors">Community</button></li>
            <li><button className="hover:text-white transition-colors">Events</button></li>
            <li><button className="hover:text-white transition-colors">Research</button></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Contact</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><button className="hover:text-white transition-colors">Inquiries</button></li>
            <li><button className="hover:text-white transition-colors">Press</button></li>
            <li><button className="hover:text-white transition-colors">Legal</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 Matrix360. All Rights Reserved.</span>
        <div className="flex gap-6">
          <Globe className="w-4 h-4 text-gray-500" />
          <Shield className="w-4 h-4 text-gray-500" />
          <Lock className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </footer>
  );
};

// --- PAGES ---

const HomePage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#141414] leading-[1.1] md:leading-[1.05]">
              AI is advancing. <br className="hidden md:block"/>
              <span className="text-[#C5A059]">Systems are not.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
              Matrix360 provides the structure for the intelligent enterprise. We bridge the gap between machine capability and human strategy through Hybrid Intelligence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 md:gap-6"
          >
            <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
            <button onClick={() => navigate('framework')} className="btn-secondary">Explore Framework</button>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            number="01 / THE CHALLENGE" 
            title="Capability is not the issue. Structure is." 
          />
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Most organizations adopt AI as a tool, not a system. This creates fragmented workflows, zero accountability, and wasted potential.
              </p>
              <ul className="space-y-4">
                {[
                  "Intelligence without governance",
                  "Automation without oversight",
                  "Data without interpretation"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#141414]">
                    <div className="w-1.5 h-1.5 bg-[#C5A059]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F9F8F6] p-8 md:p-12 space-y-6 md:space-y-8 border border-[#E5E4E2]">
              <h3 className="text-xl md:text-2xl font-bold">The Gap.</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                AI initiatives fail when they lack a unified operating system. Matrix360 closes this gap by aligning machine power with human judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            number="02 / THE SOLUTION" 
            title="Hybrid Intelligence." 
            subtitle="The rigorous integration of human judgment and machine computation."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Brain, title: "Human Context", desc: "Humans define the 'why'. We provide the strategic context and moral compass." },
              { icon: Cpu, title: "Machine Scale", desc: "AI handles the 'how'. It processes data and identifies patterns at infinite scale." },
              { icon: Network, title: "Unified OS", desc: "Matrix360 OS binds them together into a high-performance environment." }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 bg-white border border-[#E5E4E2] space-y-4 md:space-y-6 hover:border-[#C5A059] transition-colors group">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C5A059] group-hover:scale-110 transition-transform" />
                <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATRIX360 OS */}
      <section className="bg-[#141414] text-white py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase">03 / THE OPERATING SYSTEM</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Matrix360 OS. <br className="hidden md:block"/>The infrastructure for the intelligent enterprise.</h2>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
              Deploy Hybrid Intelligence across your organization. Matrix360 OS provides the governance and visibility required to scale intelligence safely.
            </p>
            <button onClick={() => navigate('os-access')} className="btn-primary">Request Access</button>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Terminal className="w-16 h-16 md:w-24 md:h-24 text-[#C5A059] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to lead the transition?</h2>
          <p className="text-lg md:text-xl text-gray-500 font-light">
            Join the global network dedicated to the responsible application of intelligence.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
            <button onClick={() => navigate('community-join')} className="btn-secondary">Join the Network</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FrameworkPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The Framework.</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            The architectural blueprint for Hybrid Intelligence. This is the rigorous methodology for scaling machine computation with human judgment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <SectionHeader number="01" title="The Core Pillars" />
            <div className="space-y-6 md:space-y-8">
              {[
                { title: "Governance", desc: "Rules for AI behavior and data usage." },
                { title: "Accountability", desc: "Defining ownership of machine-assisted decisions." },
                { title: "Integration", desc: "Embedding AI into human workflows." },
                { title: "Verification", desc: "Continuous validation of intelligence outputs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="shrink-0 w-10 h-10 bg-[#F9F8F6] border border-[#E5E4E2] flex items-center justify-center text-[#C5A059] font-bold">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#141414] text-white p-8 md:p-12 space-y-8 md:space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold">The Objective.</h3>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
              To build organizations that are fundamentally more intelligent through structured human-machine collaboration.
            </p>
            <div className="pt-8 md:pt-12 border-t border-white/10 space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Implementation Status</p>
              <div className="space-y-4">
                <div className="flex justify-between text-xs uppercase tracking-widest">
                  <span>Phase 1: Assessment</span>
                  <span>10%</span>
                </div>
                <div className="h-1 bg-white/10 w-full">
                  <div className="h-full bg-[#C5A059] w-[10%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8 md:space-y-12 pt-16 md:pt-24 border-t border-[#E5E4E2]">
          <h2 className="text-2xl md:text-4xl font-bold">Start your implementation.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
            <button onClick={() => navigate('os')} className="btn-secondary">Explore Matrix360 OS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AcademyPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The Academy.</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            The elite training ground for Hybrid Intelligence. We certify the architects and leaders who will govern the next era of enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Intelligence Architect", level: "Advanced", desc: "Design the flow of intelligence within the organization." },
            { title: "Governance Lead", level: "Professional", desc: "Oversee operational standards of AI deployment." },
            { title: "Hybrid Strategist", level: "Executive", desc: "Lead business transformation through intelligent systems." }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-10 bg-white border border-[#E5E4E2] space-y-6 md:space-y-8 flex flex-col">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">{item.level}</span>
                <h4 className="text-xl md:text-2xl font-bold">{item.title}</h4>
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
              <button className="text-[11px] font-bold uppercase tracking-widest text-[#141414] flex items-center gap-2 group">
                View Curriculum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#F9F8F6] p-8 md:p-16 border border-[#E5E4E2] flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Applied Mastery.</h2>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              Become a certified practitioner capable of deploying real-world Hybrid Intelligence systems.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Certification", "Strategic Leadership", "Hands-on Labs", "Expert Network"].map((text, i) => (
                <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 md:space-y-6 text-center md:text-left w-full md:w-auto">
            <button onClick={() => navigate('enrollment')} className="btn-primary">Enroll Now</button>
            <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LabPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The Lab.</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            Our R&D engine for applied intelligence. We translate advanced research into the practical tools used by the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <SectionHeader number="01" title="Current Research" />
            <div className="space-y-6 md:space-y-8">
              {[
                { title: "Human-in-the-Loop Optimization", desc: "Reducing latency in human-machine decision cycles." },
                { title: "Algorithmic Accountability", desc: "Building traceable logic for complex AI outputs." },
                { title: "Cognitive Load Management", desc: "Designing interfaces that augment rather than overwhelm human experts." }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-white border border-[#E5E4E2] space-y-4">
                  <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 md:space-y-12">
            <SectionHeader number="02" title="Collaborate" />
            <div className="bg-[#141414] text-white p-8 md:p-12 space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                We seek researchers, engineers, and domain experts. If you are building at the intersection of human and machine intelligence, apply below.
              </p>
              <button onClick={() => navigate('lab-apply')} className="btn-primary">Apply to Join</button>
            </div>
            <div className="p-6 md:p-8 border border-[#E5E4E2] space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest">Lab Stats</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-2xl md:text-3xl font-bold">12+</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Active Projects</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-bold">45+</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Contributors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunityPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The Community.</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            A vetted network of intelligence practitioners. We connect the world's leading experts to accelerate the adoption of Hybrid Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Users, title: "Global Network", desc: "Connect with peers across industries and geographies." },
            { icon: Globe, title: "Regional Chapters", desc: "Join local meetups and discussions in your city." },
            { icon: Network, title: "Knowledge Exchange", desc: "Share insights, case studies, and best practices." }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-10 bg-white border border-[#E5E4E2] space-y-4 md:space-y-6">
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C5A059]" />
              <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center py-12 md:py-24 bg-[#141414] text-white space-y-8 md:space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold">Join the Network.</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto px-4">
            Access exclusive research, summits, and a directory of the world's leading Hybrid Intelligence practitioners.
          </p>
          <button onClick={() => navigate('community-join')} className="btn-primary">Join the Network</button>
        </div>
      </div>
    </div>
  );
};

const OSPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Matrix360 OS.</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            The infrastructure for the intelligent enterprise. Deploy, govern, and scale Hybrid Intelligence with absolute confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <SectionHeader number="01" title="System Capabilities" />
            <div className="space-y-6 md:space-y-8">
              {[
                { icon: Shield, title: "Governance Engine", desc: "Automated compliance and ethical guardrails for every AI interaction." },
                { icon: Database, title: "Intelligence Ledger", desc: "A transparent record of all machine-assisted decisions and data flows." },
                { icon: Workflow, title: "Hybrid Workflows", desc: "Pre-built templates for seamless human-AI collaboration." },
                { icon: Lock, title: "Enterprise Security", desc: "Military-grade encryption and data sovereignty controls." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#F9F8F6] border border-[#E5E4E2] flex items-center justify-center text-[#C5A059]">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 md:space-y-12">
            <div className="bg-[#F9F8F6] p-8 md:p-12 border border-[#E5E4E2] space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold">Request Access.</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Matrix360 OS is currently available to selected enterprise partners. Apply for early access to begin your transformation.
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('os-access'); }}>
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-[#E5E4E2] focus:border-[#141414] outline-none text-sm" />
                <input type="email" placeholder="Work Email" className="w-full p-4 bg-white border border-[#E5E4E2] focus:border-[#141414] outline-none text-sm" />
                <input type="text" placeholder="Organization" className="w-full p-4 bg-white border border-[#E5E4E2] focus:border-[#141414] outline-none text-sm" />
                <div className="flex flex-col gap-4 pt-4">
                  <button type="submit" className="btn-primary">Request Access</button>
                  <button type="button" onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AssessmentPageContent = () => {
  const { navigate } = useContext(SystemContext);
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Step 1: Background",
      desc: "Professional experience and current role.",
      fields: ["Current Role", "Years of Experience", "Industry"]
    },
    {
      title: "Step 2: AI Familiarity",
      desc: "Your current relationship with AI tools.",
      fields: ["Current Tools Used", "Usage Frequency", "Main Challenges"]
    },
    {
      title: "Step 3: Thinking Approach",
      desc: "Decision Scenarios: Balancing data with intuition.",
      fields: ["Decision Style", "Risk Tolerance", "Collaboration Preference"]
    },
    {
      title: "Step 4: Goals",
      desc: "Primary Objective: Your goal within the ecosystem.",
      fields: ["Learn (Academy)", "Build (Lab)", "Scale (Matrix360 OS)"]
    }
  ];

  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">Map your path in the ecosystem.</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            The Assessment is your entry point into Matrix360. We map your capabilities to specific paths within our ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              {steps.map((s, i) => (
                <div key={i} className={`flex gap-4 md:gap-6 transition-opacity ${step === i ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="shrink-0 w-10 h-10 bg-[#141414] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold">{s.title}</h4>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 border border-[#E5E4E2] space-y-6 md:space-y-8">
            {step < steps.length ? (
              <>
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold">{steps[step].title}</h3>
                  <div className="space-y-4">
                    {steps[step].fields.map((f, i) => (
                      <div key={i} className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{f}</label>
                        <input type="text" className="w-full p-4 bg-[#F9F8F6] border border-[#E5E4E2] focus:border-[#141414] outline-none text-sm" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {step > 0 && (
                    <button 
                      onClick={() => setStep(step - 1)}
                      className="btn-secondary"
                    >
                      Back
                    </button>
                  )}
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="btn-primary"
                  >
                    {step === steps.length - 1 ? 'Submit Assessment' : 'Next Step'}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-8 py-8 md:py-12">
                <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Assessment Complete.</h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    Based on your responses, we guide you to the right path. Your profile suggests a focus on the Academy track.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('academy')}
                  className="btn-primary"
                >
                  Explore Academy
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EnrollmentPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <SectionHeader number="ACADEMY" title="Program Enrollment" />
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            Select your path to mastery. Programs are designed for high-performance professionals and enterprise leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Intensive", duration: "3 Weeks", price: "$1,200", desc: "Foundational mastery of Hybrid Intelligence workflows." },
            { title: "Professional", duration: "3 Months", price: "$4,500", desc: "Advanced architectural design and governance standards." },
            { title: "Executive", duration: "9 Months", price: "$12,000", desc: "Strategic leadership and organizational transformation." }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-10 bg-white border border-[#E5E4E2] space-y-6 md:space-y-8 flex flex-col hover:border-[#C5A059] transition-colors">
              <div className="space-y-2">
                <h4 className="text-xl md:text-2xl font-bold">{item.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">{item.duration}</span>
                  <span className="text-base md:text-lg font-bold">{item.price}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
              <div className="space-y-4 pt-6 border-t border-[#E5E4E2]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">What you get:</p>
                <ul className="space-y-2">
                  {["Weekend Sessions", "Live Mentorship", "Project Labs", "Certification"].map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#141414]">
                      <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn-primary">Enroll Now</button>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] text-white p-8 md:p-12 space-y-6 md:space-y-8">
          <h3 className="text-xl md:text-2xl font-bold">Time Commitment.</h3>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
            Our programs are structured for working professionals. Sessions take place on weekends, with asynchronous lab work during the week. Expect 8-10 hours of commitment per week.
          </p>
          <div className="pt-8 border-t border-white/10">
            <button onClick={() => navigate('assessment')} className="btn-accent">Unsure? Begin Assessment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OSAccessPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <SectionHeader number="MATRIX360 OS" title="Enterprise Access" />
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            The unified workspace for the intelligent enterprise. Matrix360 OS is where human judgment meets machine scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold">What you control.</h3>
            <div className="space-y-6 md:space-y-8">
              {[
                { title: "AI Workflows", desc: "Design and deploy complex multi-agent workflows across your teams." },
                { icon: Brain, title: "Agent Governance", desc: "Set strict ethical and operational guardrails for all machine actions." },
                { icon: Database, title: "Intelligence Ledger", desc: "Maintain a transparent record of every machine-assisted decision." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white border border-[#E5E4E2] flex items-center justify-center text-[#C5A059]">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] text-white p-8 md:p-12 space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold">Who it is for.</h3>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              Matrix360 OS is designed for enterprise leadership, operations heads, and intelligence architects who need to scale AI safely and effectively.
            </p>
            <div className="pt-6 md:pt-8 border-t border-white/10 space-y-4 md:space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Request Access</h4>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
                Your request will be reviewed by our onboarding team. We prioritize organizations ready for systemic transformation.
              </p>
              <div className="flex flex-col gap-4">
                <button className="btn-primary">Request Access</button>
                <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LabApplicationPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <SectionHeader number="THE LAB" title="Contributor Application" />
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            Join the frontier. We seek the experts building the systems of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold">Who should apply.</h3>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              We seek individuals with deep expertise in cognitive science, machine learning, systems architecture, or domain-specific decision-making.
            </p>
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Contribution Types</h4>
              {[
                { title: "Research", desc: "Define new methodologies for human-machine collaboration." },
                { title: "Data", desc: "Contribute high-quality datasets for training and validation." },
                { title: "Validation", desc: "Stress-test intelligence outputs in real-world scenarios." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2" />
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm md:text-base">{item.title}</h5>
                    <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 border border-[#E5E4E2] space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold">What you gain.</h3>
            <ul className="space-y-4">
              {[
                "Early access to Matrix360 OS core",
                "Collaboration with global experts",
                "Research publication opportunities",
                "Direct impact on system governance"
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#141414]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <button className="btn-primary">Apply to Join</button>
              <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunityJoinPage = () => {
  const { navigate } = useContext(SystemContext);
  return (
    <div className="pt-20 md:pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 md:space-y-8">
          <SectionHeader number="COMMUNITY" title="Join the Network" />
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            A vetted global network for those defining the future of intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold">What you can do inside.</h3>
            <div className="space-y-6 md:space-y-8">
              {[
                { title: "Knowledge Exchange", desc: "Access a private repository of case studies and research." },
                { title: "Strategic Networking", desc: "Connect with leaders across the Hybrid Intelligence ecosystem." },
                { title: "Ecosystem Events", desc: "Priority access to global summits and local meetups." }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-white border border-[#E5E4E2] space-y-4">
                  <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] text-white p-8 md:p-12 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">Select your role.</h3>
              <div className="space-y-4">
                {[
                  { title: "Learner", desc: "Mastering the framework." },
                  { title: "Contributor", desc: "Active in research." },
                  { title: "Builder", desc: "Deploying at scale." }
                ].map((role, i) => (
                  <button key={i} className="w-full p-4 md:p-6 border border-white/10 text-left hover:border-[#C5A059] transition-colors group">
                    <h5 className="font-bold uppercase tracking-widest text-[#C5A059] group-hover:text-white text-xs md:text-sm">{role.title}</h5>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">{role.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="btn-primary">Join Network</button>
              <button onClick={() => navigate('assessment')} className="btn-accent">Begin Assessment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const contextValue = useMemo(() => ({
    currentPage,
    navigate
  }), [currentPage]);

  return (
    <SystemContext.Provider value={contextValue}>
      <div className="min-h-screen bg-[#F9F8F6] selection:bg-[#C5A059] selection:text-white">
        <Navigation />
        
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentPage === 'home' && <HomePage />}
              {currentPage === 'framework' && <FrameworkPage />}
              {currentPage === 'academy' && <AcademyPage />}
              {currentPage === 'enrollment' && <EnrollmentPage />}
              {currentPage === 'lab' && <LabPage />}
              {currentPage === 'lab-apply' && <LabApplicationPage />}
              {currentPage === 'community' && <CommunityPage />}
              {currentPage === 'community-join' && <CommunityJoinPage />}
              {currentPage === 'os' && <OSPage />}
              {currentPage === 'os-access' && <OSAccessPage />}
              {currentPage === 'assessment' && <AssessmentPageContent />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </SystemContext.Provider>
  );
};

export default App;
