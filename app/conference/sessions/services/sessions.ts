import { SESSIONS_URL } from "@/lib/constants";

export async function fetchSessions() {
  // Static Data Fetching
  const sessions = await fetch(SESSIONS_URL);

  // Static Data Fetching with Revalidation
  // const sessions = await fetch(SESSIONS_URL, {
  //   next: { revalidate: 5 },
  // });

  // Dynamic Data Fetching
  // const sessions = await fetch(SESSIONS_URL, {
  //   cache: "no-cache",
  // });

  return sessions.json();
}
