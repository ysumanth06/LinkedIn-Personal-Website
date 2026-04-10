import React, { useState } from 'react';
import './App.css';
import profilePic from './assets/profile.jpg';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/40 backdrop-blur-xl shadow-2xl shadow-black/50">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-[#c799ff] font-['Space_Grotesk'] uppercase">Sumanth Yanamala</div>
      <div className="hidden md:flex gap-8 font-['Space_Grotesk'] tracking-tight">
        <a className="text-[#c799ff] border-b-2 border-[#c799ff] pb-1 transition-all duration-300" href="#about">About</a>
        <a className="text-[#adaaaa] hover:text-[#c799ff] transition-colors transition-all duration-300" href="#experience">Experience</a>
        <a className="text-[#adaaaa] hover:text-[#c799ff] transition-colors transition-all duration-300" href="#skills">Skills</a>
        <a className="text-[#adaaaa] hover:text-[#c799ff] transition-colors transition-all duration-300" href="#projects">Projects</a>
        <a className="text-[#adaaaa] hover:text-[#c799ff] transition-colors transition-all duration-300" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient overflow-hidden" id="home">
    <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      <div className="lg:col-span-8 space-y-8">
        <div className="inline-block px-3 py-1 bg-surface-container-high rounded-md mb-6 border border-outline-variant/30">
          <span className="text-secondary font-label text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary pulse-indicator"></span>
            System Status: Optimal
          </span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
          Hello, I'm <span className="text-primary italic">Sumanth.</span><br/>
          Solution Architect.
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
          I bring over a decade of hands-on experience designing and implementing enterprise-grade Salesforce and CLM solutions. I specialize in translating business strategy into scalable, secure technology architectures powered by AI and automation.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="#projects" className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase transition-transform active:scale-95 inline-block text-center border-none">
            Launch Terminal
          </a>
          <a href="#contact" className="bg-surface-variant/20 border border-secondary/15 text-secondary px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase backdrop-blur-md transition-colors hover:bg-secondary/10 inline-block text-center">
            Establish Connection
          </a>
        </div>
      </div>
      <div className="lg:col-span-4 mt-12 lg:mt-0 mx-8 lg:mx-0">
        <div className="relative group">
          <span className="absolute -top-6 left-0 serial-decorator">NODE_IDENTITY::SUMANTH_Y</span>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-container border border-outline-variant/15 flex items-center justify-center">
             <img src={profilePic} alt="Sumanth Yanamala" className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-32 bg-surface-container-low relative overflow-hidden" id="about">
    <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="serial-decorator block mb-4">CORE_INTEL::01</span>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">Mission Profile</h2>
          <div className="w-12 h-1 bg-secondary mt-4"></div>
        </div>
        <div className="lg:col-span-8 lg:pl-12">
          <p className="font-body text-xl md:text-2xl text-on-surface leading-relaxed mb-8">
            Throughout my journey—from architecting custom enhancements in Apttus/Conga CLM to leading multi-team Salesforce rollouts—I’ve consistently delivered innovative solutions that align with evolving business and regulatory needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4 architect-card p-6 rounded-lg">
              <span className="font-label text-xs tracking-widest text-secondary font-bold">ENGINEERING PHILOSOPHY</span>
              <p className="text-on-surface-variant text-sm">Efficiency is driven by data. I enjoy mentoring teams, optimizing engineering processes, and staying ahead with tools like AI/LLMs to improve accuracy.</p>
            </div>
            <div className="space-y-4 architect-card p-6 rounded-lg">
              <span className="font-label text-xs tracking-widest text-secondary font-bold">EXTERNAL MODULES</span>
              <p className="text-on-surface-variant text-sm">Outside of work, you’ll usually find me on a badminton court, experimenting in the kitchen, or exploring new food spots. Always up for a good conversation about tech, food, or AI trends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  const experiences = [
    {
      period: "2023 — PRESENT",
      role: "Salesforce/Conga CLM Solution Architect",
      company: "EVERNORTH HEALTH SERVICES",
      description: "Leading enterprise-scale Conga CLM implementations and architecting AI-driven automation strategies for healthcare ecosystems.",
      stack: ["Conga CLM", "Salesforce Core", "Agentforce", "n8n"],
      active: true
    },
    {
      period: "2021 — 2023",
      role: "Solution Architect & Sr. Engineer",
      company: "SOLUTIONSOFT INC",
      description: "Designed complex Salesforce integrations and custom contract negotiation workflows featuring advanced eSignature protocols.",
      stack: ["Salesforce", "Apex", "DocuSign API", "AWS"],
      active: false
    },
    {
      period: "2019 — 2021",
      role: "Sr. Salesforce & CLM Engineer",
      company: "SVK SYSTEMS INC",
      description: "Developed and maintained high-performance contract lifecycle management systems and custom intelligent workflow automations.",
      stack: ["Apttus CLM", "Visualforce", "SOQL", "Intelligent Approvals"],
      active: false
    }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="experience">
      <div className="absolute inset-0 blueprint-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="font-headline text-4xl font-bold tracking-tight mb-20 uppercase tracking-[0.2em] text-primary">System History</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 ${exp.active ? 'bg-primary border-primary pulse-indicator' : 'border-outline-variant bg-surface'}`}></div>
                {idx !== experiences.length - 1 && <div className="w-[1px] h-full bg-outline-variant/30 mt-2"></div>}
              </div>
              <div className="pb-12 architect-card p-8 rounded-xl w-full">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <span className="serial-decorator block mb-2">AUTH_ID: {exp.company.substring(0,3)}_CONF_00{idx+1}</span>
                    <h3 className="font-headline text-2xl font-bold">{exp.role}</h3>
                    <p className="text-secondary font-medium tracking-wide">{exp.company}</p>
                  </div>
                  <span className="font-label text-xs text-primary font-bold tracking-widest mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-3xl">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section className="py-32 bg-surface-container-low" id="skills">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="font-headline text-5xl font-bold tracking-tighter">Toolkit <span className="text-secondary">&amp;</span> Proficiency</h2>
        <p className="text-on-surface-variant max-w-sm text-right md:-mt-8">Constantly evolving with the pulse of the industry. Mastering the tools of tomorrow.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'Salesforce Architecture', 'Conga CLM', 'Salesforce AI / LLMs',
          'Agentforce & n8n', 'Apex / SOQL', 'Systems Integration', 
          'Data Automation', 'Workflow & Approvals'
        ].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-surface-container-high p-4 rounded-lg border border-outline-variant/5">
            <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(74,248,227,0.6)] shrink-0"></div>
            <span className="font-label text-xs font-bold tracking-widest uppercase" title={skill}>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = ({ setSelectedProject }) => {
  const projectsData = [
    {
      title: "SFSpecKit",
      description: "Enterprise-Grade Spec-Driven Development (SDD) Framework for Salesforce.",
      fullDescription: "SFSpecKit is a high-performance framework designed to enforce architectural rigor in Salesforce development. It leverages AI logic to automate specification clarity, planning, and autonomous implementation while maintaining human-in-the-loop oversight. Optimized for multi-org enterprise environments.",
      tags: ["SALESFORCE", "AIDD", "SDLC"],
      bgText: "SFSpec",
      colorClass: "text-primary",
      large: true
    },
    {
      title: "Project Nimbus",
      description: "Autonomous Salesforce Admin Platform for conversational org management.",
      fullDescription: "A sophisticated orchestration engine that transforms natural language requests into complex Salesforce administrative actions. Integrated with 20+ specialized development skills mapping to Apex, Flow, Metadata, and Security layers.",
      tags: ["AI", "AUTO-ADMIN", "ORCHESTRATION"],
      bgText: "Nimbus",
      colorClass: "text-secondary"
    },
    {
      title: "Salesforce Smart Grid",
      description: "Metadata-driven high-performance data grid platform.",
      fullDescription: "A native Salesforce solution providing advanced grid capabilities. Features include dynamic object discovery, bulk save operations with partial resolution, and metadata-aware filtration. Designed for high-volume data entry and management.",
      tags: ["LWC", "METADATA", "UX"],
      bgText: "SmartGrid",
      colorClass: "text-tertiary"
    },
    {
      title: "SAS - Agentic Systems",
      description: "Reusable skill library for Salesforce-focused coding agents.",
      fullDescription: "SAS - A reusable skill library for Salesforce-focused coding agents—covering Apex, Flow, LWC, SOQL, metadata, integration, testing, deployment, and Agentforce workflows specially built for cursor ai.",
      tags: ["AGENTFORCE", "AI", "CURSOR"],
      bgText: "SAS",
      colorClass: "text-primary"
    },
    {
      title: "DocGen Engine",
      description: "Native Salesforce document generation platform for enterprise scale.",
      fullDescription: "DocGen - A native salesforce document generation and digital signature platform designed for high-performance and enterprise-scale (20,000+ records).",
      tags: ["APEX", "DOCS", "DIGITAL-SIG"],
      bgText: "DocGen",
      colorClass: "text-secondary"
    }
  ];

  return (
    <section className="py-32 bg-surface relative" id="projects">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex items-center gap-4 md:gap-8 mb-20">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter shrink-0">What I'm building <span className="text-secondary italic">outside of work</span></h2>
          <div className="h-[1px] w-full bg-outline-variant/20"></div>
        </div>

        <div className="bento-grid">
          {projectsData.map((proj, idx) => (
            <div 
              key={idx} 
              className={`architect-card group cursor-pointer p-8 rounded-2xl flex flex-col justify-between ${proj.large ? 'bento-item-large' : 'bento-item-medium'}`}
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="serial-decorator">PROJECT_SPEC::{proj.bgText.toUpperCase()}</span>
                  <div className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center ${proj.colorClass} group-hover:bg-primary group-hover:text-black transition-all`}>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </div>
                </div>
                
                <h3 className="font-headline text-3xl font-bold mb-4 transition-colors group-hover:text-primary leading-tight">
                  {proj.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-8 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-6">
                 <div className="h-[1px] w-full bg-outline-variant/10"></div>
                 <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-tag">#{tag}</span>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-32 bg-surface-container-lowest border-t border-outline-variant/10" id="contact">
    <div className="max-w-7xl mx-auto px-8 text-center">
      <span className="font-label text-xs tracking-[0.3em] text-secondary font-bold mb-8 block">ESTABLISH CONNECTION</span>
      <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-12">Let's build the <span className="text-primary italic">future.</span></h2>
      <a className="inline-block font-headline text-2xl md:text-4xl font-light hover:text-secondary transition-colors underline underline-offset-8 decoration-primary/30 hover:decoration-secondary" href="https://www.linkedin.com/in/ysumanth" target="_blank" rel="noreferrer">
          linkedin.com/in/ysumanth
      </a>
      <div className="mt-8">
        <a className="inline-block font-headline text-lg text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4 decoration-outline-variant" href="mailto:sumanth.yanamala@gmail.com">
            sumanth.yanamala@gmail.com
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0e0e0e] w-full py-12 px-8 border-t border-[#484847]/15">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
      <div className="font-['Inter'] uppercase tracking-[0.1em] text-[10px] text-[#adaaaa]">
          © 2024 SUMANTH REDDY YANAMALA. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-8">
        <a className="font-['Inter'] uppercase tracking-[0.1em] text-[10px] text-[#adaaaa] hover:text-[#ff9dac] transition-colors opacity-80 hover:opacity-100" href="https://github.com/ysumanth06" target="_blank" rel="noreferrer">GitHub</a>
        <a className="font-['Inter'] uppercase tracking-[0.1em] text-[10px] text-[#adaaaa] hover:text-[#ff9dac] transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/ysumanth" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-container font-body text-on-background min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects setSelectedProject={setSelectedProject} />
        <Contact />
      </main>
      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-surface-container-high border border-outline-variant/20 rounded-2xl w-full max-w-2xl p-8 shadow-2xl transition-all font-body transform scale-100 opacity-100 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors p-2"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="font-label text-xs tracking-widest text-primary font-bold mb-4 block">PROJECT DETAILS</span>
            <h3 className="font-headline text-3xl font-bold mb-6">{selectedProject.title}</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
               {selectedProject.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-outline-variant/10">
              {selectedProject.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-label font-bold text-tertiary bg-tertiary/10 px-3 py-1 rounded-full uppercase">#{tag}</span>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="bg-primary/20 hover:bg-primary/40 text-primary px-6 py-2 rounded-lg font-bold transition-colors"
               >
                 Close
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
