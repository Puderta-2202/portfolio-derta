import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';

const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/Puderta-2202', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/puderta-sinulingga-173984362', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/dertaaa__', label: 'Instagram' },
  { icon: Mail, href: 'mailto:pudertalingga2202@email.com', label: 'Email' },
];

const NAV = [
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Penelitian', href: '#research' },
  { label: 'Kontak', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold text-sky-400 mb-3">Puderta Sinulingga</div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Software Developer & Lulusan Teknik Informatika. Membangun pengalaman digital
              modern dengan kode yang bersih dan desain yang terarah.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Navigasi
            </p>
            <nav className="grid grid-cols-2 gap-2">
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sosial Media + CTA */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Terhubung
            </p>
            <div className="flex gap-3 mb-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-400 flex items-center justify-center transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Hubungi Saya →
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-slate-800 pt-4 mt-6">
          <div className="flex items-center justify-center text-center">
            <span className="text-slate-500 text-xs">
              © 2026 Puderta Sinulingga. Hak cipta dilindungi.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}