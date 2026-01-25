export default function MusicPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        Be On The Look Out, New Music Coming Soon
      </h1>

      <p className="muted" style={{ marginTop: 10 }}>
        Stay tuned for upcoming releases.
      </p>

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
    </div>
  );
}
