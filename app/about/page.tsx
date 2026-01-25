export default function AboutPage() {
  return (
    <div className="card">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* About Image */}
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <img
            src="/briabout.jpg"
            alt="Briella Steiner"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Bio Content */}
        <div>
          <h1 className="h1" style={{ fontSize: 34 }}>
            About Briella Steiner
          </h1>

          <p className="muted" style={{ marginTop: 12 }}>
            Briella Steiner is a rising country artist with a voice that feels
            both timeless and fresh. Blending heartfelt storytelling with a
            modern edge, Briella brings emotion, grit, and charm to every song
            she sings. Whether she’s performing an intimate acoustic set or
            lighting up a full stage, her music connects because it comes from a
            real place.
          </p>

          <p className="muted" style={{ marginTop: 12 }}>
            Her debut tracks, <strong>“Good Boy”</strong> and{" "}
            <strong>“A Better Feeling”</strong>, introduce listeners to both
            sides of her artistry—playful confidence on one hand, and honest,
            emotional depth on the other. These songs reflect Briella’s ability
            to tell relatable stories with authenticity, capturing moments that
            feel personal while still resonating with a wide audience.
          </p>

          <p className="muted" style={{ marginTop: 12 }}>
            Raised on classic country influences and inspired by today’s
            powerful female artists, Briella’s sound lives at the crossroads of
            tradition and evolution. Her music explores love, resilience,
            small-town roots, and big dreams—the kind of stories that feel
            familiar the moment you hear them.
          </p>

          <p className="muted" style={{ marginTop: 12 }}>
            On stage, Briella’s presence is magnetic. With her signature style,
            warm smile, and undeniable confidence, she turns every performance
            into an experience. Fans don’t just listen—they feel part of the
            journey.
          </p>

          <p className="muted" style={{ marginTop: 12 }}>
            As she continues to release new music and expand her reach, Briella
            Steiner is carving out her own lane in country music—one song, one
            show, and one connection at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
