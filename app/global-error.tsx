"use client";

/** Global error boundary component for the entire app
 *  Replaces the root layout when an error occurs at the root level
 *  Only enabled in production mode
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong! Cannot load Globomantics</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
