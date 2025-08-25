import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <p className="text-lg text-muted mb-2">Hello,</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Adista</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Software Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              Front-End Developer & UI/UX Designer dengan passion dalam menciptakan 
              pengalaman digital yang memukau dan fungsional
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary futuristic button */}
              <a 
                href="#portfolio" 
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-primary-foreground px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 border border-primary/20 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Explore My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </a>

              {/* Secondary elegant button */}
              <a 
                href="#contact" 
                className="group relative inline-flex items-center gap-3 bg-surface/80 backdrop-blur-md border-2 border-primary/30 text-primary hover:text-primary-foreground px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-primary/90 hover:to-accent/90 hover:border-primary hover:shadow-xl hover:shadow-primary/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Let's Connect</span>
                <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-white transition-colors duration-300 relative z-10"></div>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
                <div className="w-full h-full bg-gradient-to-r from-primary to-accent rounded-full p-1 animate-glow">
                  <div className="w-full h-full bg-surface rounded-full flex items-center justify-center overflow-hidden">
                    {/* Your actual photo */}
                    <img 
                    src="/public/lovable-uploads/adista.png" 
                    alt="Adista Profile Photo"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

      </div>
    </section>
  );
};

export default Hero;