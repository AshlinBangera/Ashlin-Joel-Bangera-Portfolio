import { Experience, Project, MarketSkill, Education, Certification } from './types';

export const RESUME_SUMMARY = `
Ashlin Joel Bangera is a Certified SAFe® 6 Product Owner / Product Manager with over 3 years of experience delivering AI-powered, data-driven solutions across FinTech, Insurance, and Healthcare sectors. He holds an MBA in Finance and is pursuing an MSc in Business Analytics at the University of Galway. He specializes in defining product roadmaps, embedding AI/ML into scalable applications, and transforming data into actionable insights. He is an active stock and derivatives trader.
`;

export const TECH_SPECS = {
  coreProduct: ['SAFe® 6 Agilist', 'Jira / Confluence', 'SAP Signavio', 'Wireframing (Figma)'],
  dataAI: ['Python (Pandas)', 'SQL / Snowflake', 'Power BI / Tableau', 'LLMs / RAG'],
  finTech: ['Bloomberg Concepts', 'Finacle Banking', 'AML / KYC Regs', 'Derivatives'],
  cloudOps: ['AWS Tech Essentials', 'Azure AI Essentials', 'Blue Prism RPA', 'Docker / CI/CD']
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'robosoft',
    role: 'Business Analyst / Product Owner',
    company: 'Robosoft Technologies (Qatar/Remote)',
    period: 'July 2022 - May 2024',
    description: [
      'Led technology strategy & digital transformation for FinTech & mutual fund clients, improving delivery efficiency by 30%.',
      'Architected the Almaha Digital Wallet with Qatar National Bank (QNB), reducing transaction failures by 25% and onboarding time by 30%.',
      'Automated ETL pipelines using Azure Data Factory & Power BI for real-time analytics.',
      'Collaborated with DevOps on CI/CD pipelines, boosting deployment efficiency by 30% with Azure DevOps.',
      'Awarded "Best Analytics Solution of 2023" at Middle East Data & AI Summit.'
    ],
    skills: ['Azure', 'Power BI', 'FinTech', 'Product Management', 'SQL', 'DevOps']
  },
  {
    id: 'jkshim-fund',
    role: 'SMIF Fund Manager',
    company: 'Justice K S Hegde Institute of Management',
    period: 'June 2021 - June 2022',
    description: [
      'Managed a diversified portfolio of Equity Stocks outperforming the benchmark index by 8% in 2021.',
      'Mentored 50+ students on fundamental equity research and stock pitches.',
      'Led investment committee presentations for college funds.'
    ],
    skills: ['Portfolio Mgmt', 'Equity Research', 'Risk Analysis', 'Leadership']
  },
  {
    id: 'premier-investments',
    role: 'Financial Advisor',
    company: 'Premier Investments',
    period: 'Sept 2021 - Nov 2021',
    description: [
      'Conducted extensive research on Banking, Consumer Durables, and FMCG sectors.',
      'Delivered investment recommendations resulting in 10% increase in client satisfaction.',
      'Improved client retention rate by 20% through detailed reporting.'
    ],
    skills: ['Financial Advisory', 'Client Relations', 'Market Research']
  },
  {
    id: 'akshayadhara',
    role: 'Finance Associate',
    company: 'Akshayadhara Credit Cooperative',
    period: 'Jan 2020 - Apr 2021',
    description: [
      'Managed daily credit union operations using Finacle Core Banking.',
      'Ensured compliance with AML, KYC, and regulatory standards.',
      'Gathered requirements to digitize credit workflows for core banking implementation.'
    ],
    skills: ['Banking', 'AML/KYC', 'Finacle', 'Operations']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'agentic-rag',
    title: 'Agentic RAG Chatbot',
    description: 'Built a modular Agentic RAG engine using Ollama and LangChain, integrating data ingestion, vector embeddings, and LLM reasoning.',
    tech: ['GenAI', 'Python', 'LangChain']
  },
  {
    id: 'fresh-dashboard',
    title: 'Amazon Fresh Dashboard',
    description: 'Developed an interactive Power BI dashboard analyzing sales performance and customer satisfaction using dynamic KPI cards.',
    tech: ['Analytics', 'Power BI', 'DAX']
  },
  {
    id: 'autism-prediction',
    title: 'Autism Prediction System',
    description: 'Utilized XGBoost and Scikit-learn to build a prediction pipeline. Performed extensive EDA and hyperparameter tuning to optimize model.',
    tech: ['Machine Learning', 'Python', 'Scikit-learn']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'galway',
    degree: 'MSc Business Analytics',
    school: 'University of Galway',
    period: '2024 - 2025'
  },
  {
    id: 'jkshim',
    degree: 'MBA Finance (Investments)',
    school: 'JKSHIM',
    period: 'Graduated'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { name: 'SAFe® 6 PO/PM', issuer: 'Scaled Agile' },
  { name: 'Azure AI Essentials', issuer: 'Microsoft' },
  { name: 'AWS Tech Essentials', issuer: 'AWS' },
  { name: 'Blue Prism RPA', issuer: 'SS&C' },
  { name: 'Bloomberg Concepts', issuer: 'Bloomberg' },
  { name: 'NISM Mutual Fund', issuer: 'NISM' }
];

export const SKILLS_TICKER: MarketSkill[] = [
  { name: 'PRODUCT STRATEGY', value: 98.4, change: 2.5 },
  { name: 'DERIVATIVES TRADING', value: 112.5, change: 8.2 },
  { name: 'AGENTIC AI', value: 88.7, change: 5.4 },
  { name: 'PYTHON', value: 92.3, change: 4.1 },
  { name: 'RAG ARCHITECTURES', value: 95.1, change: 1.2 },
  { name: 'SQL', value: 90.5, change: 0.8 },
  { name: 'POWER BI', value: 87.2, change: 1.1 },
  { name: 'RISK MGMT', value: 101.2, change: 3.5 },
];