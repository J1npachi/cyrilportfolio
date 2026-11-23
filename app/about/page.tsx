import type { Metadata } from "next";
import Portrait from "@/components/Portrait";
import Resume from "@/components/Resume";
import { about } from "@/lib/data";
import Journey from "@/components/Journey";

export const metadata: Metadata = {
  title: "About",
  description: "Background, focus, and resume.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>About</h1>
          <p className="lead">
            Who I am, how I work, and my full resume below.
          </p>
          <div className="hero-actions">
  <a
    className="btn btn-ghost"
    href="/resume.pdf"
    download="Cyril-Mandin-Resume.pdf"
  >
    Download resume
  </a>
</div>
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <div className="about-side">
            <Portrait />
            <dl className="facts">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="prose">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>
              <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>My journey</h2>
          </div>
          <Journey />
        </div>
      </section>
      <Resume />
    </>
  );
}
