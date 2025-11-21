
import React, { useEffect, useRef, useState } from 'react';
import { TECH_SPECS } from '../constants';

const TechSpecs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: disconnect if you only want it to animate once
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Added hover:scale, hover:border-accent, and glow effects
  // Added 'group' to enable group-hover on children (titles)
  const baseCardStyle = "group bg-terminal-card border border-terminal-border rounded-lg p-6 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:border-terminal-accent hover:bg-terminal-border/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]";
  
  return (
    <section id="stack" ref={sectionRef} className="py-24 bg-black border-y border-terminal-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <h2 className="text-sm font-mono text-terminal-success tracking-[0.3em] uppercase mb-4">Technical Specifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Core Product */}
          <div className={`${baseCardStyle} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} delay-0`}>
             <h3 className="text-white font-bold text-center mb-6 group-hover:text-terminal-accent transition-colors">Core Product</h3>
             <ul className="space-y-3 text-center">
               {TECH_SPECS.coreProduct.map((skill, i) => (
                 <li key={i} className="text-sm text-terminal-muted font-mono">{skill}</li>
               ))}
             </ul>
          </div>

          {/* Data & AI */}
           <div className={`${baseCardStyle} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} delay-100`}>
             <h3 className="text-white font-bold text-center mb-6 group-hover:text-terminal-accent transition-colors">Data & AI</h3>
             <ul className="space-y-3 text-center">
               {TECH_SPECS.dataAI.map((skill, i) => (
                 <li key={i} className="text-sm text-terminal-muted font-mono">{skill}</li>
               ))}
             </ul>
          </div>

          {/* FinTech */}
           <div className={`${baseCardStyle} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} delay-200`}>
             <h3 className="text-white font-bold text-center mb-6 group-hover:text-terminal-accent transition-colors">FinTech</h3>
             <ul className="space-y-3 text-center">
               {TECH_SPECS.finTech.map((skill, i) => (
                 <li key={i} className="text-sm text-terminal-muted font-mono">{skill}</li>
               ))}
             </ul>
          </div>

          {/* Cloud & Ops */}
           <div className={`${baseCardStyle} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} delay-300`}>
             <h3 className="text-white font-bold text-center mb-6 group-hover:text-terminal-accent transition-colors">Cloud & Ops</h3>
             <ul className="space-y-3 text-center">
               {TECH_SPECS.cloudOps.map((skill, i) => (
                 <li key={i} className="text-sm text-terminal-muted font-mono">{skill}</li>
               ))}
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
