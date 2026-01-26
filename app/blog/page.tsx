export const dynamic = "force-dynamic";

export default function BlogPage() {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        NEW BLOG PAGE LOADED ✅
      </h1>
      <p className="muted" style={{ marginTop: 10 }}>
        If you still see "Read more", you are NOT deploying this file.
      </p>
    </div>
  );
}
