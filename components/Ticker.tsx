
import React from 'react';
import { MarketSkill } from '../types';

interface TickerProps {
  skills: MarketSkill[];
}

const Ticker: React.FC<TickerProps> = ({ skills }) => {
  return (
    <div className="w-full bg-terminal-card border-y border-terminal-border overflow-hidden h-10 flex items-center relative z-20">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Duplicate list 4 times for seamless loop with translateX(-50%) */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex items-center mx-6 font-mono text-sm">
            <span className="text-terminal-muted mr-2">{skill.name}</span>
            <span className="text-terminal-text mr-2">{skill.value.toFixed(2)}</span>
            <span className={skill.change >= 0 ? 'text-terminal-success' : 'text-terminal-danger'}>
              {skill.change >= 0 ? '▲' : '▼'} {Math.abs(skill.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
