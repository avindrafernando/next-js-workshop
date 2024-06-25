import { Speaker } from "../page";
import { SPEAKERS_URL } from "@/lib/constants";

export async function fetchSpeakers() {
  // Static Data Fetching
  const speakers = await fetch(SPEAKERS_URL);

  // Static Data Fetching with Revalidation
  // const speakers = await fetch(SPEAKERS_URL, {
  //   next: { revalidate: 5 },
  // });

  // Dynamic Data Fetching
  // const speakers = await fetch(SPEAKERS_URL, {
  //   cache: "no-cache",
  // });

  return speakers.json();
}

export function getSpeakerDetails(speakers: Speaker[], speakerId: string) {
  const speaker = speakers.find(({ id }: { id: string }) => id === speakerId);

  if (speaker === undefined) {
    throw new Error(`Speaker with id ${speakerId} not found`);
  }

  return speaker;
}
