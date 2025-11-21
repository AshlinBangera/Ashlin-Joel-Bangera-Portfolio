import React, { useState, useRef, useEffect } from 'react';
import { generateResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello. I am Ashlin's AI Agent. Ask me about his experience in FinTech, his trading strategy, or his Python skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await generateResponse(userMsg);

    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-terminal-accent text-black font-bold p-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 transition-transform flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          ASK AI
        </button>
      )}

      {isOpen && (
        <div className="bg-terminal-card border border-terminal-accent w-80 md:w-96 h-[500px] shadow-2xl flex flex-col rounded-lg overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-terminal-accent text-black p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold font-mono text-sm">
              <span>◆</span> ASHLIN_AI_AGENT
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-terminal-border">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 text-sm rounded ${
                  msg.role === 'user' 
                    ? 'bg-terminal-border text-white rounded-br-none' 
                    : 'bg-[rgba(0,240,255,0.1)] text-terminal-text border border-terminal-accent/30 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[rgba(0,240,255,0.1)] text-terminal-accent text-xs p-2 rounded animate-pulse">
                  PROCESSING_QUERY...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-terminal-bg border-t border-terminal-border flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type command..."
              className="flex-1 bg-terminal-card border border-terminal-border text-white text-sm px-3 py-2 focus:outline-none focus:border-terminal-accent font-mono"
            />
            <button 
              onClick={handleSend}
              className="bg-terminal-accent text-black font-bold px-3 py-2 text-xs hover:bg-cyan-300 transition-colors"
            >
              SEND
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
