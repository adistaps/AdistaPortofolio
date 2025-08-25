
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface/50 border-t border-border/50 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted flex items-center gap-2">
              © 2025 Adista Putra Suyatno
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:bondyladista@gmail.com"
              className="text-muted hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/adistaputrasuyatno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
