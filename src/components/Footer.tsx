export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Philadelphia, PA</p>
                <p>📧 yohan@example.com</p>
                <p>📱 +1 (555) 123-4567</p>
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
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
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
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Yohan Vergis Vinu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 