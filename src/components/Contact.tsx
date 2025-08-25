
import { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('Pesan berhasil dikirim! Saya akan membalas segera.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="animate-fade-in-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Mari berkolaborasi dan ciptakan sesuatu yang luar biasa bersama
          </p>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="project-card">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Mari Terhubung</h3>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:bondyladista@gmail.com"
                    className="flex items-center gap-4 text-muted hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p>bondyladista@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/adistaputrasuyatno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p>adistaputrasuyatno</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted">
                    <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p>Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="project-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Kirim Pesan</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input w-full resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  Kirim Pesan
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
