import {
  Globe,
  Layout,
  Server,
  Smartphone,
  Palette,
  Brain,
  Database,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Pengembangan Web',
    desc: 'Solusi web menyeluruh — mulai dari perancangan arsitektur hingga deployment. Cepat, skalabel, dan mudah dipelihara.',
  },
  {
    icon: Layout,
    title: 'Pengembangan Frontend',
    desc: 'Antarmuka yang responsif, mudah diakses, dan modern menggunakan React serta framework CSS terkini.',
  },
  {
    icon: Server,
    title: 'Pengembangan Backend',
    desc: 'API Laravel yang andal, perancangan database, autentikasi, serta logika bisnis yang dapat dikembangkan sesuai kebutuhan.',
  },
  {
    icon: Smartphone,
    title: 'Pengembangan Aplikasi Mobile',
    desc: 'Pengembangan aplikasi mobile yang responsif dan mudah digunakan untuk Android maupun iOS menggunakan teknologi modern seperti Flutter.',
  },
  {
    icon: Palette,
    title: 'Desain UI/UX',
    desc: 'Desain antarmuka yang bersih dan berpusat pada pengguna menggunakan Figma — mulai dari wireframe hingga prototipe high-fidelity.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Pengembangan sistem computer vision, pelatihan model, serta integrasi machine learning ke dalam aplikasi.',
  },
  {
    icon: Database,
    title: 'Pengembangan Database',
    desc: 'Perancangan struktur database yang efisien, optimasi query, dan pemodelan data untuk MySQL dan PostgreSQL.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-sky-500" />
            <span className="text-sm font-semibold tracking-widest uppercase text-sky-600">
              Layanan
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Apa yang bisa saya bantu.
          </h2>

          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Layanan berkualitas dan terfokus untuk individu, startup, maupun
            organisasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Number */}
                <div className="absolute top-6 right-7 text-xs font-mono text-slate-300 group-hover:text-sky-300 transition-colors">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
                  <Icon
                    size={26}
                    className="text-sky-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}