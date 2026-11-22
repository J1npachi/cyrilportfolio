import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { title: "The problem", body: project.problem },
    { title: "What I built", body: project.approach },
    { title: "The result", body: project.result },
    { title: "What I learned", body: project.lesson },
  ];

  return (
    <article>
      <section className="page-head">
        <div className="container">
          <Link href="/projects" className="text-link back-link">
            All projects
          </Link>
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>

          <dl className="case-meta">
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{project.tags.join(", ")}</dd>
            </div>
          </dl>

          {(project.liveUrl || project.sourceUrl) && (
            <div className="hero-actions">
              {project.liveUrl && (
                <a
                  className="btn btn-primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              )}
              {project.sourceUrl && (
                <a
                  className="btn btn-ghost"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {project.image && (
        <div className="container case-image">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1600}
            height={1000}
            sizes="(min-width: 1100px) 1088px, 100vw"
            priority
          />
        </div>
      )}

      <section className="case-body">
        <div className="container">
          {sections.map((s) => (
            <div key={s.title} className="case-section">
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href={`/projects/${next.slug}`} className="next-project">
            <span>Next project</span>
            <span className="next-title">{next.title}</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
