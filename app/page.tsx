import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid">
      {/* Main intro */}
      <section className="card col-7">
        <h1 className="h1">Briella Steiner</h1>

        <p className="muted" style={{ marginTop: 12, fontSize: 16 }}>
          Country artist. Storyteller. Performer.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <Link href="/shows" className="nav-link">
            View Shows
          </Link>
          <Link href="/music" className="nav-link">
            Music
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/contact" className="nav-link">
            Booking
          </Link>
        </div>

        {/* Spotify Embed */}
        <div style={{ marginTop: 22 }}>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/artist/7gl3QOgIew8NLttIjus3sS?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        {/* YouTube Video Embed */}
        <div style={{ marginTop: 22 }}>
          <iframe
            width="100%"
            height="315"
            style={{ borderRadius: 12 }}
            src="https://www.youtube.com/embed/4WxbhncIAF4"
            title="Briella Steiner - YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Sidebar */}
      <aside className="card col-5">
        <h2 className="h2">Welcome</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Welcome to the official site of Briella Steiner. Here you’ll find
          upcoming show dates, music, and updates as new releases drop.
        </p>

        <div style={{ marginTop: 16 }}>
          <h2 className="h2">Quick Links</h2>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <Link className="link" href="/shows">
                Upcoming Shows
              </Link>
            </li>
            <li>
              <Link className="link" href="/music">
                Spotify & Videos
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                Booking & Contact
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
