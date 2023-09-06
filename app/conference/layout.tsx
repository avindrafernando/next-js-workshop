import styles from "./conference.module.css";
import { raleway } from "../fonts";

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className={`${styles.header} ${raleway.className}`}>
        <h2>Globomantics Maniacally Taking Tech to the Globe</h2>
      </header>
      <section>{children}</section>
    </>
  );
}
