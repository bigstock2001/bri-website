export default function MusicPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Music</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        Listen on your favorite platform.
      </p>

      <div style={{ marginTop: 16 }}>
        <h2 className="h2">Streaming Links</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li className="muted">Spotify (add link)</li>
          <li className="muted">Apple Music (add link)</li>
          <li className="muted">YouTube (add link)</li>
        </ul>
      </div>

      <div style={{ marginTop: 16 }}>
        <h2 className="h2">Embeds</h2>
        <p className="muted">Next step: drop in Spotify/YouTube embed blocks for instant polish.</p>
      </div>
    </div>
  );
}
