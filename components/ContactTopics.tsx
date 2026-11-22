import styles from "./ContactTopics.module.css";

// Edit these so they match what you want people to contact you about.
const TOPICS = [
  "Internship opportunities",
  "Working together on a project",
  "Questions about my work",
];

export default function ContactTopics({ location }: { location: string }) {
  return (
    <div className={styles.wrap}>
      <div>
        <h2>Good reasons to write</h2>
        <ul className={styles.list}>
          {TOPICS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Where I am</h2>
        <p className={styles.place}>{location}</p>
      </div>
    </div>
  );
}
