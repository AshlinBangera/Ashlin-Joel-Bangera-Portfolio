import React from 'react';
import { PROJECTS_DATA } from '../constants';

const Icons = {
  'agentic-rag': (
    <svg className="w-12 h-12 text-terminal-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
  ),
  'fresh-dashboard': (
    <svg className="w-12 h-12 text-terminal-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
  ),
  'autism-prediction': (
    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  )
};

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Key Projects</h2>
            <p className="text-terminal-muted">My technical portfolio covering AI, Data Viz, and ML.</p>
          </div>
          
          <div className="hidden md:flex gap-2">
             <span className="bg-terminal-card border border-terminal-border px-3 py-1 text-xs text-terminal-muted rounded">Technical Projects</span>
             <span className="bg-transparent border border-transparent px-3 py-1 text-xs text-terminal-muted/50">Experience</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="bg-terminal-card border border-terminal-border rounded-xl p-8 hover:border-terminal-accent/50 transition-all group flex flex-col">
              
              <div className="h-32 flex items-center justify-center mb-6 bg-black/20 rounded-lg group-hover:bg-black/40 transition-colors">
                {Icons[project.id as keyof typeof Icons] || Icons['agentic-rag']}
              </div>

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-terminal-accent transition-colors">{project.title}</h3>
                <span className="text-[10px] uppercase tracking-wider border border-terminal-border px-2 py-1 rounded text-terminal-muted">
                  {project.tech[0]}
                </span>
              </div>

              <p className="text-terminal-muted text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="border-t border-terminal-border pt-4">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-terminal-muted">
                  {project.tech.map((t, i) => (
                    <span key={i}>#{t}</span>
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

export default Projects;