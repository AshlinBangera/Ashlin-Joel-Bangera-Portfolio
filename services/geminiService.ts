import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY, EXPERIENCE_DATA, PROJECTS_DATA } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI Agent for Ashlin Joel Bangera's portfolio website. 
Your goal is to answer questions about Ashlin's professional background, skills, and projects.
Act as a professional, data-driven Product Manager assistant. Be concise, confident, and highlight his "Alpha" (competitive edge).

Context:
Summary: ${RESUME_SUMMARY}

Experience:
${EXPERIENCE_DATA.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join('. ')}`).join('\n')}

Projects:
${PROJECTS_DATA.map(p => `- ${p.title}: ${p.description} [Tech: ${p.tech.join(', ')}]`).join('\n')}

Tone: Professional, slightly financial/tech-forward ("Bloomberg style").
If you don't know the answer based on this context, suggest they contact Ashlin directly via LinkedIn.
`;

// Initialize generic client - expects API Key to be available via process.env
// In a real app, we'd handle key injection via backend or user input if client-side only.
// For this demo, we assume process.env.API_KEY is present or we'll fallback gracefully in the UI.
const apiKey = process.env.API_KEY || ''; 
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "AI Interface Offline. Please configure API_KEY in environment variables to enable the Agentic experience.";
  }

  try {
    const model = ai.models.generateContent;
    const result = await model({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Fast response for chat
      }
    });
    
    return result.text || "No signal received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection Interrupted. Please try again later.";
  }
};
