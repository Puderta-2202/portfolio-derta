const TIMELINE_ITEMS = [
  {
    year: '2022 – 2026',
    type: 'Pendidikan',
    title: 'S1 Teknik Informatika',
    org: 'Universitas Medan Area',
    description:
      'Menyelesaikan pendidikan sarjana Teknik Informatika dengan fokus pada pengembangan perangkat lunak, algoritma, struktur data, basis data, dan kecerdasan buatan. Menyelesaikan tugas akhir mengenai deteksi penyakit daun kopi menggunakan teknologi computer vision.',
  },
  {
    year: 'Agustus 2025',
    type: 'Magang',
    title: 'Software Developer Intern',
    org: 'Dinas Lingkungan Hidup Kota Medan',
    description:
      'Mengembangkan aplikasi berbasis web untuk mendukung digitalisasi proses kerja, termasuk sistem e-library untuk pengelolaan dokumen. Menggunakan Laravel, React, dan MySQL dalam proses pengembangan aplikasi.',
  },
  {
    year: '2025 – 2026',
    type: 'Penelitian',
    title: 'Deteksi Penyakit Daun Kopi',
    org: 'Universitas Medan Area · Penelitian Tugas Akhir',
    description:
      'Melakukan penelitian mengenai penerapan YOLO dengan backbone SqueezeNet untuk mendeteksi penyakit pada daun kopi. Model divalidasi menggunakan 5-fold cross-validation dengan metrik evaluasi seperti mAP, precision, recall, dan F1-score.',
  },
  // {
  //   year: '2024 – Sekarang',
  //   type: 'Pengembangan',
  //   title: 'Full-Stack Web Developer',
  //   org: 'Independent',
  //   description:
  //     'Mengembangkan berbagai aplikasi berbasis web menggunakan Laravel, React, TypeScript, dan MySQL. Proyek yang dikerjakan mencakup sistem informasi, aplikasi manajemen, dashboard, serta pengembangan aplikasi web dengan kebutuhan yang disesuaikan.',
  // },
];

const TYPE_COLORS: Record<string, string> = {
  Pendidikan: 'bg-sky-100 text-sky-700 border-sky-200',
  Magang: 'bg-violet-50 text-violet-700 border-violet-200',
  Penelitian: 'bg-amber-50 text-amber-700 border-amber-200',
  Pengembangan: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-sky-50/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sky-400" />

          <span className="text-sky-500 text-sm font-semibold tracking-widest uppercase">
            Pengalaman & Perjalanan
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-16">
          Perjalanan saya sejauh ini.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-sky-200" />

          <div className="flex flex-col gap-10">
            {TIMELINE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 items-start group"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-sky-400 flex items-center justify-center z-10 shadow-sm shadow-sky-100 group-hover:bg-sky-400 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-sky-400 group-hover:bg-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Year & Type */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                      {item.year}
                    </span>

                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        TYPE_COLORS[item.type]
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm font-semibold text-sky-500 mb-3">
                    {item.org}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}