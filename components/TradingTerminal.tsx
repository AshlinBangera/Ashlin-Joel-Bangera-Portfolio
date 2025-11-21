import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Strategy', score: 95, type: 'PM' },
  { name: 'Python/AI', score: 88, type: 'Tech' },
  { name: 'FinTech', score: 92, type: 'Domain' },
  { name: 'Stakeholder', score: 90, type: 'Soft' },
  { name: 'Cloud/DevOps', score: 85, type: 'Tech' },
  { name: 'Trading', score: 98, type: 'Domain' },
];

const TradingTerminal: React.FC = () => {
  return (
    <section className="py-20 bg-black border-y border-terminal-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-mono text-white flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              LIVE_METRICS
            </h2>
            <span className="text-terminal-muted font-mono text-sm">MKT: OPEN</span>
          </div>
          
          <div className="bg-terminal-card border border-terminal-border p-4 h-80 relative">
             {/* CRT Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,240,255,0.03)] pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-10"></div>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100} 
                  tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'JetBrains Mono' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#1e293b', opacity: 0.4 }}
                  contentStyle={{ backgroundColor: '#0a0f14', borderColor: '#1e293b', color: '#fff' }}
                  itemStyle={{ color: '#00f0ff' }}
                />
                <Bar dataKey="score" barSize={20} radius={[0, 4, 4, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.type === 'Tech' ? '#00f0ff' : entry.type === 'PM' ? '#00ff9d' : '#ffd700'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex gap-4 mt-4 font-mono text-xs text-terminal-muted">
            <div className="flex items-center"><span className="w-2 h-2 bg-terminal-accent mr-2"></span> TECH</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-terminal-success mr-2"></span> PRODUCT</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-terminal-warning mr-2"></span> DOMAIN</div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="border border-terminal-border bg-terminal-card p-6 font-mono text-sm">
            <div className="text-terminal-muted mb-2 border-b border-terminal-border pb-2 flex justify-between">
              <span>LATEST_ORDER_FLOW</span>
              <span>T: +0.0ms</span>
            </div>
            <div className="space-y-2">
               <div className="flex justify-between">
                 <span className="text-terminal-success">BUY</span>
                 <span className="text-white">AGENTIC_AI_WORKFLOWS</span>
                 <span className="text-terminal-muted">QTY: MAX</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-terminal-success">BUY</span>
                 <span className="text-white">CLOUD_NATIVE_INFRA</span>
                 <span className="text-terminal-muted">QTY: HIGH</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-terminal-danger">SELL</span>
                 <span className="text-white">LEGACY_MONOLITHS</span>
                 <span className="text-terminal-muted">QTY: ALL</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-terminal-success">BUY</span>
                 <span className="text-white">DATA_DRIVEN_DECISIONS</span>
                 <span className="text-terminal-muted">QTY: MAX</span>
               </div>
            </div>
          </div>

          <div className="p-6 border border-terminal-accent bg-[rgba(0,240,255,0.02)]">
            <h3 className="text-terminal-accent font-bold mb-2">ALPHA GENERATION</h3>
            <p className="text-terminal-muted text-sm leading-relaxed">
              "Just as in trading, where <span className="text-white">alpha</span> represents the excess return of an investment relative to the return of a benchmark index, in product management, I strive to generate alpha by delivering features that outperform user expectations and business KPIs through rigorous data analysis and strategic risk-taking."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradingTerminal;
