import styles from "../../conference.module.css";
import type { Speaker, SpeakerSummary } from "../page";
import { getSpeakerDetails } from "../services/speakers";

type SpeakerWithSessions = Speaker & { sessions?: Array<any> };

export async function generateStaticParams() {
  const speakersResponse = await fetch(
    `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json`
  );

  const speakers = await speakersResponse.json();
  return speakers.speakers.map(({ id }: Speaker) => ({
    slug: btoa(id),
  }));
}

async function getSpeakerInfo(slug: string) {
  const speakers = await fetch(
    `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json`
  );

  let speakersList = await speakers.json();
  speakersList = speakersList.speakers;

  return getSpeakerDetails(speakersList, atob(slug));
}

export default async function Speaker({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const speakerInfo = await getSpeakerInfo(slug);
  const { name, bio, id, sessions }: SpeakerWithSessions = speakerInfo;

  return (
    <section key={id} className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }: SpeakerSummary) => (
          <section key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </section>
        ))}
    </section>
  );
}
