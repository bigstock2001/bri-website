export default function ShowsPage() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 18,
        overflow: "hidden",
        minHeight: "70vh",
      }}
    >
      {/* Page-only background image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(0,0,0,0.20), rgba(0,0,0,0.72) 55%), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.12), rgba(0,0,0,0.82) 60%), url('/Dates.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "saturate(1.05) contrast(1.02)",
          transform: "scale(1.02)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="card" style={{ marginBottom: 14 }}>
          <h1 className="h1" style={{ fontSize: 34 }}>
            Shows
          </h1>
          <p className="muted" style={{ marginTop: 10 }}>
            All upcoming dates are listed on the schedule image below.
          </p>
        </div>

        {/* Main schedule display (no extra glass over it) */}
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <img
            src="/Dates.jpg"
            alt="Bri show dates schedule"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Optional note card */}
        <div className="card" style={{ marginTop: 14 }}>
          <h2 className="h2">Booking</h2>
          <p className="muted">
            Want Bri at your venue or event? Head to the Contact page to book.
          </p>
        </div>
      </div>
    </div>
  );
}
