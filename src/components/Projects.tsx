import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const PROJECTS = [
  {
    id: 1,
    title: 'E-Library DLH Medan',
    category: 'Aplikasi Web',
    description:
      'Sistem manajemen perpustakaan digital untuk Dinas Lingkungan Hidup Kota Medan. Sistem ini menangani pengelolaan dokumen, kategori bidang, hak akses pengguna, arsip digital, dan pencarian lanjutan — menggantikan alur kerja berbasis kertas dengan sistem yang sepenuhnya digital.',
    stack: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=900&h=560&fit=crop&auto=format',
    alt: 'Dashboard E-Library dengan kode pada layar',
    imageLeft: true,
  },
  {
    id: 2,
    title: 'Deteksi Penyakit Daun Kopi',
    category: 'AI / Computer Vision',
    description:
      'Sistem computer vision berbasis kecerdasan buatan untuk mendeteksi penyakit pada daun kopi secara real-time menggunakan framework deteksi objek YOLO dengan backbone ringan SqueezeNet. Model dilatih dan divalidasi menggunakan 5-fold cross-validation untuk memperoleh performa yang lebih robust pada kondisi lapangan.',
    stack: ['Python', 'YOLO', 'SqueezeNet', 'PyTorch', 'OpenCV', 'Computer Vision'],
    image:
      'https://images.unsplash.com/photo-1762491643902-1e072f8f90fd?w=900&h=560&fit=crop&auto=format',
    alt: 'Daun tanaman kopi berwarna hijau',
    imageLeft: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sky-400" />
          <span className="text-sky-500 text-sm font-semibold tracking-widest uppercase">
            Proyek Unggulan
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Beberapa hal yang
            <br />
            <span className="text-sky-400">telah saya bangun.</span>
          </h2>

          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Dari digitalisasi instansi pemerintahan hingga teknologi berbasis AI — berbagai
            proyek yang dirancang untuk menyelesaikan permasalahan nyata.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                !project.imageLeft
                  ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                  : ''
              }`}
            >
              {/* Gambar */}
              <div className="relative group overflow-hidden rounded-2xl bg-sky-50 aspect-video">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge Kategori */}
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {project.category}
                  </span>
                </div>

                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-sky-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>

              {/* Konten */}
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                    Proyek {String(project.id).padStart(2, '0')}
                  </span>

                  <h3 className="text-3xl font-extrabold text-slate-900 mt-1 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    {project.description}
                  </p>
                </div>

                {/* Teknologi */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Teknologi
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol */}
                <div className="flex gap-3 pt-2">
                  {/* <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-md hover:shadow-sky-200 hover:-translate-y-0.5"
                  >
                    Lihat Proyek <ExternalLink size={15} />
                  </a> */}

                  <a
                    href="https://github.com/Puderta-2202"
                    className="inline-flex items-center gap-2 border border-slate-200 hover:border-sky-300 text-slate-600 hover:text-sky-500 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    <GithubIcon size={15} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}