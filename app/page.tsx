import Link from "next/link";
import { now, profile, projects } from "@/lib/data";
import TypingTest from "@/components/TypingTest";
import TechStrip from "@/components/TechStrip";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const place = profile.location.split(",")[0];

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>{profile.statement}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link href="/projects" className="btn btn-primary">
              View projects
            </Link>
            <Link href="/about" className="btn btn-ghost">
              About me
            </Link>
          </div>
         
        </div>
      </section>
        <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Try a typing test</h2>
          </div>
          <p className="lead" style={{ marginBottom: "1.75rem" }}>
            My first project was a typing speed test. Here is a small web version.
          </p>
          <TypingTest />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Selected work</h2>
            <Link href="/projects" className="text-link">
              All projects
            </Link>
          </div>
          <ul className="work-list">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="work-row">
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span className="work-year">{p.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

            <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Tools I use</h2>
          </div>
          <TechStrip />
        </div>
      </section>

      <section className="section">
        <div className="container now">
          <div>
            <h2>Right now</h2>
            <p className="now-updated">Updated {now.updated}</p>
          </div>
          <dl className="now-list">
            {now.items.map((i) => (
              <div key={i.label}>
                <dt>{i.label}</dt>
                <dd>{i.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
