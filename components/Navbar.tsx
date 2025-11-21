import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/90 backdrop-blur-sm border-b border-terminal-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-terminal-success animate-pulse-slow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-mono font-bold text-xl tracking-tight text-white">
            ASHLIN_JOEL
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#thesis" className="text-sm font-mono text-terminal-muted hover:text-terminal-success transition-colors uppercase tracking-wider">Thesis</a>
          <a href="#stack" className="text-sm font-mono text-terminal-muted hover:text-terminal-success transition-colors uppercase tracking-wider">Stack</a>
          <a href="#portfolio" className="text-sm font-mono text-terminal-muted hover:text-terminal-success transition-colors uppercase tracking-wider">Portfolio</a>
          <a href="#contact" className="text-sm font-mono text-terminal-muted hover:text-terminal-success transition-colors uppercase tracking-wider">Execute</a>
        </div>
        
        {/* Mobile Menu Button (Simple placeholder) */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;