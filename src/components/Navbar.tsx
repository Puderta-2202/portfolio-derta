import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Penelitian', href: '#research' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-sky-50 border-b border-sky-50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold text-sky-400 tracking-tight">
          Puderta Sinulingga
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-md hover:shadow-sky-200"
        >
          Hubungi Saya
        </a>

        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-sky-50 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-sky-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center"
            onClick={() => setOpen(false)}
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </header>
  );
}