import { useState } from 'react';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';

const SOCIALS = [
  { icon: Mail, label: 'Email', value: 'pudertalingga2202@email.com', href: 'mailto:pudertalingga2202@email.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Puderta Sinulingga', href: 'https://www.linkedin.com/in/puderta-sinulingga-173984362?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: GithubIcon, label: 'GitHub', value: 'Puderta-2202', href: 'https://github.com/Puderta-2202' },
  { icon: InstagramIcon, label: 'Instagram', value: 'dertaaa__', href: 'https://www.instagram.com/dertaaa__' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sky-400" />
          <span className="text-sky-500 text-sm font-semibold tracking-widest uppercase">
            Kontak
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Kiri: CTA + Media Sosial */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Mari Membangun Sesuatu
              <br />
              <span className="text-sky-400">yang Luar Biasa Bersama.</span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-10 text-[15px]">
              Memiliki proyek, ide, atau ingin berkolaborasi? Mari terhubung dan menciptakan
              sesuatu yang bermakna. Saya terbuka untuk peluang kerja, proyek freelance,
              maupun kolaborasi penelitian.
            </p>

            <div className="flex flex-col gap-4">
              {SOCIALS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 border border-sky-100 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all group"
                >
                  <div className="w-10 h-10 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center group-hover:bg-sky-400 group-hover:border-sky-400 transition-all flex-shrink-0">
                    <Icon size={18} className="text-sky-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
                    <p className="text-sm font-semibold text-slate-700 truncate">{value}</p>
                  </div>
                  <ArrowRight size={16} className="text-sky-300 group-hover:text-sky-500 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Kanan: Form */}
          <div className="bg-sky-50/50 border border-sky-100 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>

            {sent && (
              <div className="mb-6 bg-sky-400 text-white text-sm font-semibold px-4 py-3 rounded-xl flex items-center gap-2">
                <span>✓</span> Pesan berhasil dikirim! Saya akan segera menghubungi Anda kembali.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap Anda"
                  required
                  className="w-full bg-white border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@anda.com"
                  required
                  className="w-full bg-white border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ceritakan tentang proyek atau ide Anda..."
                  required
                  rows={5}
                  className="w-full bg-white border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5 mt-1"
              >
                Kirim Pesan <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}