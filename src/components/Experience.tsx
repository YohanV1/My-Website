export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer & AI Engineer',
      company: 'Moative',
      logo: '/moative.png',
      period: '2023 - Present',
      description: 'Led full-stack development and drove end-to-end build and launch of multiple GenAI products, PoCs, and demos. Developed AI-enabled GovTech tools, HR assistants, dashboards, backends, and agentic chat and voice bots for large-scale utility companies in the U.S. One project, Vina, is now live on Product Hunt.',
      technologies: ['React', 'Node.js', 'Python', 'OpenAI API', 'LangChain', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Computer Vision Engineer',
      company: 'Samsung R&D Institute India',
      logo: '/samsung.png',
      period: '2022 - 2023',
      description: 'Worked on computer vision project in the PetTech domain. Our team received a Certificate of Excellence and a $1,000 award for innovative work in pet technology applications.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Machine Learning']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="section-divider mx-auto w-24"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-lg p-6 shadow-sm max-w-4xl bg-white transition-all duration-300 ${index % 2 === 0 ? 'text-left experience-card-left' : 'text-right experience-card-right'}`}>
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {exp.logo && (
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`text-sm text-gray-500 mb-4 bg-gray-100 px-3 py-1 rounded-full inline-block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {exp.period}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 