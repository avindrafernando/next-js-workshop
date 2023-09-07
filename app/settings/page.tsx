import Image from "next/image";
import styles from "../page.module.css";

export default function Settings() {
  return (
    <>
      <section className={styles.bgWrap}>
        <Image
          src="https://picsum.photos/id/56/2880/1920"
          alt="Settings image"
          placeholder="blur"
          blurDataURL="https://picsum.photos/id/56/2880/1920?blur=10"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <h1 className={styles.bgHeader}>Welcome to Globomantics Settings</h1>
    </>
  );
}
