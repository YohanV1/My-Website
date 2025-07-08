export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="education-card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src="/upenn.png" 
                        alt="University of Pennsylvania logo" 
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Master of Science in Engineering, Computer and Information Science (CIS/MSE)
                      </div>
                      <div className="text-gray-600">University of Pennsylvania</div>
                      <div className="text-sm text-gray-500">Expected May 2027</div>
                    </div>
                  </div>
                </div>
                <div className="education-card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src="/srm.png" 
                        alt="SRM IST Chennai logo" 
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Bachelor of Technology, Computer Science and Engineering (B.Tech CSE)
                      </div>
                      <div className="text-gray-600">SRM Institute of Science and Technology</div>
                      <div className="text-sm text-gray-500">May 2025</div>
                      <div className="text-sm text-gray-500">Grade: 9.80/10 (US equivalent: 4.0/4.0)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* About Me Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Background
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm an incoming Master's student in Computer Science at the University of Pennsylvania's 
                  School of Engineering and Applied Science (Penn Engineering). My experience spans applied AI, 
                  full-stack development, UI/UX design, and product ideation and ownership.
                </p>
                <p>
                  At Moative (an AI startup), I led full-stack development and drove the end-to-end build 
                  and launch of multiple GenAI products, PoCs, and demos. These included AI-enabled GovTech 
                  tools and HR assistants, dashboards, backends, and agentic chat and voice bots for 
                  large-scale utility companies in the U.S. One of the projects I led, Vina, is now live on Product Hunt.
                </p>
                <p>
                  Previously, at Samsung R&D, I worked on a computer vision project in the PetTech domain. 
                  Our team received a Certificate of Excellence and a $1,000 award for our work.
                </p>
                <p>
                  I bring additional leadership experience as a four-time elected class representative 
                  (Best CR award recipient) and as the lead of the Networking Nexus student club, 
                  where I organized and led hands-on IoT workshops for 150+ students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 