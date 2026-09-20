import { BookOpen, Layers, BarChart2, Cpu } from 'lucide-react';

const RESEARCH_DETAILS = [
  {
    icon: BookOpen,
    label: 'Topik',
    value: 'Deteksi Penyakit Daun Kopi menggunakan YOLO+SqueezeNet',
  },
  {
    icon: Layers,
    label: 'Dataset',
    value: 'Dataset citra daun kopi berlabel dengan 3 kelas penyakit tunggal & kombinasi ketiganya',
  },
  {
    icon: Cpu,
    label: 'Metodologi',
    value: 'Framework deteksi objek YOLO dengan backbone ringan SqueezeNet untuk implementasi pada perangkat dengan sumber daya terbatas',
  },
  {
    icon: BarChart2,
    label: 'Validasi',
    value: '5-fold cross-validation dengan metrik evaluasi mAP, precision, recall, dan F1-score',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sky-400" />
          <span className="text-sky-500 text-sm font-semibold tracking-widest uppercase">
            Penelitian & Pencapaian
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-14">
          Penelitian akademik
          <br />
          <span className="text-sky-400">yang berdampak.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kartu Penelitian Utama */}
          <div className="relative bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-3xl p-8 overflow-hidden">
            {/* Dekorasi Cahaya */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-sky-400 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                🔬 Penelitian Tugas Akhir
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug mb-4">
                Implementasi YOLO dengan <b><i>Backbone SqueezeNet</i></b> untuk Deteksi Penyakit Daun Kopi
              </h3>

              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                Mengembangkan sistem computer vision untuk mendeteksi penyakit pada daun tanaman
                kopi secara real-time — membantu mengidentifikasi permasalahan kesehatan tanaman
                sejak dini dan mengurangi potensi kerugian dalam sektor pertanian. Model
                menggunakan arsitektur ringan yang dirancang untuk mempertahankan performa
                deteksi dengan kebutuhan komputasi yang lebih rendah.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'YOLO', 'SqueezeNet', 'PyTorch', 'OpenCV', 'Computer Vision'].map(
                  (t) => (
                    <span
                      key={t}
                      className="bg-white border border-sky-200 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              {/* Kontribusi Utama */}
              <div className="bg-sky-400 rounded-2xl p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
                  Kontribusi Utama
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  Menunjukkan penerapan arsitektur YOLO dengan backbone SqueezeNet untuk mendukung
                  proses deteksi penyakit daun kopi dengan arsitektur yang lebih ringan dan sesuai
                  untuk lingkungan dengan keterbatasan sumber daya komputasi.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Detail */}
          <div className="flex flex-col gap-5">
            {RESEARCH_DETAILS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 items-start bg-sky-50/60 border border-sky-100 rounded-2xl p-5 hover:border-sky-300 hover:bg-sky-50 transition-all"
              >
                <div className="w-10 h-10 bg-sky-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            {/* Ringkasan Performa */}
            <div className="bg-slate-900 rounded-2xl p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
                Performa Model
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { metric: 'mAP', value: '89.6%' },
                  { metric: 'Precision', value: '94.9%' },
                  { metric: 'F1-Score', value: '89.05%' },
                ].map((m) => (
                  <div key={m.metric} className="text-center">
                    <div className="text-2xl font-extrabold text-sky-400">{m.value}</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">{m.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}