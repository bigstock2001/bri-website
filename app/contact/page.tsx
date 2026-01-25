export default function ContactPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Contact / Booking</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        Add booking email, social links, and a simple contact form.
      </p>

      <div style={{ marginTop: 16 }}>
        <h2 className="h2">Booking</h2>
        <p className="muted">Email: (add here)</p>
      </div>

      <div style={{ marginTop: 16 }}>
        <h2 className="h2">Social</h2>
        <p className="muted">Instagram / TikTok / YouTube links (add here)</p>
      </div>
    </div>
  );
}
