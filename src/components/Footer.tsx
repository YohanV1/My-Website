export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Philadelphia, PA
                </p>
                <a 
                  href="mailto:yohanvvinu@gmail.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  yohanvvinu@gmail.com
                </a>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone Number Coming Soon
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </a>
                <a href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Experience
                </a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
                <a href="#research" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Research
                </a>
                <a href="#extracurricular" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Extracurricular
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Other</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.linkedin.com/in/yohanvinu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/YohanV1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Yohan Vergis Vinu. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Last updated July 2025 • Built with Next.js, React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 