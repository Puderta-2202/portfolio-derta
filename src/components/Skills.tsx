const SKILL_GROUPS = [
  {
    category: 'Pengembangan Frontend',
    icon: '🖥️',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Figma',
    ],
  },
  {
    category: 'Pengembangan Backend',
    icon: '⚙️',
    skills: [
      'Laravel',
      'PHP',
      'Node.js',
      'REST API',
      'MVC Architecture',
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Eloquent ORM',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    category: 'Bahasa Pemrograman',
    icon: '💻',
    skills: [
      'Python',
      'PHP',
      'JavaScript',
      'TypeScript',
      'SQL',
    ],
  },
  {
    category: 'Machine Learning',
    icon: '🤖',
    skills: [
      'YOLO',
      'SqueezeNet',
      'Computer Vision',
      'PyTorch',
      'OpenCV',
      'scikit-learn',
    ],
  },
  {
    category: 'Tools & Teknologi',
    icon: '🛠️',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Docker (Dasar)',
      'Linux',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-sky-50/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sky-400" />

          <span className="text-sky-500 text-sm font-semibold tracking-widest uppercase">
            Keahlian & Teknologi
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Teknologi yang saya
            <br />
            <span className="text-sky-400">
              gunakan untuk berkarya.
            </span>
          </h2>

          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Mulai dari pengembangan antarmuka hingga sistem backend dan
            machine learning — berikut teknologi yang saya gunakan dalam
            berbagai proyek.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-sky-100 rounded-2xl p-6 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 transition-all group"
            >
              {/* Category */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center text-lg group-hover:bg-sky-400 transition-colors">
                  <span>{group.icon}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm">
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold px-3 py-1 rounded-full hover:bg-sky-400 hover:text-white hover:border-sky-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}