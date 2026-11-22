import styles from "./TechStrip.module.css";

// Edit this list. Only keep what you have really used.
const GROUPS = [
  {
    name: "Languages",
    items: ["C++", "Java", "Kotlin", "HTML", "CSS"],
  },
  {
    name: "Tools",
    items: ["Android Studio", "Firebase", "Figma"],
  },
  {
    name: "Systems",
    items: ["Computer assembly", "OS installation", "Troubleshooting"],
  },
];

export default function TechStrip() {
  return (
    <dl className={styles.strip}>
      {GROUPS.map((g) => (
        <div key={g.name} className={styles.group}>
          <dt>{g.name}</dt>
          <dd>
            {g.items.map((item) => (
              <span key={item} className={styles.item}>
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
