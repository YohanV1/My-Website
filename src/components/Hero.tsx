export default function Hero() {
  return (
    <section className="pt-24 pb-16 section-padding hero-bg">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Yohan Vergis Vinu
              </h1>
              
              <p className="text-2xl md:text-3xl text-gradient font-semibold mb-4 leading-relaxed">
                AI/ML Engineer
              </p>
              <p className="text-xl text-gray-500 mb-6">
                Applied AI • Full-Stack Development
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Specializing in applied AI and agentic systems 
                with expertise in full-stack development and user-centric design 
              </p>
            </div>
            
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="photo-container">
                <img 
                  src="/photo.png" 
                  alt="Yohan Vergis Vinu" 
                  className="w-80 h-80 rounded-full object-cover shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 