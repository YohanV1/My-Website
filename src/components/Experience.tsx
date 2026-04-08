import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: 'Graduate Teaching Assistant - CIS 5210 (Artificial Intelligence)',
      company: 'University of Pennsylvania',
      logo: '/upenn.png',
      period: 'January 2026 - Present',
      description: '• Hold weekly office hours and debug sessions for 250+ students in a graduate AI course covering search, MDPs, and probabilistic reasoning\n• Assist with assignment design and grading across exam cycles',
    },
    {
      title: 'Software Engineer Intern, Applied AI',
      company: 'Moative',
      logo: '/moative.png',
      period: 'August 2024 - June 2025',
      description: '• Eliminated manual recruiter screening across 75+ live interviews by building Vina, an agentic CHRO platform that automated rubric generation, analysis, and candidate ranking (Django, LangGraph, PostgreSQL, AWS)\n• Cut permit issuance time from 3–4 weeks to minutes for Rowlett, TX by building an AI permitting agent that automated document verification and audit trail generation (Django, LangGraph, AWS)\n• Replaced manual call center workflows for 30+ concurrent users by designing a multi-channel utility agent handling outage and billing support across web, voice, and SMS (Flask, PostgreSQL, ElevenLabs, Twilio)\n• Reduced company firmographic lookup to seconds with 95% NAICS classification accuracy by building an async scraping and AI agent pipeline exposed via a REST API (FastAPI, LangChain, Playwright)\n• Shipped 6+ products end-to-end as the sole engineer, from PRDs and prototyping to infra, client demos, and a Product Hunt launch, across agentic HR tools, GovTech automation, and enterprise utility bots',
    },
    {
      title: 'Machine Learning Engineer Intern',
      company: 'Samsung Research, India',
      logo: '/samsung.png',
      period: 'August 2023 - March 2024',
      description: '• Improved multi-class pet detection accuracy by 7% over baseline by fine-tuning and benchmarking ResNet, YOLOv8, and MobileNetV2-SSD across standardized evaluation sets\n• Compiled and annotated a 10K+ image dataset through manual collection, labeling, and augmentation to improve class balance, earning Samsung\'s Certificate of Excellence and a $1,000 award',
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
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:translate-x-1 hover:shadow-lg dark:hover:shadow-blue-500/20 border-l-4 border-l-gray-300 dark:border-l-gray-600 hover:border-l-4 hover:border-l-gray-900 dark:hover:border-l-blue-400">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo && (
                        <div className="flex-shrink-0">
                          <a href={exp.company === 'Moative' ? 'https://www.moative.com/' : exp.company === 'University of Pennsylvania' ? 'https://www.cis.upenn.edu/' : 'https://www.samsungprism.com/'} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                            <div className="bg-white dark:bg-white p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-300">
                              <Image 
                                src={exp.logo} 
                                alt={`${exp.company} logo`} 
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                              />
                            </div>
                          </a>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </p>
                      </div>
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