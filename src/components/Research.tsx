"use client";

export default function Research() {
  const research = [
    {
      title: 'Synthetic Data Generation and Neural Ensemble Architectures for Personal Expenditure Forecasting',
      description: 'Final-year undergraduate research project comparing deep learning models for forecasting personal expenditures using a custom synthetic dataset generated via a graph-based LLM workflow. The study evaluated models including Dense Networks, Conv1D, LSTM, and N-BEATS, and introduced a custom neural ensemble method that outperformed all others in predictive accuracy across 15,000 synthetic invoices spanning 37 expense categories.',
      authors: [
        { name: 'Yohan Vergis Vinu', bold: true },
        { name: 'Shaurya Mehrotra', bold: false },
        { name: 'Dr. Alice K', bold: false }
      ],
      conference: 'IEEE INDISCON 2025',
      status: 'Accepted (unable to present, not published)',
      technologies: ['Python', 'TensorFlow', 'Neural Networks', 'Ensemble Learning', 'Synthetic Data Generation', 'Time Series Forecasting', 'Machine Learning'],
      year: 'April 2025',
      type: 'Final Year Project',
      paper: '/project-images/Ensemble Models Paper.pdf'
    }
  ];

  return (
    <section id="research" className="section-padding hero-bg">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Research
          </h2>
        </div>
        
        <div className="space-y-12">
          {research.map((paper, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:translate-x-1 hover:shadow-lg dark:hover:shadow-blue-500/20 border-l-4 border-l-gray-300 dark:border-l-gray-600 hover:border-l-4 hover:border-l-gray-900 dark:hover:border-l-blue-400"
            >
              <div className="p-8">
                {/* Title */}
                {paper.paper ? (
                  <a
                    href={paper.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-200"
                  >
                    <span>{paper.title}</span>
                    <svg 
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 opacity-70 group-hover:opacity-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight mb-4">
                    {paper.title}
                  </h3>
                )}
                
                {/* Authors */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {paper.authors.map((author, index) => (
                      <span key={index}>
                        <span className={author.bold ? 'font-bold text-gray-900 dark:text-white' : 'font-normal'}>
                          {author.name}
                        </span>
                        {index < paper.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
                
                {/* Conference and Status */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    📍 {paper.conference}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    NIT Rourkela
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {paper.year}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="mb-6">
                  <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800">
                    {paper.status}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {paper.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
} 