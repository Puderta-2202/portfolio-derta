import { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

GlobalWorkerOptions.workerSrc = pdfWorker;

type PdfPreviewProps = {
  url: string;
  title: string;
};

function PdfPreview({ url, title }: PdfPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let cancelRender: (() => void) | undefined;
    const loadingTask = getDocument({ url });

    setFailed(false);

    async function renderPreview() {
      try {
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (!canvas || cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const width = canvas.parentElement?.clientWidth ?? 400;
        const viewport = page.getViewport({
          scale: width / baseViewport.width,
        });
        const pixelRatio = window.devicePixelRatio || 1;

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

         const task = page.render({
          canvas,
          viewport,
          transform: [pixelRatio, 0, 0, pixelRatio, 0, 0],
        });


        cancelRender = () => task.cancel();
        await task.promise;
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    void renderPreview();

    return () => {
      cancelled = true;
      cancelRender?.();
      void loadingTask.destroy();
    };
  }, [url]);

  return (
    <div className="h-48 overflow-hidden bg-white">
      {failed ? (
        <div className="flex h-full items-center justify-center text-sm text-slate-500">
          Pratinjau tidak tersedia
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`Pratinjau sertifikat ${title}`}
          className="block"
        />
      )}
    </div>
  );
}

const certificates = [
  {
    title: 'Memulai Pemrograman dengan Dart',
    issuer: 'Dicoding',
    date: '15 November 2024',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP84V5D2ZQK',
    pdfUrl: '/certificate/dart.pdf',
  },
  {
    title: 'Pemakalah',
    issuer: 'ADA Research Center',
    date: '14 Juni 2025',
    credentialUrl: '-',
    pdfUrl: '/certificate/pemakalah.pdf',
  },
  {
    title: 'Makalah Terbaik',
    issuer: 'ADA Research Center',
    date: '14 Juni 2025',
    credentialUrl: '-',
    pdfUrl: '/certificate/makalah-terbaik.pdf',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding',
    date: '11 Juni 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/GRX5W13V2Z0M',
    pdfUrl: '/certificate/python.pdf',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Pencapaian
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Sertifikat &amp; Lisensi
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Beberapa sertifikat yang mendukung perjalanan dan pengembangan
            profesional saya.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <PdfPreview
                url={certificate.pdfUrl}
                title={certificate.title}
              />

              <div className="p-6">
                <p className="text-sm font-medium text-blue-600">
                  {certificate.issuer} · {certificate.date}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {certificate.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Buka PDF <span aria-hidden="true">↗</span>
                  </a>

                  {/* <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Lihat kredensial <span aria-hidden="true">↗</span>
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}