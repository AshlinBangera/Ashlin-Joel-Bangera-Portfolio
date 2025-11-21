
import React, { useState } from 'react';

const Hero: React.FC = () => {
  // Google Drive Direct Link
  // Using the 'thumbnail' API often bypasses quota limits for view-only files while retaining quality
  const [imgSrc, setImgSrc] = useState("https://drive.google.com/thumbnail?id=17olh2AIhYKIZGmurZxTVxUNoAS51qmFV&sz=w1920");
  
  const handleError = () => {
     console.warn("Failed to load Drive image. Falling back to generic.");
     setImgSrc("https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1920&auto=format&fit=crop");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-terminal-bg overflow-hidden">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* 2. Profile/Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
            {/* 
                Using object-contain and positioning bottom-right to handle cutout images better.
                If the image has a background, it will still look okay but might leave gaps if aspect ratio differs.
            */}
           <img 
              src={imgSrc} 
              onError={handleError}
              alt="Ashlin Joel Bangera - Trader Profile" 
              className="w-full h-full object-cover lg:object-contain lg:object-right-bottom opacity-90"
          />
          
          {/* Gradient Masks for Text Readability */}
          
          {/* Left Fade: Ensures text on the left is readable */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-terminal-bg via-terminal-bg/80 to-transparent"></div>
          
          {/* Bottom Fade: Blends image into footer/next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-terminal-bg to-transparent"></div>
        </div>
      </div>

      {/* 3. Content Layer */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pointer-events-none">
        <div className="max-w-3xl space-y-8 pointer-events-auto py-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-terminal-card/90 backdrop-blur border border-terminal-border rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(0,255,157,0.1)] group hover:border-terminal-success/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-success"></span>
            </span>
            <span className="text-terminal-success text-xs font-mono tracking-wide uppercase">
              Open to Roles in Dublin & Remote
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl">
              Ashlin Joel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-success via-terminal-accent to-white">Bangera</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-terminal-success to-transparent mt-4"></div>
          </div>

          <h2 className="text-xl md:text-3xl text-terminal-accent font-light font-mono">
            Certified SAFe® 6 PO/PM | <span className="text-blue-400 font-medium">AI & Data Product Leader</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed drop-shadow-md font-light border-l-2 border-terminal-border pl-6 bg-terminal-bg/40 backdrop-blur-sm rounded-r-lg py-2">
            Bridging the gap between complex financial instruments and Agentic AI. I leverage my background in <strong className="text-white font-semibold">Derivatives Trading</strong> and <strong className="text-white font-semibold">Business Analytics</strong> to build products that engineer alpha.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#portfolio" className="bg-terminal-success text-terminal-bg font-bold px-8 py-4 rounded flex items-center gap-2 hover:bg-emerald-400 transition-all transform hover:-translate-y-1 shadow-[0_0_25px_rgba(0,255,157,0.4)]">
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#contact" className="bg-terminal-card/80 backdrop-blur-md border border-terminal-border text-white font-medium px-8 py-4 rounded hover:border-terminal-text hover:bg-white/5 transition-all shadow-lg">
              Contact Me
            </a>
          </div>

          {/* Live Stats Overlay */}
          <div className="pt-10 flex flex-wrap gap-6 opacity-90">
               <div className="flex items-center gap-3 bg-black/60 px-4 py-2 rounded-lg border border-terminal-border/50 backdrop-blur-md">
                   <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                   <span className="text-xs font-mono text-slate-300">LIVE TRADING SESSION</span>
               </div>
               <div className="flex items-center gap-3 bg-black/60 px-4 py-2 rounded-lg border border-terminal-border/50 backdrop-blur-md">
                   <svg className="w-4 h-4 text-terminal-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                   <span className="text-xs font-mono text-slate-300">TOP 8% vs BENCHMARK</span>
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
