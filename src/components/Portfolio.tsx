import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Website Monitoring Layanan 110",
      description: "Sistem monitoring untuk layanan 110 dengan dashboard real-time untuk tracking dan analisis performa layanan darurat.",
      image: "/lovable-uploads/SIMOLALANDINGPAGE.png",
      technologies: ["React", "Dashboard", "Real-time Monitoring", "Analytics"],
      liveUrl: "https://simola110.netlify.app"
    },
    {
      title: "Feedback Layanan",
      description: "Sistem feedback untuk layanan dengan integrasi database untuk real-time data management dan analytics feedback pengguna.",
      image: "/lovable-uploads/SURVEI.png",
      technologies: ["React", "Supabase", "Tailwind CSS", "TypeScript"],
      liveUrl: "http://surveilayanan.netlify.app/"
    },
    {
      title: "Website Monitoring Keuangan Teller",
      description: "Dashboard monitoring untuk tracking aktivitas keuangan teller dengan visualisasi data real-time dan reporting system.",
      image: "/lovable-uploads/DINDASHBOOK.png",
      technologies: ["React", "Chart.js", "Node.js", "MySQL"],
      liveUrl: "https://alteregofinance.netlify.app"
    },
    {
      title: "Saral Freight Management",
      description: "Sistem manajemen freight dan logistik dengan fitur tracking pengiriman, manajemen inventory, dan reporting yang komprehensif.",
      image: "/lovable-uploads/FREIGHT.png",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      liveUrl: "https://saralfreightmanagement.netlify.app"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="animate-fade-in-up">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Beberapa proyek yang telah saya kerjakan dengan teknologi modern
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/20 backdrop-blur-sm rounded-full hover:bg-primary/40 transition-colors"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-surface-elevated text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
