'use client';

import { useCallback, useEffect, useState } from 'react';

export type MediaItem = { src: string; video?: boolean; poster?: string; contain?: boolean };

function Frame({ m, full, label }: { m: MediaItem; full: boolean; label: string }) {
  if (m.video) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={m.poster}
        controls={full}
        aria-label={label}
        className={full ? 'max-h-[85vh] max-w-full rounded-lg' : 'h-full w-full object-cover'}
      >
        <source src={m.src} type="video/mp4" />
      </video>
    );
  }
  const thumbClass = m.contain
    ? 'h-full w-full object-contain'
    : 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]';
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={m.src}
      alt={label}
      loading="lazy"
      className={full ? 'max-h-[85vh] max-w-full rounded-lg object-contain' : thumbClass}
    />
  );
}

/**
 * A project's media: a thumbnail that opens a fullscreen lightbox on click.
 * When there is more than one item, the lightbox cycles (arrows, dots,
 * ← / → keys). Falls back to a labeled placeholder when there is no media.
 */
export default function Gallery({
  media,
  label,
  aspect = 'aspect-[16/10]',
}: {
  media: MediaItem[];
  label: string;
  aspect?: string;
}) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const count = media.length;

  const next = useCallback(() => setI((p) => (p + 1) % count), [count]);
  const prev = useCallback(() => setI((p) => (p - 1 + count) % count), [count]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, next, prev]);

  const frameClass = `group relative block ${aspect} w-full cursor-zoom-in overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800`;

  if (count === 0) {
    return (
      <div className={frameClass.replace('cursor-zoom-in', '')}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <span className="px-4 text-center text-xs font-medium text-gray-400 dark:text-gray-500">{label}</span>
        </div>
      </div>
    );
  }

  const cur = media[Math.min(i, count - 1)];

  return (
    <>
      <button type="button" onClick={() => { setI(0); setOpen(true); }} aria-label={`Open ${label} media fullscreen`} className={frameClass}>
        <Frame m={media[0]} full={false} label={label} />
        {count > 1 && (
          <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
            1 / {count}
          </span>
        )}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="rounded-full bg-black/55 p-2 text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${label} media`}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="relative flex max-h-full max-w-6xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Frame m={cur} full label={label} />
          </div>

          {count > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:left-6"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:right-6"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setI(idx); }}
                    aria-label={`Go to ${idx + 1}`}
                    className={`h-2 w-2 rounded-full transition ${idx === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
