import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid">
      <section className="card col-7">
        <h1 className="h1">Bri</h1>
        <p className="muted" style={{ marginTop: 12, fontSize: 16 }}>
          Official home for shows, music, and updates.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <Link href="/shows" className="nav-link">View Shows</Link>
          <Link href="/music" className="nav-link">Listen to Music</Link>
          <Link href="/blog" className="nav-link">Read the Blog</Link>
        </div>

        <div style={{ marginTop: 18 }}>
          <p className="muted">
            Tip: we can add Spotify/Apple embeds and an email signup next (easy win for fan interaction).
          </p>
        </div>
      </section>

      <aside className="card col-5">
        <h2 className="h2">Quick Links</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li><Link className="link" href="/shows">Upcoming shows</Link></li>
          <li><Link className="link" href="/music">Music & streaming</Link></li>
          <li><Link className="link" href="/contact">Booking / contact</Link></li>
        </ul>

        <div style={{ marginTop: 16 }}>
          <h2 className="h2">Latest</h2>
          <p className="muted">Blog will show latest posts here after we connect Sanity.</p>
        </div>
      </aside>
    </div>
  );
}
