import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="container">
        <h1>Page not found</h1>
        <p className="lead">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
