import styles from "../conference.module.css";
import { SpeakerSummary } from "../speakers/page";
import {
  fetchSpeakers,
  getSpeakerDetails,
} from "../speakers/services/speakers";
import { fetchSessions } from "./services/sessions";

export default async function Sessions() {
  const sessionsRequest = fetchSessions();
  const speakersRequest = fetchSpeakers();

  const [sessionsData, speakersData] = await Promise.all([
    sessionsRequest,
    speakersRequest,
  ]);

  return (
    <>
      <section className={styles.parentContainer}>
        <section>Last Rendered: {new Date().toLocaleTimeString()}</section>
        <h1>Welcome to Globomantics Sessions</h1>
        {sessionsData.sessions.map(
          ({
            id,
            title,
            description,
            room,
            day,
            track,
            speakers,
          }: {
            id: string;
            title: string;
            description: string;
            room: string;
            day: string;
            track: string;
            speakers: SpeakerSummary[];
          }) => (
            <div key={id} className={styles.infoContainer}>
              <h3 className={styles.titleText}>{title}</h3>
              {speakers &&
                speakers.map(({ id }) => {
                  const speakerDetails = getSpeakerDetails(
                    speakersData.speakers,
                    id
                  );
                  return (
                    <h3 key={id} className={styles.titleText}>
                      Speaker: {speakerDetails.name}
                      {speakerDetails?.featured && " (Featured)"}
                    </h3>
                  );
                })}
              <h5 className={styles.descText}>{description}</h5>
              <h4 className={styles.infoText}>Room: {room}</h4>
              <h4 className={styles.infoText}>Day: {day}</h4>
              <h4 className={styles.infoText}>Track: {track}</h4>
            </div>
          )
        )}
      </section>
    </>
  );
}
