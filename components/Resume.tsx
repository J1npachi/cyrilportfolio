"use client";

import { useId, useState } from "react";
import { profile, resume } from "@/lib/data";

export default function Resume() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="resume" aria-label="Resume">
      <div className="container">
        <div className="resume-bar no-print">
          <h2>Resume</h2>
          <div className="resume-actions">
            <button
              type="button"
              className="btn btn-primary"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Hide resume" : "Show resume"}
            </button>
            {open && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => window.print()}
              >
                Save as PDF
              </button>
            )}
          </div>
        </div>

        <div
          id={panelId}
          className="resume-panel"
          data-open={open}
          inert={!open}
        >
          <div className="resume-inner">
            <div className="resume-doc">
              <header className="resume-head">
                <h3>{profile.name}</h3>
                <p>
                  {profile.role}. {profile.email}
                </p>
              </header>

              <p className="resume-summary">{resume.summary}</p>

              <div className="resume-group">
                <h4>Experience</h4>
                <div className="resume-entries">
                  {resume.experience.map((e) => (
                    <article key={e.title + e.org} className="resume-entry">
                      <div className="resume-entry-head">
                        <p className="resume-title">{e.title}</p>
                        <p className="resume-period">{e.period}</p>
                      </div>
                      <p className="resume-org">{e.org}</p>
                      {e.points && (
                        <ul>
                          {e.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </div>

              <div className="resume-group">
                <h4>Education</h4>
                <div className="resume-entries">
                  {resume.education.map((e) => (
                    <article key={e.title + e.org} className="resume-entry">
                      <div className="resume-entry-head">
                        <p className="resume-title">{e.title}</p>
                        <p className="resume-period">{e.period}</p>
                      </div>
                      <p className="resume-org">{e.org}</p>
                      {e.points && (
                      <ul>
                        {e.points.map((p) => (
                          <li key={p}>{p}</li>
                       ))}
                      </ul>
                     )}
                    </article>
                  ))}
                </div>
              </div>

              <div className="resume-group">
                <h4>Skills</h4>
                <dl className="resume-skills">  
                  {resume.skills.map((s) => (
                    <div key={s.group}>
                      <dt>{s.group}</dt>
                      <dd>{s.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
