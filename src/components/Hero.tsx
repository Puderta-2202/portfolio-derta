import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const TECH_BADGES = ['Laravel', 'React', 'Python', 'Machine Learning', 'MySQL', 'TypeScript'];

const FLOATING_BADGES = [
  { label: '⚛️ React', pos: 'absolute -right-8 top-8', anim: 'animate-float' },
  { label: '🐍 Python', pos: 'absolute -left-10 top-1/3', anim: 'animate-float-reverse' },
  { label: '🔴 Laravel', pos: 'absolute -right-6 bottom-16', anim: 'animate-float' },
  { label: '🤖 ML', pos: 'absolute -left-6 bottom-10', anim: 'animate-float-reverse' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dekorasi Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0f172a 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Garis Geometris Tipis */}
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-sky-200 to-transparent" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-px bg-gradient-to-r from-sky-200 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Konten Kiri */}
        <div className="order-2 lg:order-1">
          {/* Badge Ketersediaan */}
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-sky-700">Terbuka untuk Peluang Kerja</span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-4">
            Halo, Saya
            <br />
            <span className="text-sky-400">Puderta Sinulingga</span>
          </h1>

          <p className="text-lg lg:text-xl font-semibold text-slate-500 mb-5">
            Software Developer & Lulusan Teknik Informatika
          </p>

          <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
            Saya membangun pengalaman digital modern, aplikasi web, dan solusi teknologi
            berbasis kecerdasan. Memiliki ketertarikan dalam menciptakan perangkat lunak
            yang bersih, berkinerja baik, dan memberikan dampak nyata.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5"
            >
              Lihat Proyek Saya <ArrowRight size={17} />
            </a>
            <a
                href="/cv/CV_ATS_PUDERTA-SINULINGGA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-sky-200 hover:border-sky-400 text-slate-700 hover:text-sky-500 font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Lihat CV <Download size={17} />
            </a>
          </div>

          {/* Badge Teknologi */}
          <div className="flex flex-wrap gap-2">
            {TECH_BADGES.map((tech) => (
              <span
                key={tech}
                className="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold px-3.5 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Kanan: Area Foto Profil */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]">
            {/* Lingkaran Luar Berputar */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-200 animate-spin-slow" />

            {/* Lingkaran Tengah */}
            <div className="absolute inset-6 rounded-full border border-sky-100" />

            {/* Lingkaran Profil */}
            <div className="absolute inset-10 rounded-full overflow-hidden bg-sky-100 shadow-2xl shadow-sky-200/60">
              <img
                src="/images/dertaa.png"
                alt="Foto Puderta Sinulingga"
                className="w-full h-full object-cover object-[50%_18%] scale-110"
              />
            </div>

            {/* Badge Teknologi Mengambang */}
            {FLOATING_BADGES.map((b) => (
              <div
                key={b.label}
                className={`${b.pos} ${b.anim} bg-white shadow-lg shadow-sky-100/80 border border-sky-100 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 whitespace-nowrap`}
              >
                {b.label}
              </div>
            ))}

            {/* Titik Aksen */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-400 shadow-md shadow-sky-300" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-200" />

            {/* Efek Cahaya di Belakang Lingkaran */}
            <div className="absolute inset-8 rounded-full bg-sky-400/20 blur-xl" />
          </div>
        </div>
      </div>

      {/* Petunjuk Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={15} />
      </div>
    </section>
  );
}