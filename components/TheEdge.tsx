import React from 'react';
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from '../constants';

const TheEdge: React.FC = () => {
  return (
    <section id="thesis" className="py-24 bg-black relative border-t border-terminal-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: The Thesis */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-terminal-accent font-mono text-xl">>_</span>
              <h2 className="text-3xl font-bold text-white">Trading Sharpens My Edge</h2>
            </div>
            
            <p className="text-terminal-muted mb-8 text-lg leading-relaxed">
              I don't just manage products; I manage risk and return. My background as an <strong className="text-white">active derivatives trader</strong> and <strong className="text-white">financial advisor</strong> has instilled a discipline of making high-conviction bets with imperfect information.
            </p>

            <p className="text-terminal-muted mb-8 text-lg leading-relaxed">
              Currently pursuing my <strong className="text-white">MSc in Business Analytics</strong> at University of Galway, I combine financial acumen with technical skills in Python, Machine Learning, and RAG architectures to build the next generation of FinTech products.
            </p>

            <div className="grid gap-4">
              <div className="bg-terminal-card border-l-4 border-terminal-success p-6 rounded-r-lg">
                <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                  <svg className="w-5 h-5 text-terminal-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  Proven Outperformance
                </h3>
                <p className="text-sm text-terminal-muted">Managed a diversified equity portfolio that outperformed the benchmark index by 8% (2021).</p>
              </div>
              
              <div className="bg-terminal-card border-l-4 border-terminal-accent p-6 rounded-r-lg">
                <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                   <svg className="w-5 h-5 text-terminal-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  Award Winning Innovation
                </h3>
                <p className="text-sm text-terminal-muted">Recipient of the President's Award for Innovation & Entrepreneurship (NUIG).</p>
              </div>
            </div>
          </div>

          {/* Right: Registry (Certs & Edu) */}
          <div className="bg-terminal-card border border-terminal-border rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-6xl font-bold text-white select-none">REGISTRY</div>
            
            <div className="space-y-8 relative z-10">
              {/* Certifications */}
              <div>
                <h3 className="text-terminal-success font-mono text-sm uppercase tracking-wider mb-4 border-b border-terminal-border pb-2">
                  Certifications_Registry
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CERTIFICATIONS_DATA.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors">
                       <div className="text-terminal-accent">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       </div>
                       <div className="overflow-hidden">
                         <div className="text-sm text-white font-medium truncate">{cert.name}</div>
                         <div className="text-xs text-terminal-muted truncate">{cert.issuer}</div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-terminal-success font-mono text-sm uppercase tracking-wider mb-4 border-b border-terminal-border pb-2">
                  Education_Path
                </h3>
                <div className="space-y-4">
                  {EDUCATION_DATA.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-end group">
                      <div>
                        <div className="text-white font-medium group-hover:text-terminal-accent transition-colors">{edu.degree}</div>
                        <div className="text-sm text-terminal-muted">{edu.school}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TheEdge;