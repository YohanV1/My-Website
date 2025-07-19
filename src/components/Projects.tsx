"use client";

import { useState, useEffect, useRef } from 'react';
import ProjectImageCarousel from './ProjectImageCarousel';

// Project interface to replace 'any' types
interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  demo: string;
  producthunt?: string;
  featured: boolean;
  company: string;
  date: string;
}

// Helper function to format description text with proper line breaks and structure
const formatDescription = (description: string) => {
  // Split by double line breaks to separate paragraphs
  const paragraphs = description.split('\n\n').filter(p => p.trim());
  
  return paragraphs.map((paragraph, index) => {
    const trimmed = paragraph.trim();
    
    // Check if it's a bullet point list (starts with dash or bullet)
    if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
      const items = trimmed.split('\n').filter(item => item.trim());
      return (
        <ul key={index} className="list-disc list-inside space-y-1 mb-4">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.replace(/^[-•]\s*/, '')}
            </li>
          ))}
        </ul>
      );
    }
    
    // Regular paragraph
    return (
      <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
};

// Project Modal Component
const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 rounded-t-xl z-10">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {project.company === 'Independent' ? 'Independent Project' : `Built at ${project.company}`}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                {project.date}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Project Images */}
          <div className="mb-6">
            <ProjectImageCarousel 
              images={project.images} 
              projectTitle={project.title} 
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Project Overview
            </h3>
            <div className="text-base">
              {formatDescription(project.description)}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github !== '#' || project.demo !== '#' || project.producthunt) && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Project Links
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.producthunt && (
                  <a
                    href={project.producthunt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    Product Hunt
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ReadMore component that opens modal instead of expanding text
const ReadMore = ({ 
  text, 
  maxLength = 200, 
  project, 
  onOpenModal 
}: { 
  text: string; 
  maxLength?: number; 
  project: Project; 
  onOpenModal: (project: Project) => void; 
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(text.length > maxLength);
  }, [text, maxLength]);

  const displayText = text.slice(0, maxLength) + '...';

  if (!showButton) {
    return <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>;
  }

  return (
    <div className="space-y-3">
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {displayText}
      </p>
      <button
        onClick={() => onOpenModal(project)}
        className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 group"
      >
        <span>View Details</span>
        <svg 
          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderKey, setRenderKey] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevPageRef = useRef(1);
  const projectsPerPage = 6;

  const projects: Project[] = [
    {
      title: 'Vina: Your World-Class CHRO',
      description: 'Led development of Vina, an intelligent interview analysis system that automates candidate evaluation using a multi-agent AI architecture. Built with Django, PostgreSQL, and LangGraph, it processes interview audio or transcripts to assess candidate responses across multiple traits.\n\nSpecialized agents handle diarization, data extraction, scoring, question generation, and comparative analysis using OpenAI and Gemini SDK. Supports multi-modal input (audio, text), and generates detailed performance reports with weighted scores and fit analysis.\n\nKey features include:\n\n- Multi-tenant support with secure data isolation\n- REST APIs for seamless integration\n- Encrypted API key storage and management\n- Real-time performance metrics and analytics\n- Comprehensive audit trails and logging\n\nDeployed on AWS (ECS + Lightsail) with Docker, Nginx, and Gunicorn, the system implements parallel workflow execution, rate limiting, real-time metrics, and robust error handling. Built with a modular, test-covered architecture and CI/CD via ruff linting, pre-commit hooks and staging/production pipelines.',
      images: ['/project-images/Vina_1.png', '/project-images/Vina_2.png','/project-images/Vina_3.png','/project-images/Vina_4.png'],
      technologies: ['Django', 'LangGraph', 'LangChain', 'PostgreSQL', 'OpenAI (GPT)', 'Google Gemini', 'WhisperX', 'Docker', 'AWS', 'Terraform', 'Tailwind CSS'],
      github: '#',
      demo: 'https://moative.com/vina/',
      producthunt: 'https://www.producthunt.com/products/vina-2',
      featured: true,
      company: 'Moative',
      date: 'November 2024 - February 2025'
    },
    {
      title: 'Leslie: Municipal Permit Automation',
      description: 'Built a proof-of-concept system that automates municipal permit workflows using AI-driven document verification and regulatory compliance analysis. Focused on residential swimming pool permits for the City of Rowlett, TX, the platform streamlines the lifecycle from application submission to final approval.\n\nDeveloped with Django, it integrates the Gemini SDK to analyze site plans, engineering drawings, and supporting documents across numerous document-specific regulatory checkpoints. The system features a multi-step citizen form, real-time AI feedback for city officials, and persistent chat sessions for contextual understanding.\n\nCore system features:\n\n- AI-powered document analysis and verification\n- Multi-step citizen application forms with validation\n- Real-time feedback system for city officials\n- Persistent chat sessions for contextual understanding\n- Regulatory compliance checking across multiple checkpoints\n- Audit trail logging and transparency\n\nThe frontend uses Tailwind CSS and vanilla JS, with responsive validation and audit trail logging. Follows enterprise practices: Ruff linting, UV package management, modular architecture, and pre-commit CI hooks.\n\nDesigned for extensibility across permit types and municipalities with PostgreSQL-ready infrastructure and structured logging.',
      images: ['/project-images/Leslie_1.png', '/project-images/Leslie_2.png','/project-images/Leslie_3.png','/project-images/Leslie_4.png', '/project-images/Leslie_5.png', '/project-images/Leslie_6.png', '/project-images/Leslie_7.png'],
      technologies: ['Django', 'SQLite', 'Google Gemini', 'LangChain', 'Tailwind CSS', 'AWS Lightsail'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative',
      date: 'February 2025 - March 2025'
    },
    {
      title: 'InvoiceGPT: AI Invoice Management',
      description: 'Built an end-to-end intelligent invoice processing system that uses the OpenAI SDK to extract and interpret financial data from scanned or digital invoices of any format.\n\nDeveloped with Streamlit, the application delivers a clean and intuitive UI for uploading documents, viewing extracted data, querying insights, and visualizing financial trends. A key highlight is its natural language query system, allowing users to ask questions like "How much did I spend on food last month?" and receive instant answers powered by an SQL agent.\n\nCore features:\n\n- OCR with GPT-4 Vision and GPT-4o-mini for structured invoice parsing\n- Conversational analytics via LangChain-powered AI chatbot interface\n- Intelligent item categorization and auto-splitting for line items\n- Secure cloud storage using AWS S3 and encrypted RDS (MySQL) for user data\n- Google OAuth authentication and strong user-level data isolation\n- Interactive dashboard for exploring spend breakdowns and trends',
      images: [
        '/project-images/InvoiceGPT_1.png',
        '/project-images/InvoiceGPT_2.png',
        '/project-images/InvoiceGPT_3.png',
        '/project-images/InvoiceGPT_4.png',
        '/project-images/InvoiceGPT_5.png',
      ],
      technologies: [
        'Streamlit',
        'OpenAI (GPT, Vision)',
        'LangChain',
        'Groq',
        'Transformers',
        'AWS (S3, RDS)',
        'Supabase',
        'SQLAlchemy',
        'Pandas',
        'PyPDF2',
        'Pytesseract',
        'Google OAuth',
        'PyJWT',
        'Plotly',
      ],
      github: 'https://github.com/YohanV1/InvoiceGPT',
      demo: '#',
      featured: true,
      company: 'Independent',
      date: 'August 2024 - November 2024'
    },
    {
      title: 'Billie: Multi-Channel Agentic Utility Services Chatbot',
      description: 'Designed and built an intelligent multi-channel customer service chatbot, capable of handling utility outages, billing inquiries, meter readings, and account management across web, voice, and SMS.\n\nPowered by LangGraph, Billie features a modular Flask backend with SQLAlchemy ORM, SQLite memory persistence, and seamless Twilio and Bland AI integration for voice and SMS. The conversational agent uses LangGraph checkpointing for session memory, and ElevenLabs text-to-speech for realistic voice responses and OpenAI Whisper for speech-to-text (web chat voice mode/voice call).\n\nThe system includes:\n\n- Real-time outage reporting, reference number generation, and status checks\n- Billing and usage analysis, account verification, and secure phone-based authentication\n- Voice mode with live speech-to-text and LLM generated natural responses\n- Admin dashboard with CRUD access to customers, billing, and outages\n\nThe frontend is built with Tailwind CSS, responsive across devices, and includes dark mode support. Billie follows best practices: Ruff linting, pre-commit hooks, uv for dependency management, and Gunicorn-based deployment with production config separation.',
      images: ['/project-images/Billie_1.png'],
      technologies: ['Flask', 'LangGraph', 'LangChain', 'OpenAI (Whisper, GPT)', 'LangSmith', 'Bland AI', 'Twilio', 'ElevenLabs', 'SQLite', 'SQLAlchemy', 'Tailwind CSS', 'AWS Lightsail'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative',
      date: 'April 2025 - June 2025'
    },
    {
      title: 'Company Lookup API (Agentic RAG)',
      description: 'Built a robust FastAPI-based web service that delivers real-time company intelligence through AI-driven data aggregation, semantic analysis, and industry classification.\n\nThe platform exposes two endpoints:\n\n- Full Lookup: Gathers social presence, contact data, web footprint, and generates business insights\n- Primary Lookup: Returns streamlined core metadata for lightweight use cases\n\nIt uses a custom Retrieval-Augmented Generation (RAG) pipeline with ChromaDB and OpenAI embeddings to classify companies by NAICS code with over 95% accuracy. The system supports multi-agent orchestration for document parsing and enrichment, with powerful scraping capabilities using CloudScraper to bypass anti-bot protections.\n\nKey technical features:\n\n- Fully async architecture with batch processing, connection pooling, and timeout config\n- Structured data validation with Pydantic and modular tool interfaces\n- Intelligent input truncation and response shaping for token efficiency\n- Resilient retry strategies with exponential backoff for scraping and external API requests\n- Real-time semantic search and embedding-based matching across company profiles\n\nBuilt with FastAPI, LangChain, Llama 3.1, and uvicorn, the project demonstrates scalable backend design, advanced AI tooling, and enterprise-grade observability, making it a valuable tool for market research, sales prospecting, and corporate due diligence.',
      images: ['/project-images/Lookup_1.png', '/project-images/Lookup_2.png'],
      technologies: ['FastAPI', 'OpenAI (GPT)', 'Llama 3.1', 'LangChain', 'ChromaDB', 'Sentence Transformers', 'BeautifulSoup', 'aiohttp', 'Google Custom Search API'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative',
      date: 'August 2024 - October 2024'
    },
    {
      title: 'DL-Based Pet Face Action Recognition Engine',
      description: 'Developed a fine-tuned MobileNetV2-SSD model for detecting specific features of cats and dogs across 9 classes (e.g., eyes, ears, mouth) optimized for on-device deployment. Compiled and annotated a custom dataset of over 10,000 images covering 50+ dog breeds and 15 cat breeds.\n\nTechnical achievements:\n\n- Fine-tuned MobileNetV2-SSD architecture for mobile deployment\n- Custom dataset compilation with 10,000+ annotated images\n- Coverage of 50+ dog breeds and 15 cat breeds\n- 9-class feature detection system (eyes, ears, mouth, etc.)\n- Advanced model optimization techniques\n- Custom data augmentation strategies\n\nPerformance improvements:\n\n- 5-11% accuracy improvement over existing methods\n- Optimized for on-device deployment\n- Real-time processing capabilities\n- Efficient memory usage for mobile applications',
      images: ['/project-images/Samsung_1.png'],
      technologies: ['TensorFlow', 'Keras', 'TensorFlow Object Detection API', 'MobileNetV2', 'SSD (Single Shot Detector)', 'OpenCV', 'NumPy', 'Pandas', 'CUDA', 'Label Studio'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Samsung R&D',
      date: 'August 2023 - March 2024'
    },
    {
      title: 'AI for CEQA: Environmental Impact Assessment',
      description: 'Developed a multi-stage AI system for CEQA (The California Environmental Quality Act) compliance that uses Gemini, and a RAG powered by ChromaDB and sentence transformers to generate real-time environmental assessments from project documents. Users draw site boundaries on a Leaflet.js interface to receive impact reports with mitigation strategies.\n\nSystem features:\n\n- Multi-stage AI processing pipeline for document analysis\n- RAG-powered knowledge base using ChromaDB and sentence transformers\n- Interactive Leaflet.js interface for site boundary drawing\n- Real-time environmental impact assessment generation\n- Automated mitigation strategy recommendations\n- Document parsing and analysis using PyPDF2\n\nTechnical implementation:\n\n- Modular Django backend with clean architecture\n- Pre-commit checks and Ruff linting for code quality\n- Full type coverage for maintainability\n- Average response time of ~6 seconds\n- Designed for solar/wind/battery energy projects\n\nThis project demonstrates AI integration in environmental compliance, interactive geospatial interfaces, and production-ready web applications for regulatory assessment.',
      images: ['/project-images/CEQA_1.png', '/project-images/CEQA_2.png'],
      technologies: ['Django', 'Google Gemini', 'ChromaDB', 'Sentence Transformers', 'PyPDF2', 'Tailwind CSS', 'Leaflet.js', 'RAG'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative',
      date: 'June 2025'
    },
    {
      title: 'WinkCode: Eye Blink to Morse Code Translator',
      description: 'Developed a real-time computer vision system that translates eye blinks into Morse code using facial landmark tracking. Leverages OpenCV and dlib to monitor 68 facial landmarks and compute eye aspect ratios to distinguish between short blinks (dots) and long blinks (dashes).\n\nTechnical implementation:\n\n- Real-time facial landmark detection using dlib\n- 68-point facial landmark tracking system\n- Eye aspect ratio calculation for blink detection\n- Timing algorithm for Morse code interpretation\n- Character break and word boundary detection\n- Termination signal recognition\n\nSystem features:\n\n- Real-time visual feedback and monitoring\n- Keyboard automation for text output\n- Levenshtein-based accuracy evaluation\n- Modular Python pipeline architecture\n- Support for accessibility and HCI applications\n- Alternative input method for communication',
      images: ['/project-images/WinkCode_1.png'],
      technologies: ['OpenCV', 'NumPy', 'dlib', 'imutils', 'keyboard'],
      github: 'https://github.com/YohanV1/WinkCode',
      demo: '#',
      featured: true,
      company: 'Independent',
      date: 'July 2024'
    },
    {
      title: 'My Website!',
      description: 'Custom-built portfolio using React, Next.js, and Tailwind CSS, designed to showcase my work. Built from scratch with a focus on performance, SEO, and accessibility.\n\nPerformance and optimization:\n\n- 95+ Lighthouse performance score\n- Optimized images and lazy loading\n- SEO-friendly structure and metadata\n- Accessibility compliance (WCAG guidelines)\n- Fast loading times and smooth animations\n\nKey features:\n\n- Dark mode toggle with persistent preferences\n- Umami Analytics integration\n- Open Graph metadata for social sharing\n- Custom 404 page with navigation\n- Responsive design across all devices\n- Contact form with SendGrid integration\n\nTechnical implementation:\n\n- Next.js 14 with App Router\n- TypeScript for type safety\n- Tailwind CSS for styling\n- ESLint and PostCSS for code quality\n- Vercel deployment with CI/CD\n- Custom components and animations',
      images: ['/project-images/Portfolio_2.png'],
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'ESLint', 'PostCSS', 'SendGrid', 'Vercel'],
      github: 'https://github.com/YohanV1/My-Website',
      demo: '#',
      featured: true,
      company: 'Independent',
      date: 'June 2025 - Present'
    },
  ];

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Generate page numbers for navigation
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Handle page change (just set page)
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setRenderKey(prev => prev + 1);
  };

  // Handle modal open
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Scroll to top of section after page changes (but not on initial mount)
  useEffect(() => {
    // Only scroll if the page actually changed (not on initial mount)
    if (prevPageRef.current !== currentPage) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
      prevPageRef.current = currentPage;
    }
  }, [currentPage]);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={`${currentPage}-${index}`}
              className={`bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-500 ease-out hover:translate-y-[-8px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-blue-500/20 ${
                project.featured ? 'ring-2 ring-gray-300 dark:ring-gray-600' : ''
              } h-full flex flex-col justify-between transform hover:scale-[1.02]`}
            >
              <ProjectImageCarousel 
                key={`${currentPage}-${index}-carousel-${renderKey}`}
                images={project.images} 
                projectTitle={project.title} 
              />
              <div className="p-6 flex flex-col flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.company === 'Independent' ? 'Independent Project' : `Built at ${project.company}`}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-4 italic">
                    {project.date}
                  </p>
                  <div className="mb-4">
                    <ReadMore 
                      text={project.description} 
                      maxLength={180} 
                      project={project}
                      onOpenModal={handleOpenModal}
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.github !== '#' || project.demo !== '#' || project.producthunt) ? (
                    <div className="flex gap-3">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.producthunt && (
                        <a
                          href={project.producthunt}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          Product Hunt →
                        </a>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      Proprietary – no public demo
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More on GitHub Section - Only show on last page */}
        {currentPage === totalPages && (
          <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <a
              href="https://github.com/YohanV1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View More on GitHub
            </a>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>
            
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
} 