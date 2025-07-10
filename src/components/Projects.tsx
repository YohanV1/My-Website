"use client";

import { useState, useEffect, useRef } from 'react';
import ProjectImageCarousel from './ProjectImageCarousel';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderKey, setRenderKey] = useState(0);
  const prevPageRef = useRef(1);
  const projectsPerPage = 6;

  const projects = [
    {
      title: 'Vina: Your World-Class CHRO',
      description: 'Led development of an AI-powered interview analysis system that automates candidate evaluation using multi-agent AI architecture. Built with LangGraph, Django, and PostgreSQL to process audio recordings, extract structured data, and generate comprehensive evaluation reports with data-driven hiring insights.',
      images: ['/project-images/Vina_1.png', '/project-images/Vina_2.png','/project-images/Vina_3.png','/project-images/Vina_4.png'],
      technologies: ['Django', 'LangGraph', 'LangChain', 'PostgreSQL', 'OpenAI (GPT)', 'Google Gemini', 'WhisperX', 'Docker', 'AWS (S3, Cloudfront)', 'Terraform', 'Tailwind CSS'],
      github: '#',
      demo: 'https://moative.com/vina/',
      producthunt: 'https://www.producthunt.com/products/vina-2',
      featured: true,
      company: 'Moative'
    },
    {
      title: 'Leslie: Municipal Permit Automation',
      description: 'Developed AI-powered permit processing system for small municipalities using multi-agent AI for document verification. Implements automated compliance assessment for technical documents including site plans, construction drawings, and regulatory checklists with dual citizen/municipal interfaces.',
      images: ['/project-images/Leslie_1.png', '/project-images/Leslie_2.png','/project-images/Leslie_3.png','/project-images/Leslie_4.png', '/project-images/Leslie_5.png', '/project-images/Leslie_6.png', '/project-images/Leslie_7.png'],
      technologies: ['Django', 'SQLite', 'Google Gemini', 'LangChain', 'Tailwind CSS', 'AWS Lightsail'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative'
    },
    {
      title: 'InvoiceGPT: AI Invoice Management',
      description: 'Developed an AI-powered invoice management platform leveraging GPT-4 Vision for advanced OCR and natural language queries. Enables users to upload invoices, automatically extract and interpret key data, and interact with their records securely using a Streamlit interface. Integrates AWS, Supabase, and Google OAuth for robust storage, security, and privacy.',
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
      company: 'Independent'
    },
    {
      title: 'Billie: Multi-Channel Agentic Utility Services Chatbot',
      description: 'Built intelligent multi-channel customer service chatbot for utility companies using LangGraph. Integrates voice calls, SMS, and web chat with real-time outage management, billing services, and meter data analysis. Handles customer verification and provides 24/7 support.',
      images: ['/project-images/Billie_1.png'],
      technologies: ['Flask', 'LangGraph', 'LangChain', 'OpenAI (Whisper, GPT)', 'LangSmith', 'Bland AI', 'Twilio', 'ElevenLabs', 'SQLite', 'SQLAlchemy', 'Tailwind CSS', 'AWS Lightsail'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative'
    },
    {
      title: 'AI for CEQA: Environmental Impact Assessment',
      description: 'Developed AI system for California Environmental Quality Act compliance using document analysis and recommendation generation. Processes PDF documents with ChromaDB vector database and provides automated impact assessment, mitigation strategies, and document justification for renewable energy projects.',
      images: ['/project-images/CEQA_1.png', '/project-images/CEQA_2.png'],
      technologies: ['Django', 'Google Gemini', 'ChromaDB', 'Sentence Transformers', 'PyPDF2', 'Tailwind CSS', 'Leaflet.js', 'RAG'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative'
    },
    {
      title: 'Company/People Lookup API (Agentic RAG)',
      description: 'Built multi-agent AI system for comprehensive company intelligence gathering using FastAPI and LangChain. Implements web scraping, Google Custom Search integration, and RAG-based NAICS classification to provide detailed company profiles with industry analysis.',
      images: ['/project-images/Lookup_1.png', '/project-images/Lookup_2.png'],
      technologies: ['FastAPI', 'OpenAI (GPT)', 'Llama 3.1', 'LangChain', 'ChromaDB', 'Sentence Transformers', 'BeautifulSoup4', 'aiohttp', 'Google Custom Search API'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Moative'
    },
    {
      title: 'PetTech Computer Vision',
      description: 'Led a team of four to develop a fine-tuned MobileNetV2-SSD model for detecting specific features of cats and dogs across 9 classes (e.g., eyes, ears, mouth) and optimized the model for on-device purposes. Compiled and annotated a custom dataset of over 10,000 images, covering over 50 dog breeds and 15 cat breeds. Achieved a 5-11% improvement in accuracy over existing methods, earning Samsung\'s Certificate of Excellence.',
      images: [],
      technologies: ['TensorFlow 2.8', 'Keras', 'TensorFlow Object Detection API', 'MobileNetV2', 'SSD (Single Shot Detector)', 'OpenCV', 'NumPy', 'Pandas', 'CUDA 11.0', 'Label Studio'],
      github: '#',
      demo: '#',
      featured: true,
      company: 'Samsung R&D'
    },
    {
      title: 'My Website!',
      description: 'Custom-built portfolio using React, Next.js, Tailwind CSS, and Framer Motion, designed to showcase my work. Built from scratch with a focus on performance (95+ Lighthouse), SEO, and accessibility. Includes dark mode, blog, analytics, Open Graph metadata, and a custom 404 page. Deployed via Vercel with CI/CD.',
      images: ['/project-images/Portfolio_1.png'],
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/YohanV1/My-Website',
      demo: '#',
      featured: true,
      company: 'Independent'
    },
    {
      title: 'WinkCode: Eye Blink to Morse Code Translator',
      description: 'WinkCode is a project that translates eye blinks into Morse code and then decodes it into text. This system uses computer vision techniques to detect eye blinks in real-time video, interprets them as Morse code signals, and converts them into readable text.',
      images: ['/project-images/WinkCode_1.png'],
      technologies: ['OpenCV', 'NumPy', 'dlib', 'imutils', 'keyboard'],
      github: 'https://github.com/YohanV1/WinkCode',
      demo: '#',
      featured: true,
      company: 'Independent'
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
              className={`bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg ${
                project.featured ? 'ring-2 ring-gray-300 dark:ring-gray-600' : ''
              } h-full flex flex-col justify-between`}
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
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.company === 'Independent' ? 'Independent Project' : `Built at ${project.company}`}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
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
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.producthunt && (
                        <a
                          href={project.producthunt}
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
    </section>
  );
} 