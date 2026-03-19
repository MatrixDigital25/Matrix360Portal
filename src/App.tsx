import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, Shield, Brain, Network, Users, 
  Terminal, Globe, Lock, Activity, Database, Cpu, BookOpen, 
  Download, Layers, Unlock, BrainCircuit, Workflow, 
  GraduationCap, FlaskConical, Bookmark, ClipboardCheck, Plus,
  Search, AlertCircle, CheckCircle2, Info, Menu, X, Zap
} from 'lucide-react';

type SystemState = {
  currentPage: string;
  stage: 'NEW' | 'IN_PROGRESS' | 'ENGAGED';
  visitedPages: string[];
  intent: string | null;
  navigate: (page: string, intent?: string) => void;
  updateStage: (stage: 'NEW' | 'IN_PROGRESS' | 'ENGAGED') => void;
};

export const SystemContext = createContext<SystemState>({} as SystemState);

const SystemNavigationBar = () => {
  const { currentPage, navigate, visitedPages } = useContext(SystemContext);
  const modules = [
    { id: 'framework', label: 'Framework' },
    { id: 'academy', label: 'Academy' },
    { id: 'platform', label: 'Platform' },
    { id: 'lab', label: 'Lab' },
    { id: 'community', label: 'Community' },
    { id: 'knowledge', label: 'Knowledge' }
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('home')}>
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-none transition-transform group-hover:rotate-90 duration-500">
            <div className="w-3 h-3 bg-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-black uppercase tracking-[0.3em] text-sm font-bold leading-none">Matrix360</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.1em] font-medium mt-1">Hybrid Intelligence System</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-2">
          {modules.map(mod => {
            const isActive = currentPage === mod.id;
            const isVisited = visitedPages.includes(mod.id);
            return (
              <button 
                key={mod.id}
                onClick={() => navigate(mod.id)}
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {mod.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600"
                  />
                )}
                {isVisited && !isActive && (
                  <div className="absolute top-1 right-1 w-1 h-1 bg-gray-200" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-100">
            <div className="w-2 h-2 bg-green-500 animate-pulse" />
            <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">System Online</span>
          </div>
          <button 
            onClick={() => navigate('assessment')}
            className="px-6 py-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
          >
            Access Portal
          </button>
        </div>
      </div>
    </nav>
  );
};

const SystemModule = ({ 
  id,
  context, 
  problem, 
  response, 
  howItWorks, 
  userRole, 
  outcome, 
  nextPathway 
}: {
  id: string;
  context: { title: string; content: React.ReactNode };
  problem: { title: string; content: React.ReactNode };
  response: { title: string; content: React.ReactNode };
  howItWorks: { title: string; content: React.ReactNode };
  userRole: { title: string; content: React.ReactNode };
  outcome: { title: string; content: React.ReactNode };
  nextPathway: { title: string; content: React.ReactNode; action?: () => void };
}) => {
  return (
    <div id={id} className="space-y-40 py-20">
      {/* 1. CONTEXT */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-blue-600 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">01 // Context</span>
          <div className="h-px w-12 bg-gray-100" />
        </div>
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-black mb-12 leading-[1.1]">{context.title}</h2>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 text-xl text-gray-600 leading-relaxed font-light">
            {context.content}
          </div>
        </div>
      </motion.section>

      {/* 2. PROBLEM */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-gray-100" />
          <span className="text-red-600 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">02 // Problem</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        <div className="bg-gray-50 border-l-4 border-red-500 p-12 lg:p-16">
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-8">{problem.title}</h3>
          <div className="text-lg text-gray-600 leading-relaxed">
            {problem.content}
          </div>
        </div>
      </motion.section>

      {/* 3. SYSTEM RESPONSE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-blue-600 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">03 // System Response</span>
          <div className="h-px w-12 bg-gray-100" />
        </div>
        <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-12">{response.title}</h3>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 text-lg text-gray-600 leading-relaxed">
            {response.content}
          </div>
        </div>
      </motion.section>

      {/* 4. HOW IT WORKS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-gray-100" />
          <span className="text-black text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">04 // Structural Explanation</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-8">{howItWorks.title}</h3>
            <div className="text-lg text-gray-600 leading-relaxed">
              {howItWorks.content}
            </div>
          </div>
          <div className="aspect-square bg-gray-50 border border-gray-200 p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <BrainCircuit className="w-32 h-32 text-blue-600 relative z-10" />
          </div>
        </div>
      </motion.section>

      {/* 5. USER ROLE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-blue-600 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">05 // User Role</span>
          <div className="h-px w-12 bg-gray-100" />
        </div>
        <div className="border border-black p-12 lg:p-16">
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-8">{userRole.title}</h3>
          <div className="text-lg text-gray-600 leading-relaxed">
            {userRole.content}
          </div>
        </div>
      </motion.section>

      {/* 6. OUTCOME */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-gray-100" />
          <span className="text-green-600 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">06 // Outcome</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-12">{outcome.title}</h3>
        <div className="grid lg:grid-cols-3 gap-8">
          {outcome.content}
        </div>
      </motion.section>

      {/* 7. NEXT PATHWAY */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-mt-32 pt-20 border-t border-gray-200"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-black text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">07 // Next Pathway</span>
          <div className="h-px w-12 bg-gray-100" />
        </div>
        <div className="max-w-3xl">
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-8">{nextPathway.title}</h3>
          <div className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
            {nextPathway.content}
          </div>
          {nextPathway.action && (
            <button 
              onClick={nextPathway.action}
              className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white hover:bg-gray-800 transition-all font-bold uppercase tracking-widest text-xs group"
            >
              Initialize Next Module <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          )}
        </div>
      </motion.section>
    </div>
  );
};

const AdaptiveRightPanel = ({ title, context }: { title: string, context: string }) => {
  const { stage, navigate, updateStage, intent } = useContext(SystemContext);

  return (
    <div className="sticky top-32 bg-white border border-gray-200 p-10 shadow-xl rounded-none">
      <div className="mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-indigo-600" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Your Navigator</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-sm text-gray-500 font-medium">{context}</p>
        {intent && (
          <div className="mt-6 flex items-center gap-3 px-3 py-2 bg-indigo-50 border border-indigo-100">
            <Activity className="w-3 h-3 text-indigo-600" />
            <span className="text-[10px] text-indigo-600 uppercase tracking-widest font-bold">Current Focus: {intent}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        {stage === 'NEW' && (
          <>
            <button onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }} className="w-full flex items-center justify-between p-4 bg-black text-white hover:bg-gray-800 transition-all group font-bold uppercase tracking-widest text-[10px]">
              <span>Begin Assessment</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('framework')} className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-black transition-all group font-bold uppercase tracking-widest text-[10px]">
              <span className="text-gray-600 group-hover:text-black">Explore Framework</span>
              <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
            </button>
          </>
        )}

        {stage === 'IN_PROGRESS' && (
          <>
            <button onClick={() => navigate('assessment')} className="w-full flex items-center justify-between p-4 bg-black text-white hover:bg-gray-800 transition-all group font-bold uppercase tracking-widest text-[10px]">
              <span>Continue Journey</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-black transition-all group font-bold uppercase tracking-widest text-[10px]">
              <span className="text-gray-600 group-hover:text-black">Resume Section</span>
              <Activity className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
            </button>
          </>
        )}

        {stage === 'ENGAGED' && (
          <>
            <button className="w-full flex items-center justify-between p-4 bg-black text-white hover:bg-gray-800 transition-all group font-bold uppercase tracking-widest text-[10px]">
              <span>Enter System</span>
              <Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-black transition-all group font-bold uppercase tracking-widest text-[10px]">
              <span className="text-gray-600 group-hover:text-black">Access Dashboard</span>
              <Database className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
            </button>
          </>
        )}
        
        <div className="pt-8 mt-8 border-t border-gray-100 space-y-2">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-4">System Pathways</p>
          {[
            { id: 'academy', label: 'Academy', intent: 'Learner' },
            { id: 'lab', label: 'Lab', intent: 'Contributor' },
            { id: 'platform', label: 'Platform', intent: 'Enterprise' }
          ].map(path => (
            <button 
              key={path.id}
              onClick={() => navigate(path.id, path.intent)} 
              className="w-full flex items-center justify-between p-3 bg-transparent hover:bg-gray-50 transition-all group"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black">{path.label}</span>
              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AssessmentPage = () => {
  const { updateStage, navigate } = useContext(SystemContext);
  
  useEffect(() => {
    updateStage('IN_PROGRESS');
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-32 font-sans selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 relative">
          <div className="lg:col-span-8 space-y-24">
            
            {/* HERO / POSITIONING */}
            <section id="assessment-hero" className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-6xl font-light tracking-tight leading-[1.1] text-black max-w-4xl">
                  Find Your Path Forward.
                </h1>
                <div className="h-1 w-24 bg-indigo-600" />
              </div>
              <div className="max-w-2xl space-y-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  The Matrix360 ecosystem is built for professionals at every level. This quick assessment helps us understand your goals and match you with the right resources, whether you're looking to learn, build, or deploy.
                </p>
                <div className="flex items-center gap-4 p-6 bg-indigo-50 border-l-4 border-indigo-600">
                  <p className="text-indigo-900 font-medium">
                    "We don't just measure what you know—we help you find where you can make the biggest impact."
                  </p>
                </div>
              </div>
            </section>

            {/* ASSESSMENT TRACKS */}
            <section id="assessment-tracks" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">Choose Your Focus</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    id: 'academy', 
                    intent: 'Learner', 
                    label: "Master the Skills", 
                    desc: "Learn how to design and manage AI workflows that actually work.",
                    target: "Join the Academy"
                  },
                  { 
                    id: 'lab', 
                    intent: 'Contributor', 
                    label: "Build the Future", 
                    desc: "Work on advanced research and help us shape the next generation of AI.",
                    target: "Apply to the Lab"
                  },
                  { 
                    id: 'platform', 
                    intent: 'Enterprise', 
                    label: "Scale Your Business", 
                    desc: "Deploy Hybrid Intelligence across your organization with full control.",
                    target: "Explore the Platform"
                  }
                ].map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => { updateStage('ENGAGED'); navigate(item.id, item.intent); }}
                    className="bg-white text-left p-10 border border-gray-100 hover:border-indigo-600 hover:shadow-xl transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <span className="text-6xl font-bold">{i + 1}</span>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <div className="flex justify-between items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.label}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="pt-6 border-t border-gray-50">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">{item.target}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* ASSESSMENT PROCESS */}
            <section id="assessment-process" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">What to Expect</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">A Clear Path to Success.</h2>
                  <p className="text-gray-600 leading-relaxed">
                    This isn't a test you can fail. It's a way for us to understand your current experience and where you want to go. We'll look at three key areas:
                  </p>
                  <button 
                    onClick={() => { updateStage('ENGAGED'); navigate('academy'); }}
                    className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                  >
                    Start Assessment
                  </button>
                </div>
                <div className="space-y-8">
                  {[
                    { title: "Core Concepts", desc: "We'll check your understanding of how humans and AI can best work together." },
                    { title: "Practical Skills", desc: "We'll look at how you handle real-world scenarios and design challenges." },
                    { title: "Your Goals", desc: "We'll help you align your personal or business objectives with the right track." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                        {i + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <AdaptiveRightPanel title="Your Journey" context="Getting Started" />
              
              <div className="p-8 border border-gray-100 space-y-6 bg-white shadow-sm rounded-xl">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">Current Progress</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase">
                      <span>Assessment Status</span>
                      <span className="text-indigo-600">Ready to Start</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-[5%]" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-50">
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    "The first step is always the most important. Let's find your place in the future of work."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-32 font-sans selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 relative">
          <div className="lg:col-span-8 space-y-32">
            
            {/* SECTION 1 — HERO (IMPACT FIRST) */}
            <section id="hero" className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-7xl font-bold tracking-tight leading-[1.05] text-black max-w-4xl">
                  Artificial Intelligence Is Advancing. <br/>
                  <span className="text-indigo-600 font-medium italic text-5xl md:text-6xl">But Intelligence Itself Is Not Structured.</span>
                </h1>
                <div className="h-1.5 w-32 bg-indigo-600" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  Organizations are adopting AI at speed. But the systems required to guide how that intelligence is interpreted, governed, and applied are missing.
                </p>
                <div className="space-y-8">
                  <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-indigo-100 pl-8">
                    We introduce <span className="text-black font-bold">Hybrid Intelligence</span> as the solution—a structured framework for the modern enterprise.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('framework'); }}
                      className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
                    >
                      Explore the Framework <span>→</span>
                    </button>
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('community'); }}
                      className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-all"
                    >
                      Join the Movement
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2 — THE PROBLEM (CLARITY) */}
            <section id="problem" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">01 / The Challenge</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-10">
                <h2 className="text-4xl font-bold leading-tight max-w-2xl">The Problem Is Not AI. It Is How It Is Used.</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Intelligence is being applied without a system. This lack of structure leads to outcomes that are unpredictable and difficult to verify.
                    </p>
                  </div>
                  <div className="space-y-8">
                    {[
                      { title: "AI produces analysis", desc: "Raw outputs are generated but often lack the necessary context for business action." },
                      { title: "Decisions still lack structure", desc: "Without a defined process, AI integration remains experimental rather than operational." },
                      { title: "Accountability is unclear", desc: "It is difficult to trace how a specific conclusion was reached or who owns the result." },
                      { title: "Human judgment is being bypassed", desc: "Automation is replacing expertise instead of augmenting it, leading to systemic risk." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 — THE SHIFT */}
            <section id="shift" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">02 / The Shift</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-12 rounded-2xl relative overflow-hidden">
                <div className="max-w-2xl space-y-8 relative z-10">
                  <h2 className="text-4xl font-bold">From Tools to Intelligence Systems.</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Artificial Intelligence expands capability. <span className="text-indigo-600 font-bold">Hybrid Intelligence</span> introduces structure. It defines how intelligence flows, how decisions are made, and how accountability is maintained.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-indigo-200">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Flow</span>
                      <p className="text-sm font-bold text-gray-900">Structured Intelligence</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Decisions</span>
                      <p className="text-sm font-bold text-gray-900">Governed Logic</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Accountability</span>
                      <p className="text-sm font-bold text-gray-900">Clear Ownership</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4 — WHAT IS HYBRID INTELLIGENCE */}
            <section id="definition" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">03 / Definition</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="text-4xl font-bold">What Hybrid Intelligence Actually Means.</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    Hybrid Intelligence is the structured collaboration between human judgment and machine computation. It ensures that while AI generates analysis, humans define meaning and systems ensure accountability.
                  </p>
                </div>
                <div className="lg:col-span-5 bg-gray-900 text-white p-10 space-y-8 rounded-2xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">The Collaboration Model</h4>
                  <ul className="space-y-6 text-sm">
                    <li className="flex gap-4 items-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold">01</div>
                      <span>AI generates analysis</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold">02</div>
                      <span>Humans define meaning</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold">03</div>
                      <span>Systems ensure accountability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 5 — HOW THE SYSTEM WORKS */}
            <section id="system-flow" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">04 / The Process</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-10">
                <h2 className="text-4xl font-bold">How Intelligence Becomes Action.</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  {["Data", "Analysis", "Interpretation", "Decision", "Execution"].map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm">
                          {i + 1}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-900">{step}</span>
                      </div>
                      {i < 4 && <div className="hidden md:block h-px flex-1 bg-indigo-100" />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="max-w-2xl">
                  <p className="text-gray-600 leading-relaxed">
                    Hybrid Intelligence ensures this flow is <span className="text-black font-bold">structured</span>, <span className="text-black font-bold">governed</span>, and <span className="text-black font-bold">repeatable</span>. Every step is visible and every outcome is verified.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 — THE ECOSYSTEM */}
            <section id="ecosystem" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">05 / The Ecosystem</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-10">
                <h2 className="text-4xl font-bold">A Complete Intelligence Ecosystem.</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Academy", desc: "Learn how to work with AI effectively through structured training.", id: "academy" },
                    { title: "Lab", desc: "Contribute to real-world research defining the future of intelligence.", id: "lab" },
                    { title: "Platform", desc: "Apply Hybrid Intelligence in practice with a secure operating system.", id: "platform" },
                    { title: "Community", desc: "Engage with others building the future of intelligent systems.", id: "community" }
                  ].map((item, i) => (
                    <button 
                      key={i} 
                      onClick={() => navigate(item.id)}
                      className="bg-white text-left p-10 border border-gray-100 hover:border-indigo-600 hover:shadow-xl transition-all group rounded-xl"
                    >
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        <div className="pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore Now <span>→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 7 — HOW YOU PARTICIPATE */}
            <section id="participation" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">06 / Participation</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-10">
                <h2 className="text-4xl font-bold">There Is a Role for You in This Shift.</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { label: "Learn", desc: "Develop the expertise to architect and manage Hybrid Intelligence workflows." },
                    { label: "Build", desc: "Collaborate on the design of next-generation human-AI interaction models." },
                    { label: "Apply", desc: "Deploy Hybrid Intelligence within your enterprise to achieve operational excellence." },
                    { label: "Contribute", desc: "Participate in high-level research to define the future of intelligence." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4 p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-bold uppercase tracking-widest text-xs text-indigo-600">{item.label}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 8 — OUTCOME */}
            <section id="outcome" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">07 / The Outcome</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-10">
                <h2 className="text-4xl font-bold">What Changes for You.</h2>
                <div className="max-w-2xl space-y-8">
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    You do not just use AI. You understand how it works, control how it is applied, and build systems around it.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      "Understand how it works",
                      "Control how it is applied",
                      "Build systems around it"
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-indigo-50 border border-indigo-100 rounded-lg text-xs font-bold text-indigo-600 uppercase tracking-widest text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8.5 — FOUNDER VOICE */}
            <section id="founder-voice" className="py-24 space-y-16 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">08 / Why This Work Exists</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="max-w-3xl mx-auto space-y-16">
                <div className="space-y-8">
                  <p className="text-3xl text-gray-900 leading-tight font-light">
                    Artificial intelligence is reshaping how the world operates.
                  </p>
                  <p className="text-2xl text-gray-600 leading-relaxed font-light">
                    But what concerned us was not the technology itself.
                  </p>
                  <p className="text-2xl text-gray-900 leading-relaxed font-medium">
                    It was how it was being used.
                  </p>
                </div>

                <div className="space-y-8 pl-8 border-l-2 border-indigo-100">
                  <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Across industries, we saw:</p>
                  <ul className="space-y-6">
                    {[
                      "increasing dependence on AI outputs",
                      "decisions being made without structure",
                      "growing gaps in accountability"
                    ].map((item, i) => (
                      <li key={i} className="text-xl text-gray-600 font-light flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-2xl text-gray-600 font-light">The problem was not capability.</p>
                  <p className="text-4xl text-gray-900 font-bold tracking-tight">It was the absence of a system.</p>
                </div>

                <div className="py-12 border-y border-gray-100 space-y-6">
                  <p className="text-2xl text-gray-900 font-light leading-relaxed">
                    Hybrid Intelligence was developed to address this.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl text-gray-500 font-light">Not as a tool.</p>
                    <p className="text-xl text-gray-500 font-light">Not as a feature.</p>
                  </div>
                  <p className="text-2xl text-indigo-600 font-medium">
                    But as a structured way of working with intelligence itself.
                  </p>
                </div>

                <div className="space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl border border-indigo-100">RR</div>
                    <div>
                      <p className="text-gray-600 font-light">This work is led by</p>
                      <h4 className="font-bold text-gray-900 text-xl">Ramjit Ray</h4>
                      <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest">Chief Architect of Matrix360</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Along with his teams, the focus has been to:
                    </p>
                    <ul className="space-y-6">
                      {[
                        "define how human judgment and AI must work together",
                        "create systems that preserve control and accountability",
                        "build environments where intelligence can be applied responsibly"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-6 items-start text-gray-700">
                          <span className="text-indigo-600 font-bold text-xl">—</span>
                          <span className="text-lg font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-12 space-y-8">
                  <div className="space-y-4">
                    <p className="text-xl text-gray-500 font-light">This is not a finished idea.</p>
                    <p className="text-xl text-gray-900 font-medium">It is an evolving system.</p>
                  </div>
                  <div className="p-10 bg-gray-900 text-white rounded-2xl space-y-4 shadow-2xl">
                    <p className="text-sm text-indigo-400 font-bold uppercase tracking-[0.3em]">The Belief</p>
                    <p className="text-3xl font-light leading-tight">
                      Human intelligence must remain central.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9 — FINAL STATEMENT */}
            <section id="final" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">09 / Conclusion</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-indigo-600 text-white p-16 space-y-12 rounded-3xl relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="max-w-3xl space-y-10 relative z-10">
                  <h2 className="text-5xl font-bold leading-tight">This Is Not Another AI Platform.</h2>
                  <p className="text-xl opacity-90 leading-relaxed font-light">
                    This is a structured approach to working with intelligence itself. It is the foundation for a truly intelligent organization.
                  </p>
                  <div className="flex flex-wrap gap-6 pt-4">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }}
                      className="group flex items-center gap-6 text-2xl font-bold hover:gap-8 transition-all"
                    >
                      Begin Your Journey
                      <span className="text-3xl transition-transform duration-500">→</span>
                    </button>
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('platform'); }}
                      className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                    >
                      Request Access
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL: SYSTEM MONITOR */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <AdaptiveRightPanel title="Network Status" context="Active Environment" />
              
              <div className="p-8 border border-gray-100 space-y-8 bg-white shadow-sm rounded-xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">Live Updates</h4>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse delay-75" />
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse delay-150" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: "Governance", status: "Active", val: "v3.6.0" },
                    { label: "AI Efficiency", status: "Optimized", val: "99.8%" },
                    { label: "Audit Logs", status: "Verified", val: "Secure" },
                    { label: "Network", status: "Stable", val: "Connected" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-indigo-600">{stat.status}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600" style={{ width: i === 0 ? '100%' : i === 1 ? '99%' : i === 2 ? '85%' : '100%' }} />
                      </div>
                      <div className="text-[9px] font-mono text-gray-300 text-right">{stat.val}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-50">
                  <p className="text-[11px] text-gray-400 italic leading-relaxed">
                    "AI is the engine, but Hybrid Intelligence is the steering wheel. We help you drive with confidence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const AcademyPage = () => {
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-40 font-sans selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-8 space-y-40">
            
            {/* HERO / CORE IDEA */}
            <section id="academy-hero" className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                  Capability Development System
                </div>
                <h1 className="text-7xl font-bold tracking-tight leading-[1.05] text-gray-900 max-w-4xl">
                  Master Hybrid Intelligence.
                </h1>
                <div className="h-1.5 w-32 bg-indigo-600 rounded-full" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  The Academy is a structured capability development system designed to bridge the gap between human expertise and AI power. This is not a course—it's a path to mastery.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-indigo-100 pl-8 italic">
                  "Using AI is easy. Governing it is a skill. We don't just teach you how to use tools; we show you how to build the future of work."
                </p>
              </div>
            </section>

            {/* 1. WHY THIS MATTERS */}
            <section id="why-matters" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">01 / Why These Skills Matter</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold leading-tight">Closing the Capability Gap.</h2>
                  <p className="text-gray-600 leading-relaxed">
                    AI is changing everything, but it still needs human direction. The professionals who succeed will be those who know how to architect, manage, and verify AI workflows. The skill gap is the biggest risk to your business—we provide the structure to close it.
                  </p>
                </div>
                <div className="bg-gray-50 p-10 border border-gray-100 space-y-6 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">The Opportunity</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    There is a massive gap between people who use AI and people who understand how to build systems with it. We help you bridge that gap.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. WHAT YOU LEARN */}
            <section id="curriculum" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">02 / What You Will Learn</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Cognition + AI", desc: "Learn how humans and AI can communicate perfectly to solve complex problems." },
                  { title: "System Thinking", desc: "Design end-to-end workflows that are reliable, scalable, and easy to manage." },
                  { title: "Governance", desc: "Build rules and checks into your AI systems to ensure they always do what you intend." }
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-gray-100 space-y-6 rounded-2xl hover:border-indigo-600 transition-all group">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold">{i + 1}</div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. PROGRAM STRUCTURE */}
            <section id="structure" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">03 / Choose Your Level</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-6">
                {[
                  { 
                    duration: "3-Week", 
                    title: "The Foundation", 
                    hours: "20 Hours", 
                    sessions: "6 Live Sessions", 
                    outcome: "Certified Practitioner",
                    desc: "A fast-paced introduction to the core principles of Hybrid Intelligence and basic system design."
                  },
                  { 
                    duration: "3-Month", 
                    title: "The Architect", 
                    hours: "120 Hours", 
                    sessions: "24 Live Sessions", 
                    outcome: "Certified Systems Architect",
                    desc: "A deep dive into complex system design, governance, and managing multiple AI agents."
                  },
                  { 
                    duration: "9-Month", 
                    title: "The Master", 
                    hours: "400+ Hours", 
                    sessions: "Weekly Boards", 
                    outcome: "Master of Intelligence",
                    desc: "Advanced research and leadership training for those building enterprise-level intelligence systems."
                  }
                ].map((tier, i) => (
                  <div key={i} className="group border border-gray-100 hover:border-indigo-600 hover:shadow-xl transition-all p-10 grid md:grid-cols-12 gap-10 items-center rounded-2xl bg-white">
                    <div className="md:col-span-3 space-y-2">
                      <span className="text-4xl font-bold text-gray-900">{tier.duration}</span>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">{tier.title}</div>
                    </div>
                    <div className="md:col-span-6 space-y-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{tier.desc}</p>
                      <div className="flex gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <span>{tier.hours}</span>
                        <span>{tier.sessions}</span>
                      </div>
                    </div>
                    <div className="md:col-span-3 text-right">
                      <div className="text-[10px] uppercase tracking-tighter text-gray-400 mb-2 font-bold">Your Goal</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">{tier.outcome}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-indigo-600">Your Progress Dashboard</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We track your skills in real-time. As you master new capabilities, your dashboard updates, giving you access to more advanced tools and research opportunities.
                </p>
              </div>
            </section>

            {/* 4. HOW IT WORKS */}
            <section id="how-it-works" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">04 / How You Will Learn</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Weekend Learning", desc: "Deep-dive sessions every Saturday focused on the big ideas and strategy." },
                  { label: "Live Sessions", desc: "Interactive reviews where we build and test systems together in real-time." },
                  { label: "Real Projects", desc: "You won't just study—you'll build actual AI workflows that solve real problems." },
                  { label: "Skills Assessment", desc: "Regular checks to ensure you're actually mastering the skills you need." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 space-y-4 border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                    <h4 className="font-bold uppercase tracking-widest text-xs text-indigo-600">{item.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. OUTCOME */}
            <section id="academy-outcome" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">05 / What You Get</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-gray-900 text-white p-16 space-y-12 rounded-3xl shadow-2xl shadow-indigo-100">
                <h2 className="text-5xl font-bold leading-tight">The Architect's Edge.</h2>
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { title: "Your Own System", desc: "A custom-built environment for your own work and research." },
                    { title: "Expert Skills", desc: "The ability to design and lead AI projects for any organization." },
                    { title: "Elite Network", desc: "Recognition as a qualified leader in the new world of intelligence." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="font-bold uppercase tracking-widest text-xs text-indigo-400">{item.title}</h4>
                      <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. ENTRY PROCESS */}
            <section id="entry" className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">06 / How to Join</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="max-w-2xl space-y-12">
                <h2 className="text-4xl font-bold">Assessment Required.</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  The Academy is for those who are serious about leading. To ensure everyone is ready for the challenge, we require a successful completion of our Cognitive Assessment before you can enroll.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }}
                    className="group flex items-center gap-6 text-2xl font-bold hover:gap-8 transition-all text-indigo-600"
                  >
                    Start Your Assessment
                    <span className="text-3xl transition-transform duration-500">→</span>
                  </button>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <AdaptiveRightPanel title="Academy Portal" context="Professional Growth" />
              
              <div className="p-8 border border-gray-100 space-y-8 bg-white shadow-sm rounded-xl">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Enrollment Status</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                      <span className="text-gray-400">Admissions</span>
                      <span className="text-indigo-600">Open</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-1/3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                      <span className="text-gray-400">Capacity</span>
                      <span className="text-gray-900">14 / 50</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-[28%]" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Next Cohort Starts</div>
                  <div className="text-lg font-bold text-gray-900">April 15, 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const LabPage = () => {
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-40 font-sans selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-8 space-y-40">
            
            {/* HERO / POSITIONING */}
            <section id="lab-hero" className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                  Advanced Research Environment
                </div>
                <h1 className="text-7xl font-bold tracking-tight leading-[1.05] text-gray-900 max-w-4xl">
                  Architecting the Future.
                </h1>
                <div className="h-1.5 w-32 bg-indigo-600 rounded-full" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  The Lab is a high-level research environment where we design and verify the next generation of Hybrid Intelligence systems. This is a space for serious research and collaboration.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-indigo-100 pl-8 italic">
                  "We don't just study intelligence; we architect the systems that make it useful for the real world."
                </p>
              </div>
            </section>

            {/* 1. RESEARCH TRACKS */}
            <section id="research-tracks" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">01 / Research Tracks</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { track: "Alpha", title: "Task Routing", desc: "Building systems that automatically decide when a task needs human judgment or machine speed." },
                  { track: "Beta", title: "Verification", desc: "Designing clear ways for humans to audit and verify AI work with total certainty." },
                  { track: "Gamma", title: "System Memory", desc: "Creating ways for AI to learn and retain your business's unique knowledge over time." }
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-gray-100 space-y-6 group hover:border-indigo-600 transition-all rounded-2xl bg-white">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Track {item.track}</span>
                      <Activity className="w-4 h-4 text-gray-200 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. CONTRIBUTION MODEL */}
            <section id="contribution-model" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">02 / How to Contribute</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-16 space-y-12 rounded-3xl">
                <h2 className="text-4xl font-bold">A System for Active Participation.</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Participation in the Lab is for those who can add real value to our research. This is a peer-reviewed environment where every contribution helps us build better systems for everyone.
                    </p>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: "Data Sharing", desc: "Providing real-world data to help us test and refine our systems." },
                      { label: "Scenario Design", desc: "Helping us build complex challenges for AI to solve." },
                      { label: "System Review", desc: "Verifying the integrity and safety of new AI architectures." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 bg-indigo-600 mt-2 shrink-0 rounded-full" />
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold uppercase tracking-widest text-gray-900">{item.label}</h5>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. ANNOTATION & HUMAN-IN-LOOP */}
            <section id="human-in-loop" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">03 / Human-AI Collaboration</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="text-4xl font-bold">The Human Touch in a Machine World.</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    We are building systems that allow humans to guide AI in real-time. This isn't just about giving orders—it's about sharing your wisdom and intent so the AI can work more effectively for you.
                  </p>
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-8 border border-gray-100 space-y-4 rounded-2xl bg-white">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Active Guidance</h4>
                    <p className="text-xs text-gray-500">Helping AI make better decisions in real-time.</p>
                  </div>
                  <div className="p-8 border border-gray-100 space-y-4 rounded-2xl bg-white">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Value Alignment</h4>
                    <p className="text-xs text-gray-500">Ensuring AI goals match your business values.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. USER ROLES */}
            <section id="user-roles" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">04 / Your Role in the Lab</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { role: "Researcher", desc: "Focus on designing the core rules and models that power the system." },
                  { role: "Contributor", desc: "Provide the data and feedback we need to test and improve our work." },
                  { role: "Domain Specialist", desc: "Ensure our systems work perfectly for your specific industry." }
                ].map((item, i) => (
                  <div key={i} className="space-y-6">
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-indigo-600" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-xs text-gray-900">{item.role}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. OUTCOME */}
            <section id="lab-outcome" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">05 / The Goal</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-gray-900 text-white p-20 space-y-16 relative overflow-hidden rounded-3xl shadow-2xl shadow-indigo-100">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Activity className="w-64 h-64 text-indigo-400" />
                </div>
                <div className="max-w-3xl space-y-12 relative z-10">
                  <h2 className="text-6xl font-bold leading-tight">Building the Future Together.</h2>
                  <p className="text-xl opacity-80 leading-relaxed font-light">
                    By participating in the Lab, you are directly helping us build the systems that will define the future of work. You aren't just watching the future happen—you're making it.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }}
                      className="group flex items-center gap-6 text-2xl font-bold hover:gap-8 transition-all text-indigo-400"
                    >
                      Apply for Access
                      <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <AdaptiveRightPanel title="Lab Access" context="Advanced Research" />
              
              <div className="p-8 border border-gray-100 space-y-8 bg-white shadow-sm rounded-xl">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Research Status</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                      <span className="text-gray-400">Active Tracks</span>
                      <span className="text-indigo-600 font-bold">03</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                      <span className="text-gray-400">Contributor Load</span>
                      <span className="text-indigo-600 font-bold">High</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-[85%]" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Current Focus</div>
                  <div className="text-sm font-bold text-gray-900">Task Routing v4.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const PlatformPage = () => {
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-40 font-sans selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-8 space-y-40">
            
            {/* HERO / POSITIONING */}
            <section id="platform-hero" className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                  Business Operating System
                </div>
                <h1 className="text-7xl font-bold tracking-tight leading-[1.05] text-gray-900 max-w-4xl">
                  One Platform. Total Control.
                </h1>
                <div className="h-1.5 w-32 bg-indigo-600 rounded-full" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  Stop managing fragmented AI tools. Start operating your business through a unified, secure, and scalable platform designed for the modern enterprise.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-indigo-100 pl-8 italic">
                  "The Platform is where your business logic meets AI power. It's the foundation for a truly intelligent organization."
                </p>
              </div>
            </section>

            {/* 1. THE PROBLEM */}
            <section id="platform-problem" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">01 / The Challenge</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold leading-tight">The Risk of Fragmented AI.</h2>
                  <p className="text-gray-600 leading-relaxed">
                    When AI tools are scattered across your business, you lose visibility and control. You need a single environment where every AI interaction is tracked, verified, and aligned with your goals.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    "Disconnected tools that slow your team down.",
                    "Lack of clear oversight on AI decisions.",
                    "Valuable business knowledge lost in siloed apps."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 bg-gray-50 rounded-2xl">
                      <div className="w-1.5 h-1.5 bg-indigo-600 mt-2 shrink-0 rounded-full" />
                      <p className="text-sm text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. HOW IT WORKS */}
            <section id="layered-architecture" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">02 / How It Works</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="space-y-8">
                {[
                  { layer: "Step I", title: "Workflow Design", desc: "Create and manage specialized AI assistants that handle specific tasks within your existing business processes." },
                  { layer: "Step II", title: "Knowledge Integration", desc: "Connect your business data directly to your AI systems, ensuring they always have the right context." },
                  { layer: "Step III", title: "Security & Control", desc: "Every decision is verified and logged, giving you a complete record of how your business is running." }
                ].map((item, i) => (
                  <div key={i} className="p-12 border border-gray-100 flex flex-col md:flex-row gap-12 items-start group hover:border-indigo-600 transition-all rounded-3xl bg-white">
                    <div className="w-20 h-20 shrink-0 bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest group-hover:bg-indigo-600 group-hover:text-white transition-all rounded-2xl">
                      {item.layer}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. FOR YOUR BUSINESS */}
            <section id="enterprise-pathway" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">03 / For Your Business</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-16 space-y-12 rounded-3xl">
                <h2 className="text-4xl font-bold">Built for Scale and Security.</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Deploy the system within your own secure environment. You set the rules, you define the goals, and you keep total ownership of your data and your intelligence.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: "Total Security", desc: "A secure space for every task." },
                      { title: "Full Control", desc: "You set the rules for every decision." },
                      { title: "Complete Audit", desc: "Every interaction is logged." },
                      { title: "Seamless Scale", desc: "Grow your system with ease." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 border border-indigo-100 bg-white space-y-2 rounded-2xl">
                        <div className="text-[10px] font-bold uppercase text-indigo-600 tracking-widest">{item.title}</div>
                        <p className="text-[10px] text-gray-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. THE RESULT */}
            <section id="platform-outcome" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">04 / The Result</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-gray-900 text-white p-20 space-y-16 relative overflow-hidden rounded-3xl shadow-2xl shadow-indigo-100">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Zap className="w-64 h-64 text-indigo-400" />
                </div>
                <div className="max-w-3xl space-y-12 relative z-10">
                  <h2 className="text-6xl font-bold leading-tight">A Business That Thinks.</h2>
                  <p className="text-xl opacity-80 leading-relaxed font-light">
                    The Platform transforms AI from a collection of tools into a unified system that works for you. The result is a more efficient, more reliable, and more intelligent business that stays true to your vision.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }}
                      className="group flex items-center gap-6 text-2xl font-bold hover:gap-8 transition-all text-indigo-400"
                    >
                      Request Access
                      <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              <AdaptiveRightPanel title="Platform Status" context="Business Operations" />
              
              <div className="p-8 border border-gray-100 space-y-8 bg-white shadow-sm rounded-xl">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">System Health</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-indigo-600 font-bold">Optimal</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-[72%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-indigo-600 font-bold">99.9%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-full" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Active System</div>
                  <div className="text-sm font-bold text-gray-900">Enterprise Ready</div>
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
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-40 font-sans selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-8 space-y-40">
            
            {/* HERO / POSITIONING */}
            <section id="community-hero" className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                  The Network of Intelligence
                </div>
                <h1 className="text-7xl font-bold tracking-tight leading-[1.05] text-gray-900 max-w-4xl">
                  Collaborate. Contribute. Lead.
                </h1>
                <div className="h-1.5 w-32 bg-indigo-600 rounded-full" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  Hybrid Intelligence is not built in isolation. It evolves through collaboration, contribution, and interaction within a structured network of professionals.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-indigo-100 pl-8 italic">
                  "This is a living system where leaders collaborate to define the future of human-AI integration."
                </p>
              </div>
            </section>

            {/* 1. THE PROBLEM: PASSIVE VS ACTIVE */}
            <section id="community-problem" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">01 / The Challenge</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold leading-tight">The Passive Trap.</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Traditional networks focus on consumption. We focus on contribution. In the age of AI, passive networks are insufficient for the speed of systemic change.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    "Passive consumption without active contribution.",
                    "Disconnected insights lacking systemic integration.",
                    "Lack of governed environments for high-density collaboration."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-indigo-600 mt-2 shrink-0 rounded-full" />
                      <p className="text-sm text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. PARTICIPATION PATHWAYS */}
            <section id="participation-pathways" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">02 / Participation Pathways</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { pathway: "Learn", title: "Capability Development", desc: "Engage with the framework to build your own intelligence systems and workflows." },
                  { pathway: "Contribute", title: "System Support", desc: "Participate in research and provide feedback to refine core intelligence protocols." },
                  { pathway: "Build", title: "Architecture Design", desc: "Create new agents and systems within the Matrix360 ecosystem for institutional use." }
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-gray-100 space-y-6 group hover:border-black transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-gray-400">{item.pathway}</span>
                      <Users className="w-4 h-4 text-gray-200 group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. THE ACTIVE NODE */}
            <section id="active-node" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">03 / The Active Node</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-gray-50 border border-gray-100 p-16 space-y-12">
                <h2 className="text-4xl font-light">Systemic Contribution.</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      You do not join passively. You enter as an active node in the system, choosing your pathway based on your objectives and capability level. Every interaction contributes to the collective intelligence.
                    </p>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: "Node Identification", desc: "Defining your role and capability within the network." },
                      { label: "Interaction Protocol", desc: "Structured collaboration with qualified peers." },
                      { label: "Value Synthesis", desc: "Integrating diverse insights into the core framework." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1 h-1 bg-black mt-2 shrink-0" />
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold uppercase tracking-widest">{item.label}</h5>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. OUTCOME */}
            <section id="community-outcome" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">04 / Systemic Outcome</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-black text-white p-20 space-y-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Users className="w-64 h-64" />
                </div>
                <div className="max-w-3xl space-y-12 relative z-10">
                  <h2 className="text-6xl font-light leading-tight">Collective Intelligence.</h2>
                  <p className="text-xl opacity-70 leading-relaxed font-light">
                    The Matrix360 Community is a governed environment where every interaction elevates the entire system. You are part of a network that is continuously advancing the doctrine of Hybrid Intelligence.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }}
                      className="group flex items-center gap-6 text-2xl font-light hover:italic transition-all"
                    >
                      Join the Network
                      <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40 space-y-12">
              <AdaptiveRightPanel title="Community Interface" context="Active System Network" />
              
              <div className="p-10 border border-gray-100 space-y-8 bg-white shadow-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Network Status</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                      <span className="text-gray-400">Active Nodes</span>
                      <span className="text-black font-bold">1,240</span>
                    </div>
                    <div className="h-1 w-full bg-gray-50">
                      <div className="h-full bg-black opacity-20 w-[65%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                      <span className="text-gray-400">Interaction Density</span>
                      <span className="text-black font-bold">High</span>
                    </div>
                    <div className="h-1 w-full bg-gray-50">
                      <div className="h-full bg-black opacity-20 w-[88%]" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[9px] uppercase tracking-widest text-gray-400">Latest Synthesis</div>
                  <div className="text-sm font-mono uppercase">Cognitive Routing v4.1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const FrameworkPage = () => {
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-40 font-sans selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-8 space-y-40">
            
            {/* HERO / POSITIONING */}
            <section id="framework-hero" className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-[0.3em]">
                  Framework Doctrine v1.0.5
                </div>
                <h1 className="text-7xl font-light tracking-tight leading-[1.05] text-black max-w-4xl">
                  The Architecture of Intelligence.
                </h1>
                <div className="h-px w-32 bg-black" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  Artificial intelligence has advanced rapidly, but deployment has outpaced governance. Without a governing framework, organizations risk deploying fragmented intelligence that degrades institutional integrity.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-8 italic">
                  "We are transitioning from an era of isolated computational tools to an era of integrated cognitive architectures."
                </p>
              </div>
            </section>

            {/* 1. THE PROBLEM: UNSTRUCTURED INTELLIGENCE */}
            <section id="framework-problem" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">01 / The Structural Deficit</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-light">Chaotic Deployment.</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Intelligence without structure is chaotic. Current systems lack the coherence required for high-stakes institutional decision-making, leading to an erosion of accountability and strategic alignment.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    "Systems lack systemic coherence and strategic alignment.",
                    "Deployment outpaces the development of governance protocols.",
                    "Erosion of human accountability in automated loops."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-red-500 mt-2 shrink-0" />
                      <p className="text-sm text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. THE RESPONSE: ARCHITECTURE OF COLLABORATION */}
            <section id="framework-response" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">02 / The Hybrid Response</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-gray-50 border border-gray-100 p-16 space-y-12">
                <h2 className="text-4xl font-light">Governed Integration.</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      True Hybrid Intelligence requires structural integration, not mere adjacency. The Matrix360 framework establishes deterministic boundaries where human cognition and machine computation are bound by governed protocols.
                    </p>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: "Deterministic Boundaries", desc: "Defining exactly where machine logic ends and human judgment begins." },
                      { label: "Governed Protocols", desc: "Standardizing the interaction layer for maximum reliability." },
                      { label: "Structural Integrity", desc: "Ensuring every system output is aligned with institutional intent." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1 h-1 bg-black mt-2 shrink-0" />
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold uppercase tracking-widest">{item.label}</h5>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. EXECUTION PROTOCOLS */}
            <section id="execution-protocols" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">03 / Execution Protocols</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { layer: "Layer I", title: "Governance", desc: "Deterministic routing of cognitive tasks based on risk and complexity." },
                  { layer: "Layer II", title: "Auditability", desc: "Cryptographic logging of all human-machine interactions for total transparency." },
                  { layer: "Layer III", title: "Synthesis", desc: "Continuous feedback loops between machine output and human judgment." }
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-gray-100 space-y-6 group hover:border-black transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-gray-400">{item.layer}</span>
                      <Shield className="w-4 h-4 text-gray-200 group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. THE SYSTEM ARCHITECT */}
            <section id="system-architect" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">04 / The Architect Role</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="text-4xl font-light">The Guardian of Integrity.</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    As a System Architect, you design the cognitive workflows and governance layers that define how intelligence operates within your environment. You are the guardian of institutional integrity.
                  </p>
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-8 border border-gray-100 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Workflow Design</h4>
                    <p className="text-xs text-gray-500">Architecting the flow of intelligence across the organization.</p>
                  </div>
                  <div className="p-8 border border-gray-100 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Protocol Enforcement</h4>
                    <p className="text-xs text-gray-500">Ensuring all agents adhere to established governance rules.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. OUTCOME */}
            <section id="framework-outcome" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">05 / Systemic Outcome</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-black text-white p-20 space-y-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Shield className="w-64 h-64" />
                </div>
                <div className="max-w-3xl space-y-12 relative z-10">
                  <h2 className="text-6xl font-light leading-tight">Systemic Coherence.</h2>
                  <p className="text-xl opacity-70 leading-relaxed font-light">
                    The Matrix360 framework provides the structural foundation for high-stakes intelligence deployment. The result is an organization that is not just faster, but more aligned, more accountable, and more intelligent.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('assessment'); }}
                      className="group flex items-center gap-6 text-2xl font-light hover:italic transition-all"
                    >
                      Download Framework Doctrine
                      <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40 space-y-12">
              <AdaptiveRightPanel title="Framework Interface" context="System Doctrine" />
              
              <div className="p-10 border border-gray-100 space-y-8 bg-white shadow-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Doctrine Status</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                      <span className="text-gray-400">Alignment Index</span>
                      <span className="text-black font-bold">98.4%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-50">
                      <div className="h-full bg-black opacity-20 w-[98%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                      <span className="text-gray-400">Governance Coverage</span>
                      <span className="text-black font-bold">Full</span>
                    </div>
                    <div className="h-1 w-full bg-gray-50">
                      <div className="h-full bg-black opacity-20 w-full" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[9px] uppercase tracking-widest text-gray-400">Current Standard</div>
                  <div className="text-sm font-mono uppercase">Hybrid Intelligence v1.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const KnowledgePage = () => {
  const { navigate, updateStage } = useContext(SystemContext);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-40 font-sans selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-8 space-y-40">
            
            {/* HERO / POSITIONING */}
            <section id="knowledge-hero" className="space-y-16">
              <div className="space-y-8">
                <div className="inline-block px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-[0.3em]">
                  Knowledge Repository v2.4.0
                </div>
                <h1 className="text-7xl font-light tracking-tight leading-[1.05] text-black max-w-4xl">
                  The Doctrine of Intelligence.
                </h1>
                <div className="h-px w-32 bg-black" />
              </div>
              <div className="max-w-2xl space-y-10">
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  Information is abundant. Understanding is rare. Intelligence requires structure. The Matrix360 Knowledge System is the foundational doctrine for the era of Hybrid Intelligence.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-8 italic">
                  "We are transitioning from an era of information consumption to an era of cognitive habitation."
                </p>
              </div>
            </section>

            {/* 1. THE PROBLEM: THE INFORMATION TRAP */}
            <section id="knowledge-problem" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">01 / The Information Trap</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-light">Signal vs. Noise.</h2>
                  <p className="text-gray-600 leading-relaxed">
                    In an age of infinite content, the signal is lost in the noise. Without a structured body of knowledge, intelligence remains fragmented and unusable for strategic execution.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    "Abundance of data without conceptual clarity.",
                    "Intelligence applied without a foundational doctrine.",
                    "Fragmented knowledge systems leading to execution gaps."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-red-500 mt-2 shrink-0" />
                      <p className="text-sm text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. THE RESPONSE: A STRUCTURED BODY OF KNOWLEDGE */}
            <section id="knowledge-response" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">02 / The Knowledge Response</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-gray-50 border border-gray-100 p-16 space-y-12">
                <h2 className="text-4xl font-light">Structured Doctrine.</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      The Matrix360 Knowledge System is not a content library. It is a structured body of knowledge that defines how intelligence operates, how it must be structured, and how it must be governed.
                    </p>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: "Conceptual Mastery", desc: "Deep understanding of the mechanics of intelligence." },
                      { label: "Foundational Truths", desc: "The core principles of human-machine collaboration." },
                      { label: "Strategic Authority", desc: "The ability to lead in a hybrid cognitive environment." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1 h-1 bg-black mt-2 shrink-0" />
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold uppercase tracking-widest">{item.label}</h5>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. THE DOCTRINE VOLUMES */}
            <section id="doctrine-volumes" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">03 / The Hybrid Doctrine</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { vol: "Volume I", title: "Philosophy", desc: "The foundational truths of human-machine collaboration and cognitive ethics." },
                  { vol: "Volume II", title: "Architecture", desc: "The structural integration of governed cognitive workflows and systems." },
                  { vol: "Volume III", title: "Governance", desc: "The protocols for institutional accountability and systemic integrity." }
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-gray-100 space-y-6 group hover:border-black transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-gray-400">{item.vol}</span>
                      <BookOpen className="w-4 h-4 text-gray-200 group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. THE STUDENT ROLE */}
            <section id="student-role" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">04 / The Student Role</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="text-4xl font-light">Conceptual Mastery.</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    As a student of the doctrine, you engage with the foundational principles of Hybrid Intelligence. You develop the conceptual mastery required to architect and govern complex systems.
                  </p>
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-8 border border-gray-100 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Deep Study</h4>
                    <p className="text-xs text-gray-500">Engaging with the primary publications and research papers.</p>
                  </div>
                  <div className="p-8 border border-gray-100 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Systemic Leadership</h4>
                    <p className="text-xs text-gray-500">Applying the doctrine to lead organizational transformation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. OUTCOME */}
            <section id="knowledge-outcome" className="space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">05 / Knowledge Outcome</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="bg-black text-white p-20 space-y-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <BookOpen className="w-64 h-64" />
                </div>
                <div className="max-w-3xl space-y-12 relative z-10">
                  <h2 className="text-6xl font-light leading-tight">Clarity & Authority.</h2>
                  <p className="text-xl opacity-70 leading-relaxed font-light">
                    The Matrix360 Knowledge System provides the conceptual foundation for leadership in the age of intelligence. The result is a deep understanding of the mechanics of intelligence and the authority to lead.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => { updateStage('IN_PROGRESS'); navigate('academy'); }}
                      className="group flex items-center gap-6 text-2xl font-light hover:italic transition-all"
                    >
                      Access Volume I: Philosophy
                      <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40 space-y-12">
              <AdaptiveRightPanel title="Knowledge Portal" context="Doctrine Access" />
              
              <div className="p-10 border border-gray-100 space-y-8 bg-white shadow-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Repository Status</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                      <span className="text-gray-400">Volumes Released</span>
                      <span className="text-black font-bold">3 / 3</span>
                    </div>
                    <div className="h-1 w-full bg-gray-50">
                      <div className="h-full bg-black opacity-20 w-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                      <span className="text-gray-400">Access Level</span>
                      <span className="text-black font-bold">Standard</span>
                    </div>
                    <div className="h-1 w-full bg-gray-50">
                      <div className="h-full bg-black opacity-20 w-1/2" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[9px] uppercase tracking-widest text-gray-400">Latest Update</div>
                  <div className="text-sm font-mono uppercase">Doctrine Revision 4.2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [stage, setStage] = useState<'NEW' | 'IN_PROGRESS' | 'ENGAGED'>('NEW');
  const [visitedPages, setVisitedPages] = useState<string[]>(['home']);
  const [intent, setIntent] = useState<string | null>(null);

  const navigate = (page: string, newIntent?: string) => {
    setCurrentPage(page);
    setVisitedPages(prev => Array.from(new Set([...prev, page])));
    if (newIntent) setIntent(newIntent);
  };

  const updateStage = (newStage: 'NEW' | 'IN_PROGRESS' | 'ENGAGED') => {
    setStage(newStage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <SystemContext.Provider value={{ currentPage, stage, visitedPages, intent, navigate, updateStage }}>
      <div className="min-h-screen bg-white text-gray-900 font-sans tracking-tight selection:bg-blue-100 selection:text-blue-900">
        <SystemNavigationBar />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'framework' && <FrameworkPage />}
            {currentPage === 'academy' && <AcademyPage />}
            {currentPage === 'lab' && <LabPage />}
            {currentPage === 'platform' && <PlatformPage />}
            {currentPage === 'community' && <CommunityPage />}
            {currentPage === 'knowledge' && <KnowledgePage />}
            {currentPage === 'assessment' && <AssessmentPage />}
            {/* Placeholders for other pages */}
            {['consulting'].includes(currentPage) && (
              <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <Terminal className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                  <h1 className="text-3xl font-medium text-gray-900 mb-4 capitalize">{currentPage} System</h1>
                  <p className="text-gray-600">Module initializing. Access restricted.</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </SystemContext.Provider>
  );
}



