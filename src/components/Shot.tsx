'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A project/research visual with a labeled placeholder fallback.
 * - `image`: a screenshot (set `src`).
 * - `video`: a silent looping demo clip (MP4). It autoplays and uses the
 *   image as its poster, so the screenshot shows until the video is ready.
 * Files go in /public/project-images/.
 */
export default function Shot({
  src,
  video,
  alt,
  label,
  href,
  aspect = 'aspect-[16/10]',
}: {
  src?: string;
  video?: string;
  alt: string;
  label: string;
  href?: string;
  aspect?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  const showImage = Boolean(src) && !failed;

  const inner = video ? (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={src}
      aria-label={alt}
      className="h-full w-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
  ) : showImage ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <span className="px-4 text-center text-xs font-medium text-gray-400 dark:text-gray-500">
        {label}
      </span>
    </div>
  );

  const frame = (
    <div className={`group relative ${aspect} w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800`}>
      {inner}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${alt} (opens in a new tab)`}
        className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
      >
        {frame}
      </a>
    );
  }
  return frame;
}
