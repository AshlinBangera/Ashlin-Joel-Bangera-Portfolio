import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY, EXPERIENCE_DATA, PROJECTS_DATA } from '../constants';

// Fix: Declare process to avoid TS error when accessing process.env
declare const process: any;

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

// Fix: Use process.env.API_KEY as per guidelines and remove import.meta.env usage
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (userMessage: string): Promise<string> => {
  try {
    // Fix: Call ai.models.generateContent directly
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Fast response for chat
      }
    });
    
    return response.text || "No signal received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection Interrupted. Please try again later.";
  }
};