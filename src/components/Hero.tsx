import OptimizedImage from './OptimizedImage';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center section-padding hero-bg">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Yohan Vergis Vinu
              </h1>
              
              <p className="text-2xl md:text-3xl text-gradient font-semibold mb-4 leading-relaxed">
                Full-Stack ML/AI Engineer
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              MSE CIS @ UPenn | Incoming Fall ’25
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-8">
              Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered.
              </p>

              {/* Social Badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {/* Email Badge */}
                <a 
                  href="mailto:yohanvvinu@gmail.com" 
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                  aria-label="Send email to yohanvvinu@gmail.com"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>

                {/* GitHub Badge */}
                <a 
                  href="https://github.com/YohanV1" 
                  className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="Visit Yohan's GitHub profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* LinkedIn Badge */}
                <a 
                  href="https://www.linkedin.com/in/yohanvinu/" 
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="Visit Yohan's LinkedIn profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* Resume Badge */}
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Resume"
                  aria-label="Download Yohan's resume"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Resume</span>
                </a>
              </div>
            </div>
            
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="photo-container">
                <OptimizedImage 
                  src="/photo.png" 
                  alt="Yohan Vergis Vinu" 
                  width={320}
                  height={320}
                  className="w-80 h-80 rounded-full object-cover shadow-lg relative z-10"
                  priority={true}
                  sizes="(max-width: 768px) 320px, 320px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400 dark:text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
} 