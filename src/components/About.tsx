'use client';

import Image from 'next/image';

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
                <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-900 dark:border-blue-400 rounded-lg p-6 transition-all duration-300 hover:translate-x-1 hover:shadow-lg dark:hover:shadow-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-white p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-300">
                        <Image 
                          src="/upenn.png" 
                          alt="University of Pennsylvania logo" 
                          width={112}
                          height={112}
                          className="w-28 h-28 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Master of Science in Engineering, Computer and Information Science (CIS/MSE)
                      </div>
                      <div className="text-gray-600 dark:text-gray-200">University of Pennsylvania</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">Expected May 2027</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-900 dark:border-blue-400 rounded-lg p-6 transition-all duration-300 hover:translate-x-1 hover:shadow-lg dark:hover:shadow-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-white p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-300">
                        <Image 
                          src="/srm.png" 
                          alt="SRM IST Chennai logo" 
                          width={112}
                          height={112}
                          className="w-28 h-28 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Bachelor of Technology, Computer Science and Engineering (B.Tech CSE)
                      </div>
                      <div className="text-gray-600 dark:text-gray-200">SRM Institute of Science and Technology</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">May 2025</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">Grade: 9.80/10 (US equivalent: 4.0/4.0)</div>
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
        </div>
      </div>
    </section>
  );
} 