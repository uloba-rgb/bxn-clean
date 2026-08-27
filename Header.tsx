import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";

/**
 * BXN design reminder: dark tech-forward minimalism, neon lime signal, geometric clarity.
 * Navigation uses real anchors for dependable routing and a compact mobile disclosure.
 */
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
<header
  className="border-b backdrop-blur-[10px] "
  style={{ backgroundColor: "rgba(10, 10, 10, 0.9)", borderColor: "#1e1e1e" }}
>
      <nav className="container flex items-center justify-between pt-5 pb-2" aria-label="Primary">
        <div className="flex items-center gap-6">
          <Link href="/" onClick={closeMenu} aria-label="BXN home" className="group flex items-center">
  <img
  src={`${import.meta.env.BASE_URL}bxn-logo.png`}
  alt="BXN"
  className="w-[130px] h-auto object-contain"
/>
</Link>

          <div className="hidden items-center gap-3 border-l border-gray-700 pl-6 md:flex">
            <a href="https://www.facebook.com/profile.php?id=61590224003461" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-white" title="Follow us on Facebook"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/brandxnetworking?igsh=MWwydzc4aXpqemg1Yw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-white" title="Follow us on Instagram"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/company/135803953/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-white" title="Follow us on LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-gray-500 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
<Link
  href="/contact"
  className="hidden md:flex px-5 py-2.5 bg-[#9DFF00] text-black font-bold uppercase tracking-wide rounded-md transition-all duration-300 hover:bg-white hover:scale-105"
>
  Get in Touch
</Link>
        <button
          type="button"
          className="text-white transition-colors hover:text-[#9dff00] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`border-t px-4 transition-[max-height,opacity] duration-200 md:hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
        style={{ borderColor: "#1e1e1e" }}
      >
        <div className="container flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu} className="border-b border-[#1e1e1e] py-3 text-sm uppercase tracking-wider text-gray-400 transition-colors hover:text-[#9dff00]">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu} className="mt-3 bg-[#9dff00] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
