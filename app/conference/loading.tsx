import styles from "./conference.module.css";

/** Loading skeleton for conference sessions and speakers page */
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      {Array(10)
        .fill(1)
        .map((index) => (
          <div key={index} className={styles.skeletonContainer}></div>
        ))}
    </>
  );
}
