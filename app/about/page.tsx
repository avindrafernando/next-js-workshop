import Image from "next/image";
import ourStoryImage from "../../public/images/home-image-1.jpg";
import styles from "../page.module.css";

export default function About() {
  return (
    <>
      <section className={styles.bgWrap}>
        <Image
          src={ourStoryImage}
          alt="Our story image"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </>
  );
}
