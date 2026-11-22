import styles from "./Journey.module.css";

// Edit the years and text so every line is true for you.
const STEPS = [
  {
    when: "2023",
    title: "Computer Systems Servicing",
    text: "Started senior high school in the TVL track and learned how computers are built, set up, and fixed.",
  },
  {
    when: "2025",
    title: "NC II and work immersion",
    text: "Earned my Computer Systems Servicing NC II from TESDA and completed work immersion at Barangay SK HUB.",
  },
  {
    when: "2025",
    title: "First programs",
    text: "Started BS Information Technology and built a typing speed test in C++, then rebuilt it in Java.",
  },
  {
    when: "2026",
    title: "Websites and app design",
    text: "Built FitPacer with HTML and CSS and designed a mobile app layout in Figma.",
  },
  {
    when: "Now",
    title: "Android with Kotlin",
    text: "Building an Android app with Firebase and Firestore authentication in Android Studio.",
  },
];

export default function Journey() {
  return (
    <ol className={styles.list}>
      {STEPS.map((s) => (
        <li key={s.title} className={styles.step}>
          <p className={styles.when}>{s.when}</p>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
