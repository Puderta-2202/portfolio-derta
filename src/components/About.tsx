const STATS = [
  { value: '3+', label: 'Tahun Belajar & Berkarya' },
  { value: '5+', label: 'Proyek yang Diselesaikan' },
  { value: '5+', label: 'Teknologi yang Dikuasai' },
  { value: '1+', label: 'Proyek Penelitian' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sky-400" />
          <span className="text-sky-500 text-sm font-semibold tracking-widest uppercase">Tentang Saya</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Kiri: Teks */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Membangun teknologi
              <br />
              <span className="text-sky-400">dengan tujuan.</span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-5">
              Saya Puderta Sinulingga, lulusan Teknik Informatika yang memiliki ketertarikan
              mendalam dalam membangun produk digital yang mampu menyelesaikan permasalahan nyata.
              Perjalanan saya di dunia teknologi berawal dari rasa ingin tahu dan berkembang
              menjadi pengalaman dalam pengembangan web full-stack serta machine learning.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8">
              Saya menggabungkan kemampuan teknis dengan perhatian terhadap desain yang bersih
              dan mudah digunakan — baik dalam membangun backend Laravel yang terstruktur,
              frontend React yang dinamis, maupun sistem computer vision yang cerdas. Saya
              tertantang untuk mengubah permasalahan yang kompleks menjadi solusi yang efektif
              dan elegan.
            </p>

            {/* Pendidikan */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                Pendidikan
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">S1 Teknik Informatika</p>
                  <p className="text-sm text-slate-500">Universitas Medan Area · 2022 – 2026</p>
                </div>
              </div>
            </div>

            {/* Minat */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                Minat
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Pengembangan Web', 'Machine Learning', 'Computer Vision', 'Open Source', 'Python', 'Flutter'].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Tujuan */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                Tujuan Profesional
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Membangun produk perangkat lunak yang memberikan dampak nyata dengan
                menghubungkan inovasi dan kebutuhan sehari-hari — serta ke depannya dapat
                memimpin tim yang mengutamakan keunggulan teknis dan desain yang berpusat
                pada kebutuhan pengguna.
              </p>
            </div>
          </div>

          {/* Kanan: Statistik */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-sky-50 border border-sky-100 rounded-2xl p-6 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100 transition-all group"
                >
                  <div className="text-4xl lg:text-5xl font-extrabold text-sky-400 mb-2 group-hover:scale-105 transition-transform">
                    {s.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Blok Visual Tambahan */}
            <div className="mt-6 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold opacity-80 mb-2 uppercase tracking-widest">Fokus Saat Ini</p>
              <p className="font-bold text-xl leading-snug">
                Membangun aplikasi full-stack yang siap digunakan dan mengeksplorasi integrasi AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}