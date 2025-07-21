'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Extracurricular() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section id="extracurricular" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Extracurricular
          </h2>
          
          <div className="space-y-4">
            {/* Innovation School Fellow Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('innovation')}
                className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Innovation School Fellow, Maker&apos;s Asylum</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                    expandedSections.innovation ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.innovation && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column - Description */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white dark:bg-white p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-300">
                            <Image 
                              src="/makersimg.png" 
                              alt="Maker&apos;s Asylum logo" 
                              width={80}
                              height={80}
                              className="w-20 h-20 object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400">June 2022 – June 2023</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                            Building a maker mindset through hands-on exploration of engineering, hardware design, and STEAM skills.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Topics Explored</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {['Virtual Reality', 'Internet of Things', 'Electronics & Robotics', 'CAD for 3D Printing', 'Drones', 'Soldering & PCB'].map((topic) => (
                            <div key={topic} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Project */}
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Food-Carrying Juggernaut</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          The Food-Carrying Juggernaut is a working prototype of a vehicle that incorporates design elements inspired by the A6 Juggernaut from Star Wars. It features a specialized container for food transportation, making it an innovative solution for delivering food supplies in unique and challenging environments.
                        </p>
                        <div className="space-y-2">
                          <a 
                            href="https://makersasylum.com/project/food-carrying-juggernaut/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            <span>🔗</span>
                            <span>Project Documentation</span>
                          </a>
                          <a 
                            href="https://github.com/YohanV1/Food-Carrying-Juggernaut" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            <span>🔗</span>
                            <span>GitHub Repository</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Leadership Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('leadership')}
                className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Leadership</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                    expandedSections.leadership ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.leadership && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Class Representative</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">SRMIST</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">September 2021 - May 2025</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      • For 4 years, I had the privilege of serving my classmates and contributing to a dynamic and inclusive learning environment. As the elected leader, I had embraced the responsibility of representing the collective voice of my peers and advocating for their needs and concerns.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">• Recipient of the best Class Representative award.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">IoT Lead & Founding Member</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Networking Nexus</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">August 2023 - December 2024</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      • IoT Lead & Founding Member of NetNex SRM, an officially recognized technical club bridging academic-industry gaps through multi-disciplinary projects.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      • Served as a keynote speaker for a comprehensive two-day IoT workshop, mentoring 150+ students on embedded systems hardware and software fundamentals.
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Campus Involvement Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('campus')}
                className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Campus Involvement</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                    expandedSections.campus ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.campus && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                  <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">The Institution of Engineers (India) [IEI]</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Member</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">August 2023 - June 2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">IEEE SRMIST Student Branch</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">R&D & Computer Society Member</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">March 2023 - June 2024</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">IoT Developer & Member</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Think-Digital, SRMIST</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">November 2022 - December 2023</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      • Worked with microcontrollers and embedded systems to create inexpensive automatic irrigation systems, home automation systems, and smart dustbins for on-campus purposes.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      • Facilitated training workshops on embedded systems fundamentals for incoming team members.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Aaruush, SRMIST</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Initiatives Committee Member</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">April 2022 - April 2023</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      • Part of Initiatives, an Aaruush committee, that carries out CSR activities, social campaigns and flagship events.
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 