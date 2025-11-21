import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-terminal-bg border-t border-terminal-border">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex items-center mb-12">
           <div className="h-px flex-1 bg-terminal-border"></div>
           <h2 className="px-4 text-terminal-muted font-mono text-sm uppercase tracking-wider">Historical_Data_Logs</h2>
           <div className="h-px flex-1 bg-terminal-border"></div>
        </div>

        <div className="space-y-8">
            {EXPERIENCE_DATA.map((job) => (
                <div key={job.id} className="relative pl-8 border-l border-terminal-border hover:border-terminal-success transition-colors duration-300 group">
                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-terminal-bg border border-terminal-muted group-hover:border-terminal-success rounded-full"></span>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-terminal-success transition-colors">{job.role}</h4>
                    <div className="font-mono text-xs text-terminal-accent">{job.period}</div>
                </div>
                
                <div className="text-terminal-muted mb-4 font-medium text-sm uppercase tracking-wide">{job.company}</div>
                
                <ul className="space-y-2 text-sm text-slate-400">
                    {job.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed flex items-start">
                        <span className="mr-2 text-terminal-muted opacity-50">></span>
                        {desc}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;