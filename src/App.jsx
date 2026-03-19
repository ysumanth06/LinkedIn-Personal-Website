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
  <section className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient" id="home">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-8 space-y-8">
        <div className="inline-block px-3 py-1 bg-surface-container-high rounded-md mb-6">
          <span className="text-secondary font-label text-[10px] tracking-[0.2em] font-bold">SYSTEM STATUS: ACTIVE</span>
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
            View Projects
          </a>
          <a href="#contact" className="bg-surface-variant/20 border border-secondary/15 text-secondary px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase backdrop-blur-md transition-colors hover:bg-secondary/10 inline-block text-center">
            Connect
          </a>
        </div>
      </div>
      <div className="lg:col-span-4 mt-12 lg:mt-0 mx-8 lg:mx-0">
        <div className="relative group">
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
  <section className="py-32 bg-surface-container-low" id="about">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">About</h2>
          <div className="w-12 h-1 bg-secondary mt-4"></div>
        </div>
        <div className="lg:col-span-8 lg:pl-12">
          <p className="font-body text-xl md:text-2xl text-on-surface leading-relaxed mb-8">
            Throughout my journey—from architecting custom enhancements in Apttus/Conga CLM to leading multi-team Salesforce rollouts—I’ve consistently delivered innovative solutions that align with evolving business and regulatory needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <span className="font-label text-xs tracking-widest text-secondary font-bold">CORE PHILOSOPHY</span>
              <p className="text-on-surface-variant">Efficiency is driven by data. I enjoy mentoring teams, optimizing engineering processes, and staying ahead with tools like AI/LLMs to improve accuracy.</p>
            </div>
            <div className="space-y-4">
              <span className="font-label text-xs tracking-widest text-secondary font-bold">BEYOND THE CODE</span>
              <p className="text-on-surface-variant">Outside of work, you’ll usually find me on a badminton court, experimenting in the kitchen, or exploring new food spots. Always up for a good conversation about tech, food, or AI trends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-32 bg-surface" id="experience">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="font-headline text-4xl font-bold tracking-tight mb-20 text-center uppercase tracking-[0.2em]">The Timeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-8 bg-surface-container border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-colors">
          <span className="font-label text-[10px] text-primary tracking-widest mb-6 block">2023 — PRESENT</span>
          <h3 className="font-headline text-2xl font-bold mb-2">Salesforce/Conga Architect</h3>
          <p className="text-secondary font-medium mb-6">EXPRESS SCRIPTS</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">Serving as the project lead and Solution Architect for Conga CLM implementation projects across complex healthcare and PBM ecosystems.</p>
        </div>

        <div className="p-8 bg-surface-container-high border border-outline-variant/10 rounded-xl lg:row-span-2 flex flex-col justify-between">
          <div>
            <span className="font-label text-[10px] text-primary tracking-widest mb-6 block">2021 — 2023</span>
            <h3 className="font-headline text-2xl font-bold mb-2">Solution Architect & Sr. Engineer</h3>
            <p className="text-secondary font-medium mb-6">SOLUTIONSOFT INC</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">Analyzed and developed custom applications on the Salesforce Force.com platform. Designed advanced integrations to support contract negotiation workflows and eSignature processes.</p>
          </div>
        </div>

        <div className="p-8 bg-surface-container border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-colors">
          <span className="font-label text-[10px] text-primary tracking-widest mb-6 block">2019 — 2021</span>
          <h3 className="font-headline text-2xl font-bold mb-2">Sr. Salesforce Engineer</h3>
          <p className="text-secondary font-medium mb-6">SVK SYSTEMS INC</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">Developed and maintained Contract Life Cycle Management (CLM) custom applications, Intelligent Workflow Approvals, and robust external API integrations.</p>
        </div>

        <div className="p-8 bg-surface-container-low border border-outline-variant/10 rounded-xl md:col-span-2 lg:col-span-1">
          <span className="font-label text-[10px] text-primary tracking-widest mb-6 block">2018 — 2019</span>
          <h3 className="font-headline text-2xl font-bold mb-2">Salesforce/Apttus Developer</h3>
          <p className="text-secondary font-medium mb-6">VARIOUS</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">Provided technical support for R&D Finance and Operations, building Visualforce APIs, Web Services, and comprehensive XML integrations.</p>
        </div>
      </div>
    </div>
  </section>
);

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
      title: "SAS - Salesforce Agentic Systems",
      description: "A reusable skill library for Salesforce-focused coding agents.",
      fullDescription: "SAS - A reusable skill library for Salesforce-focused coding agents—covering Apex, Flow, LWC, SOQL, metadata, integration, testing, deployment, and Agentforce workflows specially built for cursor ai.",
      tags: ["AGENTFORCE", "AI", "CURSOR"],
      bgText: "SAS",
      colorClass: "text-primary"
    },
    {
      title: "DocGen",
      description: "A native salesforce document generation and digital signature platform.",
      fullDescription: "DocGen - A native salesforce document generation and digital signature platform designed for high-performance and enterprise-scale (20,000+ records).",
      tags: ["APEX", "DOCUMENTATION", "SIGNATURE"],
      bgText: "DocGen",
      colorClass: "text-secondary"
    },
    {
      title: "Burrow",
      description: "Worlds First AI enabled Salesforce Qa Automation Tool.",
      fullDescription: "Burrow - Worlds First AI enabled Salesforce Qa Automation Tool with auto scripting and metadata awareness.",
      tags: ["QA", "AUTOMATION", "AI"],
      bgText: "Burrow",
      colorClass: "text-tertiary"
    },
    {
      title: "Mass File Exporter",
      description: "A Native Salesforce Tool to export mass file with advanced soql.",
      fullDescription: "Mass File Exporter - A Native Salesforce Tool to export mass file with advanced soql including the ability for complex app exchange products.",
      tags: ["DATA", "MIGRATION", "SOQL"],
      bgText: "FileExp",
      colorClass: "text-primary"
    },
    {
      title: "AI Contract Analysis",
      description: "Intelligent Document Analysis Tool highlighting key information.",
      fullDescription: "AI Contract Analysis - Intelligent Document Analysis Tool which auto identified key information in the contract and highlights to users as a beautiful tiles with in salesforce. Bring your own Ai modal for enterprises.",
      tags: ["CONTRACTS", "AI", "MODELS"],
      bgText: "AI Cont.",
      colorClass: "text-secondary"
    }
  ];

  return (
    <section className="py-32 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 md:gap-8 mb-20">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter shrink-0">What I'm building</h2>
          <div className="h-[1px] w-full bg-outline-variant/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((proj, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => setSelectedProject(proj)}>
              <div className="relative overflow-hidden rounded-xl mb-8 bg-surface-container-high aspect-video border border-outline-variant/10 flex items-center justify-center">
                 <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <span className={`text-5xl md:text-6xl ${proj.colorClass} font-headline opacity-60 text-center px-4`}>{proj.bgText}</span>
                 </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${idx%2==0 ? 'from-primary/20' : 'from-secondary/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2 transition-colors group-hover:text-primary">{proj.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">{proj.description}</p>
                  <div className="flex gap-4">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-label font-bold text-tertiary">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`${proj.colorClass} hover:text-white transition-colors`}>
                  <span className="material-symbols-outlined">north_east</span>
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
