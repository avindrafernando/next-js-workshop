export async function fetchSessions() {
  // Static Data Fetching
  const sessions = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json"
  );

  // Static Data Fetching with Revalidation
  //   const sessions = await fetch(
  //     `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json`,
  //     {
  //       next: { revalidate: 5 },
  //     }
  //   );

  // Dynamic Data Fetching
  //   const sessions = await fetch(
  //     `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json`,
  //     {
  //       cache: "no-cache",
  //     }
  //   );

  return sessions.json();
}
