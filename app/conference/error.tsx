"use client";
import styles from "./conference.module.css";

/** Error component for the conference route and its pages */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.parentContainer}>
      <h2>Something went wrong! Cannot load conference details</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
