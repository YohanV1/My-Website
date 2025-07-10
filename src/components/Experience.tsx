export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack ML/AI Engineer',
      company: 'Moative',
      logo: '/moative.png',
      period: '2023 - Present',
      description: '• Led full-stack development and drove end-to-end build and launch of multiple GenAI products, PoCs, and demos\n• Developed AI-enabled GovTech tools, HR assistants, dashboards, backends, and agentic chat and voice bots for large-scale utility companies in the U.S\n• One project, Vina, is now live on Product Hunt',
      technologies: ['React', 'Node.js', 'Python', 'OpenAI API', 'LangChain', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Computer Vision Engineer',
      company: 'Samsung R&D Institute India',
      logo: '/samsung.png',
      period: '2022 - 2023',
      description: '• Led a team of four to develop a fine-tuned MobileNetV2-SSD model for detecting specific features of cats and dogs across 9 classes (e.g., eyes, ears, mouth) and optimized the model for on-device purposes\n• Compiled and annotated a custom dataset of over 10,000 images, covering over 50 dog breeds and 15 cat breeds\n• Achieved a 5-11% improvement in accuracy over existing methods, earning Samsung\'s Certificate of Excellence',
      technologies: ['TensorFlow 2.8', 'Keras', 'TensorFlow Object Detection API', 'MobileNetV2', 'SSD (Single Shot Detector)', 'OpenCV', 'NumPy', 'Pandas', 'CUDA 11.0', 'Label Studio'],
      reference: {
        text: "Featured in SRM IST's Newsletter",
        url: 'https://webstor.srmist.edu.in/web_assets/downloads/2025/smart-sprinklers-volu4-issue1.pdf#page=14'
      }
    }
  ];

  return (
    <section id="experience" className="section-padding hero-bg">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="w-full">
                <div className="rounded-lg p-6 shadow-sm w-full bg-white dark:bg-gray-900 transition-all duration-300 border-l-4 border-gray-900 dark:border-blue-400 hover:translate-x-1 hover:shadow-lg dark:hover:shadow-blue-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    {exp.logo && (
                      <div className="flex-shrink-0">
                        <div className="bg-white dark:bg-white p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-300">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </div>
                  
                  <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description.split('\n').map((line, index) => (
                      <p key={index} className="mb-2">
                        {line}
                      </p>
                    ))}
                  </div>
                  
                  {exp.reference && (
                    <div className="mb-4">
                      <a
                        href={exp.reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                        {exp.reference.text}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
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