import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Projects</h1>
          <p className="lead">
            A few things I've built, and what I learned making them. Open one
            to read the full story.
          </p>
        </div>
      </section>

      <section className="project-section">
        <div className="container">
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.slug} className="project">
                <p className="project-year">{p.year}</p>
                <div className="project-body">
                  <h2>
                    <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                  </h2>
                  <p>{p.description}</p>
                  <ul className="tags" aria-label="Built with">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link className="text-link" href={`/projects/${p.slug}`}>
                    Read the case study
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
