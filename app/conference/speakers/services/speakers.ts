import { Speaker } from "../page";

export async function fetchSpeakers() {
  // Static Data Fetching
  const speakers = await fetch(
    `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json`
  );

  // Static Data Fetching with Revalidation
  //   const speakers = await fetch(
  //     `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json`,
  //     {
  //       next: { revalidate: 5 },
  //     }
  //   );

  // Dynamic Data Fetching
  //   const speakers = await fetch(
  //     `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json`,
  //     {
  //       cache: "no-cache",
  //     }
  //   );

  return speakers.json();
}

export function getSpeakerDetails(speakers: Speaker[], speakerId: string) {
  const speaker = speakers.find(({ id }: { id: string }) => id === speakerId);

  if (speaker === undefined) {
    throw new Error(`Speaker with id ${speakerId} not found`);
  }

  return speaker;
}
