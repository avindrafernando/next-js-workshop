"use client";

import React from "react";
import styles from "./badge.module.css";

export default function Badge({ text }: { text: string }) {
  const [isActive, setIsActive] = React.useState(false);

  function toggleIsActive() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <section
      className={`${styles.badgeContainer} ${
        isActive ? styles.badgeActive : styles.badge
      }`}
      onMouseEnter={toggleIsActive}
      onMouseLeave={toggleIsActive}
    >
      {text}
    </section>
  );
}
