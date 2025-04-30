'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleReset = () => reset();
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          handleReset
          // Attempt to recover by trying to re-render the segment
        }
      >
        <span>Try again</span>
      </button>
    </div>
  );
}
