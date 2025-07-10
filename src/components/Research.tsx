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
      year: '2025',
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
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight mb-3 italic">
                  {paper.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {paper.authors.map((author, index) => (
                      <span key={index}>
                        <span className={author.bold ? 'font-bold' : 'font-normal'}>
                          {author.name}
                        </span>
                        {index < paper.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  📍 {paper.conference} | NIT Rourkela | {paper.status} | {paper.year}
                </p>
                
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