import { useEffect, useRef, useState } from 'react';
import { Bot, ChevronDown, Send, Sparkles, X } from 'lucide-react';

type Message = {
  id: number;
  role: 'assistant' | 'visitor';
  text: string;
  link?: { label: string; href: string };
};

const QUICK_QUESTIONS = [
  'Apa proyek unggulannya?',
  'Ceritakan penelitiannya',
  'Bagaimana cara menghubungi?',
];

function getAnswer(question: string): Omit<Message, 'id' | 'role'> {
  const query = question.toLocaleLowerCase('id');

  if (/halo|hai|hello|hi\b|selamat/.test(query)) {
    return {
      text: 'Halo! Saya bisa membantu menemukan informasi tentang proyek, keahlian, riset, sertifikat, atau kontak Puderta.',
    };
  }

  if (/proyek|project|portfolio|portofolio|dibangun|dibuat/.test(query)) {
    return {
      text: 'Ada dua proyek unggulan: E-Library DLH Medan, aplikasi perpustakaan digital berbasis Laravel dan React; serta sistem deteksi penyakit daun kopi menggunakan YOLO dan SqueezeNet.',
      link: { label: 'Lihat proyek', href: '#projects' },
    };
  }

  if (/riset|penelitian|skripsi|tugas akhir|yolo|kopi|computer vision/.test(query)) {
    return {
      text: 'Penelitiannya membahas deteksi penyakit daun kopi dengan YOLO dan backbone SqueezeNet. Model divalidasi menggunakan 5-fold cross-validation; ringkasan hasilnya mencatat mAP 89,6% dan precision 94,9%.',
      link: { label: 'Lihat penelitian', href: '#research' },
    };
  }

  if (/skill|keahlian|teknologi|bisa|menguasai/.test(query)) {
    return {
      text: 'Keahliannya mencakup frontend (React, TypeScript, Tailwind), backend (Laravel, PHP, Node.js), database, serta machine learning dan computer vision dengan Python, PyTorch, YOLO, dan OpenCV.',
      link: { label: 'Lihat keahlian', href: '#skills' },
    };
  }

  if (/sertifikat|sertifikasi|lisensi|dicoding|pencapaian/.test(query)) {
    return {
      text: 'Portfolio mencantumkan sertifikat pemrograman Dart dan Python dari Dicoding, serta pencapaian Pemakalah dan Makalah Terbaik dari ADA Research Center.',
      link: { label: 'Lihat sertifikat', href: '#certificates' },
    };
  }

  if (/cv|curriculum vitae|resume|resume|riwayat hidup/.test(query)) {
    return {
      text: 'CV Puderta tersedia untuk dibuka atau diunduh.',
      link: { label: 'Buka CV', href: '/cv/Puderta_Sinulingga.pdf' },
    };
  }

  if (/kontak|hubungi|email|kolaborasi|kerja|freelance/.test(query)) {
    return {
      text: 'Puderta terbuka untuk peluang kerja, proyek freelance, dan kolaborasi penelitian. Email: pudertalingga2202@gmail.com.',
      link: { label: 'Ke bagian kontak', href: '#contact' },
    };
  }

  if (/tentang|siapa|profil|pendidikan|puderta|derta/.test(query)) {
    return {
      text: 'Puderta Sinulingga adalah lulusan Teknik Informatika Universitas Medan Area yang tertarik pada pengembangan web full-stack, machine learning, dan computer vision.',
      link: { label: 'Tentang Puderta', href: '#about' },
    };
  }

  return {
    text: 'Saya hanya bisa menjawab berdasarkan informasi yang tersedia di portfolio ini. Coba tanyakan tentang proyek, keahlian, penelitian, sertifikat, CV, atau kontak.',
  };
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      text: 'Halo! Ada yang ingin kamu ketahui tentang portfolio Puderta?',
    },
  ]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  function askQuestion(value: string) {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion) return;

    const answer = getAnswer(trimmedQuestion);
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'visitor', text: trimmedQuestion },
      { id: Date.now() + 1, role: 'assistant', ...answer },
    ]);
    setQuestion('');
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Asisten portfolio"
          className="flex h-[min(34rem,calc(100dvh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15"
        >
          <header className="flex items-center justify-between bg-slate-900 px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400 text-white">
                <Bot size={21} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-bold">Tanya tentang Puderta</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Asisten portfolio
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chat"
              className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              <ChevronDown size={19} aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <Sparkles size={13} aria-hidden="true" />
              Jawaban dari isi portfolio
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'visitor' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-3 text-sm leading-relaxed ${
                    message.role === 'visitor'
                      ? 'rounded-br-md bg-sky-500 text-white'
                      : 'rounded-bl-md border border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <p>{message.text}</p>
                  {message.link && (
                    <a
                      href={message.link.href}
                      target={message.link.href.startsWith('/') ? '_blank' : undefined}
                      rel={message.link.href.startsWith('/') ? 'noreferrer' : undefined}
                      className="mt-2 inline-flex font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
                    >
                      {message.link.label} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_QUESTIONS.map((quickQuestion) => (
                  <button
                    key={quickQuestion}
                    type="button"
                    onClick={() => askQuestion(quickQuestion)}
                    className="rounded-full border border-sky-200 bg-white px-3 py-2 text-left text-xs font-semibold text-sky-800 transition hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  >
                    {quickQuestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              askQuestion(question);
            }}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
          >
            <label className="sr-only" htmlFor="portfolio-assistant-question">
              Tulis pertanyaan
            </label>
            <input
              id="portfolio-assistant-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Tulis pertanyaan..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
            <button
              type="submit"
              aria-label="Kirim pertanyaan"
              disabled={!question.trim()}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Tutup asisten portfolio' : 'Buka asisten portfolio'}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-900/20 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600"
      >
        {isOpen ? <X size={21} aria-hidden="true" /> : <Bot size={23} aria-hidden="true" />}
      </button>
    </div>
  );
}