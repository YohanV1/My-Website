export default function Projects() {
  const projects = [
    {
      title: 'Vina - AI Assistant',
      description: 'Led development of an AI-powered assistant now live on Product Hunt. Built with modern AI technologies and deployed for large-scale utility companies.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'OpenAI API', 'LangChain', 'AWS'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'GovTech AI Tools',
      description: 'Developed AI-enabled government technology tools and HR assistants for large-scale utility companies in the U.S. Implemented agentic chat and voice bots.',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'PetTech Computer Vision',
      description: 'Worked on computer vision project in the PetTech domain at Samsung R&D. Team received Certificate of Excellence and $1,000 award for innovative work.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Machine Learning'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'IoT Workshop Platform',
      description: 'Led development of IoT workshop platform for Networking Nexus student club. Organized and conducted hands-on workshops for 150+ students.',
      technologies: ['IoT', 'Arduino', 'Raspberry Pi', 'Workshop Management', 'Technical Training'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'AI Dashboard System',
      description: 'Built comprehensive dashboard system for AI product monitoring and analytics. Integrated multiple AI models and real-time data visualization.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Voice Bot Platform',
      description: 'Developed agentic voice bot platform for customer service automation. Integrated with multiple AI APIs and voice processing technologies.',
      technologies: ['Python', 'Speech Recognition', 'OpenAI API', 'WebRTC', 'AWS'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="section-divider mx-auto w-24"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card rounded-lg overflow-hidden ${
                project.featured ? 'ring-2 ring-gray-300' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-gray-400 text-sm z-10">Project Image</div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-300 opacity-20"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 