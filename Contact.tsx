import Header from "./Header";
import MarqueeStrip from "./MarqueeStrip";
import Footer from "./Footer";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Page
 * 
 * Design: Dark Tech-Forward with bordered grid boxes background
 * - Contact form with validation
 * - Company contact info
 * - Background grid pattern
 */

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.4 }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e1e1e 1px, transparent 1px),
            linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-black min-h-screen" style={{ backgroundColor: '#0b0b0b' }}>
      <Header />
      <MarqueeStrip />

      {/* Hero Section */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#0b0b0b' }}>
        <BackgroundGrid />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-9 h-px" style={{ backgroundColor: '#9dff00' }} />
              <span className="text-xs tracking-widest" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                GET IN TOUCH
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-7"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                lineHeight: '0.92'
              }}
            >
              Let's Build
              <br />
              <span style={{ color: '#9dff00' }}>Something Real.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#808080' }}>
              Ready to stop guessing and start building systems that compound? Tell us about your business and we'll show you what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0f0f0f' }}>
        <BackgroundGrid />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2
                className="text-2xl md:text-3xl mb-8"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                Start a Conversation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-transparent border text-white text-sm focus:outline-none focus:border-[#9dff00] transition-colors"
                    style={{ borderColor: '#1e1e1e' }}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-transparent border text-white text-sm focus:outline-none focus:border-[#9dff00] transition-colors"
                    style={{ borderColor: '#1e1e1e' }}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border text-white text-sm focus:outline-none focus:border-[#9dff00] transition-colors"
                    style={{ borderColor: '#1e1e1e' }}
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>
                    Tell Us About Your Business
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border text-white text-sm focus:outline-none focus:border-[#9dff00] transition-colors resize-none"
                    style={{ borderColor: '#1e1e1e' }}
                    placeholder="What challenges are you facing? What does growth look like for you?"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 font-bold text-sm transition-all flex items-center gap-2 group"
                  style={{
                    backgroundColor: '#9dff00',
                    color: '#0a0a0a',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(157, 255, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12 lg:border-l" style={{ borderColor: '#1e1e1e' }}>
              <h2
                className="text-2xl md:text-3xl mb-8"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                Contact Info
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail size={20} style={{ color: '#9dff00' }} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>Email</p>
                    <a href="mailto:contact@brandxnetworking.com" className="text-white hover:text-[#9dff00] transition-colors">
                      contact@brandxnetworking.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} style={{ color: '#9dff00' }} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>Phone</p>
                    <p className="text-white">Available upon request</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} style={{ color: '#9dff00' }} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>Location</p>
                    <p className="text-white">Remote-First / Global</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t" style={{ borderColor: '#1e1e1e' }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#808080', fontFamily: "'JetBrains Mono', monospace" }}>Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61590224003461" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9dff00] transition-colors text-sm">Facebook</a>
                  <a href="https://www.instagram.com/brandxnetworking?igsh=MWwydzc4aXpqemg1Yw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9dff00] transition-colors text-sm">Instagram</a>
                  <a href="https://www.linkedin.com/company/135803953/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9dff00] transition-colors text-sm">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

