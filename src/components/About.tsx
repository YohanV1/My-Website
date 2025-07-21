'use client';

import Image from 'next/image';

// Tech stack data structure for easy editing
const techStackData = {
  programmingLanguages: {
    title: 'Programming Languages',
    technologies: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++']
  },
  frontend: {
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
  },
  backendDataEngineering: {
    title: 'Backend & Data Engineering',
    subdivisions: {
      'Frameworks': ['Django', 'Flask', 'FastAPI'],
      'Databases & ORMs': ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'ChromaDB', 'Pinecone'],
      'Utilities': ['Celery', 'BeautifulSoup', 'aiohttp', 'PyJWT', 'Postman', 'Django Logging', 'Django Axes']
    }
  },
  devOpsCloud: {
    title: 'DevOps & Cloud',
    subdivisions: {
      'Cloud Platforms': ['AWS (S3, CloudFront, Lightsail, RDS)', 'GCP', 'Azure', 'Supabase'],
      'Infrastructure & CI/CD': ['Docker', 'Terraform', 'Git', 'GitHub', 'GitHub Actions', 'Vercel'],
      'Auth & APIs': ['Google OAuth', 'Twilio', 'SendGrid']
    }
  },
  aiMlDataScience: {
    title: 'AI/ML & Data Science',
    subdivisions: {
      'Frameworks & Libraries': ['TensorFlow', 'PyTorch', 'scikit-learn','Transformers', 'OpenCV', 'Keras', 'NumPy', 'Pandas/Polars', 'Streamlit'],
      'Agent/LLM Frameworks': ['LangGraph', 'LangChain', 'LangSmith'],
      'Tools': ['Jupyter', 'Label Studio', 'PyPDF2', 'Pytesseract', 'CUDA']
    }
  }
};


export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600">
                  <div className="">
                    <div className="flex-1">
                      <div className="relative">
                        <a href="https://www.cis.upenn.edu/graduate/program-offerings/mse-in-cis/" target="_blank" rel="noopener noreferrer" className="block float-right ml-6 mb-2 w-24 h-24 sm:w-32 sm:h-32">
                          <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 w-full h-full flex items-center justify-center">
                            <Image 
                              src="/upenn.png" 
                              alt="University of Pennsylvania logo" 
                              width={128}
                              height={128}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        </a>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Master of Science in Engineering, Computer and Information Science (CIS/MSE)
                        </div>
                        <div className="text-gray-700 dark:text-gray-200 font-medium mb-1">University of Pennsylvania</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Expected May 2027</div>
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Notable Coursework</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Machine Learning, Software Systems, Internet and Web Systems
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600">
                  <div className="">
                    <div className="flex-1">
                      <div className="relative">
                        <a href="https://www.srmist.edu.in/program/b-tech-computer-science-and-engineering/" target="_blank" rel="noopener noreferrer" className="block float-right ml-6 mb-2 w-24 h-24 sm:w-32 sm:h-32">
                          <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 w-full h-full flex items-center justify-center">
                            <Image 
                              src="/srm.png" 
                              alt="SRM IST Chennai logo" 
                              width={128}
                              height={128}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        </a>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Bachelor of Technology, Computer Science and Engineering (B.Tech CSE)
                        </div>
                        <div className="text-gray-700 dark:text-gray-200 font-medium mb-1">SRM Institute of Science and Technology</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">August 2021 - May 2025</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Grade: 9.80/10 (US equivalent: 4.0/4.0)</div>
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Notable Coursework</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Intro to ML, Digital Image Processing, Data Mining and Analytics, AI, Database Management Systems
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Me Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Background
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m an incoming Master&apos;s student in Computer Science at the University of Pennsylvania&apos;s School of Engineering and Applied Science (Penn Engineering). My experience spans applied AI, full-stack development, UI/UX design, and product ideation and ownership.
                </p>
                <p>
                  At Moative (an AI startup), I led full-stack development and drove the end-to-end build and launch of multiple GenAI products, PoCs, and demos, including AI-enabled GovTech tools, HR assistants, dashboards, backend systems, and agentic chat/voice bots for large U.S. utility companies. One of the projects I led, Vina, is now live on Product Hunt.
                </p>
                <p>
                  Previously, at Samsung R&amp;D, I spearheaded a computer vision research project in the PetTech domain. Our team received a Certificate of Excellence and a $1,000 award for our work.
                </p>
                <p>
                  During my undergraduate degree, I was a four-time elected class representative (Best CR award recipient) and led the Networking Nexus student club, organizing and serving as the keynote speaker for hands-on IoT workshops attended by 150+ students.
                </p>
                <p>
                  My primary interests lie in applied AI, particularly agentic and multimodal systems that are refined through thoughtful, user-centric UI/UX design.
                </p>
              </div>
            </div>
          </div>
          {/* Tech Stack and Testimonial */}
<div className="mt-16">
  {/* Tech Stack */}
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
      Tech Stack
    </h3>
    <div className="columns-1 lg:columns-2 gap-8 space-y-8">
      {Object.entries(techStackData).map(([key, category]) => (
        <div key={key} className="break-inside-avoid mb-8">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category.title}</h4>
            <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
          </div>
          {'technologies' in category ? (
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech: string) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md cursor-pointer">
                  {tech}
                </span>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {Object.entries(category.subdivisions).map(([subKey, subTechnologies]) => (
                <div key={subKey} className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{subKey}</div>
                  <div className="flex flex-wrap gap-2">
                    {subTechnologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md cursor-pointer">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Testimonial */}
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
      Backed by Founders
    </h3>
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="relative">
        {/* Quote Icon */}
        <div className="absolute -top-2 -left-2">
          <svg className="w-8 h-8 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6">
          <p>
            Yohan interned with Moative for close to a year. He was there from Day 1 and he over-delivered.
            He was a true &apos;Day 1&apos; engineer, who is totally at home with partial information, frequently changing/conflicting directions, and the newness of everything he had to do.
          </p>
          <p>
            In this context, he consistently delivered perfect outcomes with little supervision in traditional sense.
            Yohan has an eye for product design, UX, and user-centric workflows.
          </p>
          <p>
            Yohan is deft at handling conversations up and down the chart and is a great communicator as well.
            I keenly look forward to how his career shapes up. If you are a hiring manager, go ahead with confidence.
          </p>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
                <span className="font-medium text-gray-900 dark:text-white">Ashwin Ramasamy</span>
                <span className="hidden sm:inline text-gray-400">·</span>
                <span className="text-gray-600 dark:text-gray-300">CEO & Co-Founder</span>
              </div>
            </div>
            <span className="hidden sm:inline text-gray-400">·</span>
            <div className="flex justify-center sm:flex sm:items-center gap-2 mt-2 sm:mt-0">
              <a href="https://www.moative.com" className="hover:opacity-80 transition-opacity">
                <div className="bg-white p-2 rounded-lg">
                  <Image 
                    src="/moative.png" 
                    alt="Moative logo" 
                    width={100}
                    height={100}
                    className="w-15 h-15 object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:flex sm:justify-end">
            <a href="https://linkedin.com/in/ashwinramasamy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Read on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
} 