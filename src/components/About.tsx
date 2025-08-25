
import { Code, Palette, Database, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Front-End Development",
      description: "React, TypeScript, Tailwind CSS"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design Thinking, Prototype, User Research"
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Supabase, API Development"
    },
    {
      icon: Users,
      title: "Multi-Industry Experience",
      description: "F&B, Banking, Technology"
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="animate-fade-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with diverse experience across industries
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="project-card mb-12">
              <p className="text-lg text-muted leading-relaxed">
                Saya adalah seorang <span className="text-primary font-semibold">Front-End Developer</span> dan{' '}
                <span className="text-accent font-semibold">UI/UX Designer</span> dengan pengalaman yang beragam 
                di industri F&B service, perbankan, dan teknologi informasi. Dengan passion yang kuat dalam 
                menciptakan solusi digital yang inovatif, saya menggabungkan keterampilan teknis dengan 
                pemahaman mendalam tentang user experience untuk menghasilkan produk yang tidak hanya 
                berfungsi dengan baik, tetapi juga memberikan pengalaman yang luar biasa bagi pengguna.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
