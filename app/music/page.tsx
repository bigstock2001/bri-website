export default function MusicPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        New Music Coming Soon
      </h1>

      <p className="muted" style={{ marginTop: 10 }}>
        Listen and watch below.
      </p>

      {/* Spotify Embed */}
      <div style={{ marginTop: 20 }}>
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
    </div>
  );
}
