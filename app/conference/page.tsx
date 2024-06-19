import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import conferenceImage from "../../public/images/media-image-1.jpg";
import Loading from "./loading";
import { Suspense } from "react";

export default function Conference() {
  return (
    <>
      <section className={styles.bgWrap}>
        <Image
          src={conferenceImage}
          alt="Conference image"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <h1 className={styles.bgHeader}>Welcome to Globomantics Conference</h1>
      <h2 className={styles.bgText}>
        <Suspense fallback={<Loading />}>
          <Link className={styles.bgLinks} href="/conference/speakers">
            View Speakers
          </Link>
        </Suspense>
      </h2>
      <h2 className={styles.bgText}>
        <Suspense fallback={<Loading />}>
          <Link className={styles.bgLinks} href="/conference/sessions">
            View Sessions
          </Link>
        </Suspense>
      </h2>
    </>
  );
}
