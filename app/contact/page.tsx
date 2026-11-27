import type { Metadata } from "next";
import { profile } from "@/lib/data";
import CopyEmail from "@/components/CopyEmail";
import ContactTopics from "@/components/ContactTopics";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Contact</h1>
          <p className="lead">
            {profile.availability}. The fastest way to reach me is email.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />

          <ul className="contact-list">
            {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
            <span>{s.label}</span>
            <span className="contact-host">
              {new URL(s.href).hostname.replace("www.", "")}
            </span>
          </a>
        </li>
      ))}
    </ul>

          <ContactTopics location={profile.location} />
        </div>
      </section>
    </>
  );
}
