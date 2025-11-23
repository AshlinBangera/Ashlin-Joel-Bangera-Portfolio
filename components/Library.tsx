import React from 'react';
import { ExternalLink, Radio, PlayCircle } from 'lucide-react';

const books = [
  { 
    title: "The Man Who Solved the Market", 
    author: "Gregory Zuckerman", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/B07NLFC63Y.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "The Intelligent Investor", 
    author: "Benjamin Graham", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/0063423529.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "The Trading Game", 
    author: "Gary Stevenson", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/1802062734.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "Shoe Dog", 
    author: "Phil Knight", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/1471146723.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "The Psychology of Money", 
    author: "Morgan Housel", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/0857197681.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "Elon Musk", 
    author: "Ashlee Vance", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/0753555646.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "1929: The Greatest Crash", 
    author: "Andrew Ross Sorkin", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/B0CZWW74JW.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "Market Wizards", 
    author: "Jack D. Schwager", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/1118273052.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "Power of Your Subconscious Mind", 
    author: "Dr. Joseph Murphy", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/9389717345.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "The Little Book That Still Beats the Market", 
    author: "Joel Greenblatt", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/0470624159.01.LZZZZZZZ.jpg" 
  },
  { 
    title: "The New Case for Gold", 
    author: "James Rickards", 
    cover: "https://images-na.ssl-images-amazon.com/images/P/0241444756.01.LZZZZZZZ.jpg" 
  },
  {
    title: "Machine Learning for Algorithmic Trading",
    author: "Stefan Jansen",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1839217715.01.LZZZZZZZ.jpg"
  },
  {
    title: "Generative AI for Trading and Asset Management",
    author: "Hamlet Jesse Medina Ruiz, Ernest P. Chan",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1394266979.01.LZZZZZZZ.jpg"
  },
  {
    title: "Hands-On AI Trading with Python",
    author: "Jiri Pik, Ernest P. Chan",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1394268432.01.LZZZZZZZ.jpg"
  },
  {
    title: "Quantitative Trading",
    author: "Ernest P. Chan",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1394378041.01.LZZZZZZZ.jpg"
  },
  {
    title: "Bond Investing For Dummies",
    author: "Russell Wild",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1119894786.01.LZZZZZZZ.jpg"
  },
  {
    title: "Trading: Technical Analysis Masterclass",
    author: "Rolf Schlotmann",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1795471859.01.LZZZZZZZ.jpg"
  },
  {
    title: "The Prize",
    author: "Daniel Yergin",
    cover: "https://images-na.ssl-images-amazon.com/images/P/B0096FWEWM.01.LZZZZZZZ.jpg"
  },
  {
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1501124021.01.LZZZZZZZ.jpg"
  },
  {
    title: "How Countries Go Broke",
    author: "Ray Dalio",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1398551465.01.LZZZZZZZ.jpg"
  },
  {
    title: "Principles for Dealing with the Changing World Order",
    author: "Ray Dalio",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1471196690.01.LZZZZZZZ.jpg"
  },
  {
    title: "The Dhandho Investor",
    author: "Mohnish Pabrai",
    cover: "https://images-na.ssl-images-amazon.com/images/P/047004389X.01.LZZZZZZZ.jpg"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0307887898.01.LZZZZZZZ.jpg"
  },
  {
    title: "Laws of UX",
    author: "Jon Yablonski",
    cover: "https://images-na.ssl-images-amazon.com/images/P/149205531X.01.LZZZZZZZ.jpg"
  },
  {
    title: "Actionable Gamification",
    author: "Yu-kai Chou",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0692673334.01.LZZZZZZZ.jpg"
  },
  {
    title: "Sprint",
    author: "Jake Knapp",
    cover: "https://images-na.ssl-images-amazon.com/images/P/150112174X.01.LZZZZZZZ.jpg"
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0062273205.01.LZZZZZZZ.jpg"
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0465050654.01.LZZZZZZZ.jpg"
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0241184835.01.LZZZZZZZ.jpg"
  }
];

const mediaList = [
  { 
    title: "Masters of Scale", 
    subtitle: "Reid Hoffman", 
    type: "podcast",
    image: "https://unavatar.io/youtube/MastersofScale_" 
  },
  { 
    title: "The Diary Of A CEO", 
    subtitle: "Steven Bartlett", 
    type: "podcast",
    image: "https://unavatar.io/youtube/TheDiaryOfACEO" 
  },
  { 
    title: "All-In Podcast", 
    subtitle: "Chamath, Jason, Sacks", 
    type: "podcast",
    image: "https://unavatar.io/youtube/allin" 
  },
  { 
    title: "Joe Rogan Experience", 
    subtitle: "Joe Rogan", 
    type: "podcast",
    image: "https://unavatar.io/youtube/joerogan" 
  },
  { 
    title: "Fintech Insider", 
    subtitle: "11:FS", 
    type: "podcast",
    image: "https://unavatar.io/youtube/11FS" 
  },
  { 
    title: "World Knowledge Forum", 
    subtitle: "WKF", 
    type: "podcast",
    image: "https://unavatar.io/youtube/wkforum" 
  },
  { 
    title: "Lenny's Podcast", 
    subtitle: "Lenny Rachitsky", 
    type: "podcast",
    image: "https://unavatar.io/youtube/LennysPodcast" 
  },
  { 
    title: "Product School", 
    subtitle: "Product Management", 
    type: "podcast",
    image: "https://unavatar.io/youtube/ProductSchoolSanFrancisco" 
  }
];

const Library: React.FC = () => {
  return (
    <section id="library" className="py-24 bg-terminal-bg relative overflow-hidden border-t border-terminal-border">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-terminal-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
                <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-terminal-accent animate-pulse"></span>
                    <span className="text-xs font-bold text-terminal-accent tracking-widest uppercase">Active Inputs</span>
                </div>
                <h2 className="text-4xl font-bold text-white">Library & Listening</h2>
                <p className="text-terminal-muted mt-2 max-w-xl">Curated knowledge streams. Current reads, podcasts, and research papers fueling my thinking.</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* On Rotation Widget */}
            <div className="lg:col-span-1 h-[500px]">
                 <div className="bg-gradient-to-br from-white to-gray-100 text-black rounded-3xl p-6 shadow-2xl h-full transform hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
                    
                    <div className="flex items-center gap-4 mb-4 relative z-10 shrink-0">
                        <div className="bg-black p-3 rounded-full shadow-lg">
                            <Radio className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold tracking-tight">On Rotation</h3>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Podcasts</p>
                        </div>
                    </div>
                    
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto pr-1 relative z-10 custom-scrollbar">
                        {/* 2 Column Grid - 4 Items Per Column (8 items total) */}
                        <div className="grid grid-cols-2 gap-3">
                            {mediaList.map((item, idx) => (
                                <a 
                                  key={idx} 
                                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " podcast")}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex flex-col gap-2 group cursor-pointer p-2 rounded-xl hover:bg-black/5 transition-colors border border-transparent hover:border-black/5"
                                >
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm bg-gray-200">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <PlayCircle className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                        </div>
                                        <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm uppercase">
                                            {item.type}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-xs text-gray-900 truncate group-hover:text-blue-600 transition-colors">{item.title}</p>
                                        <p className="text-gray-500 text-[10px] truncate">{item.subtitle}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Moving Book Carousel */}
            <div className="lg:col-span-2 flex flex-col justify-center overflow-hidden h-[500px]">
                <div className="mb-6 flex items-center gap-4">
                     <h3 className="font-mono text-sm text-terminal-muted uppercase tracking-widest">My Reading List</h3>
                     <div className="h-px bg-white/10 flex-1"></div>
                </div>
                
                {/* Marquee Container */}
                <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
                     <div 
                        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
                     >
                         {/* First set of items */}
                         {[...books, ...books].map((book, idx) => (
                             <div 
                                key={`${idx}`} 
                                className="w-[180px] mx-4 flex-shrink-0 group relative transition-all duration-300 hover:-translate-y-2"
                             >
                                 <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-terminal-card relative">
                                     <img 
                                        src={book.cover} 
                                        alt={book.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                     />
                                     <a 
                                       href={`https://www.google.com/search?q=${encodeURIComponent(book.title + " " + book.author + " book")}`} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4"
                                     >
                                          <ExternalLink className="w-6 h-6 text-terminal-accent mb-2" />
                                          <p className="text-xs font-bold text-white line-clamp-2">{book.title}</p>
                                     </a>
                                 </div>
                                 <div className="mt-4">
                                     <h4 className="text-white font-bold text-sm truncate group-hover:text-terminal-accent transition-colors">{book.title}</h4>
                                     <p className="text-terminal-muted text-xs truncate">{book.author}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Library;