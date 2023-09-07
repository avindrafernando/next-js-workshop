import styles from "../conference.module.css";
import { fetchSpeakers } from "./services/speakers";

export type Speaker = {
  id: string;
  name: string;
  bio: string;
  featured?: boolean;
};

export type SpeakerSummary = Pick<Speaker, "id" | "name">;

export default async function Speakers() {
  const speakersData = await fetchSpeakers();
  return (
    <>
      <section className={styles.parentContainer}>
        <section>Last Rendered: {new Date().toLocaleTimeString()}</section>
        <h1>Welcome to Globomantics Speakers</h1>
        {speakersData.speakers.map(({ id, name, bio }: Speaker) => (
          <section key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>Speaker: {name}</h3>
            <h5 className={styles.descText}>Bio: {bio}</h5>
          </section>
        ))}
      </section>
    </>
  );
}
