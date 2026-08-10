import { Link } from "wouter";

/**
 * Footer Component
 * 
 * Design Philosophy: Dark Tech-Forward Minimalism
 * - Clean, organized information architecture
 * - Minimal visual elements
 * - Neon lime accents for links
 */

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: '#1e1e1e',
        backgroundColor: '#0b0b0b',
        padding: '56px 0 40px'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-6 mb-9">
          {/* Left: Logo & Brand */}
          <Link href="/" className="group flex items-center" aria-label="BXN home">
            <img src="/bxn-logo.png" alt="BXN" className="h-10 w-auto max-w-[190px] object-contain transition-transform duration-200 group-hover:scale-[1.03]" />
          </Link>

          {/* Links */}
          <div className="flex gap-7 text-xs" style={{ color: '#808080' }}>
            <Link href="/">
              <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-white transition-colors cursor-pointer">Philosophy</span>
            </Link>
            <Link href="/os">
              <span className="hover:text-white transition-colors cursor-pointer">BXN OS</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-white transition-colors cursor-pointer">Frameworks</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-white transition-colors cursor-pointer">Playbooks</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-2 text-xs"
          style={{
            borderColor: '#1e1e1e',
            color: '#808080'
          }}
        >
          <p>&copy; 2026 Brand X Networking. All rights reserved.</p>
          <div className="flex gap-7">
            <Link href="/contact">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
