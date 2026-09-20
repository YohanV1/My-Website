'use client';

import { useEffect, useRef, useState } from 'react';

/** Small square org logo, with a neutral monogram fallback if the file is missing. */
export default function OrgLogo({
  src,
  label,
  mono,
  size = 38,
}: {
  src?: string;
  label: string;
  mono: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  const dim = { width: size, height: size };

  if (src && !failed) {
    return (
      <span
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 ring-1 ring-gray-200 dark:ring-gray-700"
        style={dim}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={src}
          alt={`${label} logo`}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-lg bg-gray-200 font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300"
      style={{ ...dim, fontSize: Math.round(size * 0.34) }}
      aria-hidden
      title={label}
    >
      {mono}
    </span>
  );
}
