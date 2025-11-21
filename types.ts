export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface MarketSkill {
  name: string;
  value: number; // Mock "Price"
  change: number; // Mock "Change"
}

export enum SectionType {
  HERO = 'HERO',
  EDGE = 'EDGE',
  EXPERIENCE = 'EXPERIENCE',
  PROJECTS = 'PROJECTS',
  TERMINAL = 'TERMINAL',
  CONTACT = 'CONTACT'
}