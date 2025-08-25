
import { Code, Database, Palette, BarChart3, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
    },
    {
      icon: Palette,
      title: "Styling & Design",
      skills: ["Tailwind CSS", "CSS Modules", "Figma", "Adobe XD"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Supabase", "PostgreSQL", "REST API", "GraphQL"]
    },
    {
      icon: BarChart3,
      title: "UI/UX Design",
      skills: ["Design Thinking", "Wireframing", "Prototyping", "User Research"]
    },
    {
      icon: FileText,
      title: "Data Management",
      skills: ["Data Entry", "Excel", "Google Sheets", "Data Analysis"]
    }
  ];

  const mainSkills = ["React", "Tailwind CSS", "Supabase", "UI/UX Design", "Data Entry"];

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="animate-fade-in-up">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital
          </p>

          {/* Main Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {mainSkills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Detailed Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="project-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted">{skill}</span>
                    </div>
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

export default Skills;
