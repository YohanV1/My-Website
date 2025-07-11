'use client';
import { useState } from 'react';

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
                      <p className="text-sm text-gray-600 dark:text-gray-300">SRM IST Chennai</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2021 - May 2025 · 3 yrs 9 mos</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        For 4 years, I had the privilege of serving my classmates and contributing to a dynamic and inclusive learning environment. As the elected leader, I had embraced the responsibility of representing the collective voice of my peers and advocating for their needs and concerns.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Recipient of the best Class Representative award.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">IoT Lead & Founding Member</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Networking Nexus</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2023 - Dec 2024 · 1 yr 5 mos</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        IoT Lead & Founding Member of NetNex SRM, an officially recognized technical club bridging academic-industry gaps through multi-disciplinary projects.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Served as a keynote speaker for a comprehensive two-day IoT workshop, mentoring 150+ students on embedded systems hardware and software fundamentals.
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
                      <h4 className="font-semibold text-gray-900 dark:text-white">IEEE SRMIST Student Branch</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">R&D & Computer Society Member</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2023 - Jun 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">The Institution of Engineers (India) [IEI]</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Member</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2023 - Present</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Aaruush, SRMIST</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Initiatives Committee Member</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Apr 2022 - Apr 2023</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Part of Initiatives, an Aaruush committee, that carries out CSR activities, social campaigns and flagship events.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">IoT Developer & Member</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Think-Digital, SRM · Part-time</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Nov 2022 - Dec 2023 · 1 yr 2 mos</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Worked with microcontrollers and embedded systems to create inexpensive automatic irrigation systems, home automation systems, and smart dustbins for on-campus purposes.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Facilitated training workshops on embedded systems fundamentals for incoming team members.
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