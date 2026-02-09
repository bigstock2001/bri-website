import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        Contact / Booking
      </h1>

      <p className="muted" style={{ marginTop: 10 }}>
        For booking, press, or event inquiries, reach out by email below.
      </p>

      <div style={{ marginTop: 18 }}>
        <h2 className="h2">Booking Email</h2>

        <p className="muted" style={{ marginTop: 8, fontSize: 16 }}>
          <a className="link" href="mailto:BriellaSteinerBooking@gmail.com">
            BriellaSteinerBooking@gmail.com
          </a>
        </p>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="nav-link" href="mailto:BriellaSteinerBooking@gmail.com">
            Email Brie
          </a>
          <Link className="nav-link" href="/shows">
            View Show Dates
          </Link>
          <Link className="nav-link" href="/music">
            Listen on Spotify
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h2 className="h2">What to include</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li className="muted">Venue / event name and location</li>
          <li className="muted">Preferred date(s) and set length</li>
          <li className="muted">Sound/PA details (if provided)</li>
          <li className="muted">Best contact number (optional)</li>
        </ul>
      </div>
    </div>
  );
}
