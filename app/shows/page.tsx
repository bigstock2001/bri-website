export default function ShowsPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Shows</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        Upcoming and past performances.
      </p>

      <div style={{ marginTop: 16 }}>
        <h2 className="h2">Upcoming</h2>
        <p className="muted">We’ll wire this to a simple list next (manual or Sanity later if you want).</p>
      </div>

      <div style={{ marginTop: 16 }}>
        <h2 className="h2">Past</h2>
        <p className="muted">Optional section for highlights, venues, and photos.</p>
      </div>
    </div>
  );
}
