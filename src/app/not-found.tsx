import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-2 text-[15px] text-gray-600 dark:text-gray-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 dark:text-white dark:decoration-gray-600 dark:hover:decoration-gray-300"
      >
        Back home
      </Link>
    </main>
  );
}
