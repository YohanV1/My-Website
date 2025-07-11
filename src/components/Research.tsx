"use client";

export default function Research() {
  const research = [
    {
      title: 'Synthetic Data Generation and Neural Ensemble Architectures for Personal Expenditure Forecasting',
      description: 'Final-year research project comparing deep learning models for forecasting personal expenditures using a custom synthetic dataset generated via a graph-based LLM workflow. The study evaluated models including Dense Networks, Conv1D, LSTM, and N-BEATS, and introduced a custom neural ensemble method that outperformed all others in predictive accuracy across 15,000 synthetic invoices spanning 37 expense categories.',
      authors: [
        { name: 'Yohan Vergis Vinu', bold: true },
        { name: 'Shaurya Mehrotra', bold: false },
        { name: 'Dr. Alice K', bold: false }
      ],
      conference: 'IEEE INDISCON 2025',
      status: 'Accepted (unable to present, not published)',
      technologies: ['Python', 'TensorFlow', 'Neural Networks', 'Ensemble Learning', 'Synthetic Data Generation', 'Time Series Forecasting', 'Machine Learning'],
      year: 'April 2025',
      type: 'Final Year Project'
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
        
        <div className="grid grid-cols-1 gap-8">
          {research.map((paper, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:translate-x-1 hover:shadow-lg dark:hover:shadow-blue-500/20 border-l-4 border-l-gray-900 dark:border-l-blue-400"
            >
              <div className="p-8">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight mb-4">
                  {paper.title}
                </h3>
                
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