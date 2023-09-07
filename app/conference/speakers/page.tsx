import Link from "next/link";
import styles from "./speakers.module.css";

export default function Speakers() {
  return (
    <>
      <h1>Welcome to Globomantics Speakers</h1>
      <p className={styles.speaker}>Speakers page</p>
      <h2>
        <Link href="/conference">Back to Conference</Link>
      </h2>
    </>
  );
}
